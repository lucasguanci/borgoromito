var app = app || {};

(function($){
  app.adminView = Backbone.View.extend({
    el: '#admin-content-wrapper',
    template: _.template( $('#tpl-admin').html() ),
    initialize: function() {
      this.ctype = [
        {
          name: "appartamenti"
          // url: "/artists"
        }
      ];     
      // this.appartamenti = new app.Appartamenti();
      // this.appartamenti.fetch({reset: true});
      // this.listenTo(this.appartamenti, 'reset', this.render);
      // this.listenTo(this.appartamenti, 'sort', this.render);
      // collect models and create new collection
      app.Collections = {};
      app.Collections.Appartamenti = {};
      var self = this;
      var loaded = new $.Deferred();
      loaded.done(function() {
        console.log(self.appartamenti.length);
        app.Collections.Appartamenti.trigger('reset');        
      });
      $.getJSON('https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/_design/get/_view/all', function(data) {
          app.Collections.Appartamenti = new app.Appartamenti();
          self.listenTo(app.Collections.Appartamenti, 'reset', self.render);
          var n = data.total_rows;
          _.each(data.rows, function(item, index) {
            // get id
            $.getJSON('https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/'+item.id, function(model) { 
                app.Collections.Appartamenti.add(model);
                if ( index == n-1 ) {
                  self.appartamenti = app.Collections.Appartamenti;
                  loaded.resolve();      
                }                
              });
          });
          
      });
    },
    events: {
      'click button.add': 'addEdit',
      'click button.edit': 'addEdit',
      'click button.remove': 'remove',
      'submit form.admin': 'submitForm'
    },
    render: function() {
      this.$el.append( this.template(this.ctype) );
      subview = new app.ctypeView();    
      this.$el.find('#appartamenti').append(subview.render("appartamenti",this.appartamenti));
      // _.each(this.ctype, function(type) {
        // $.getJSON(type.url)
        //   .done(function(data) {
        //     subview = new app.ctypeView();    
        //     self.$el.find('#'+type.name).append(subview.render(type.name,data));
        //     console.log('type: '+type.name);
        //   });
      // });
    },
    addEdit: function(e) {
      var ctype = $(e.target).attr('data-ctype');
      var model = $(e.target).attr('data-model');
      var self = this;
      if ( typeof(model)=="undefined" ) {
        // CREATE
        var target = $('div.cnt.'+ctype+'[data-model="new"]');
        if ( $(target).hasClass("active") ) {
          target.removeClass("active").toggle();
        } else {
          target.addClass("active").toggle();
        }
        // display form
        subview = new app.addEditView();
        data = undefined;
        self.$el.find('div.cnt.'+ctype+'[data-model="new"]').html(subview.render(ctype, data));
        // enable CKeditor
        self.$el.find('textarea').each(function(i,item) {
          var id = $(this).attr('name');
          CKEDITOR.replace(id);
        });
      } else {
        // UPDATE
        // hide active element and display selected
        var target = $('div.cnt[data-model="'+model+'"]');
        if ( $(target).hasClass("active") ) {
          $(target).removeClass("active").hide();
        } else {
          $('div.cnt.active').each(function(i, el) {
            $(el).removeClass("active").hide();
          });
          $('div.cnt[data-model="'+model+'"]').addClass("active").show();        
        }
        var m = this.appartamenti.findWhere({_id: model});
        subview = new app.addEditView();
        self.$el.find('div.cnt[data-model="'+model+'"]').empty().append(subview.render(ctype, m.toJSON()));
        // this.appartamenti.each(function(data){
        //   subview = new app.addEditView();
        //   self.$el.find('div.cnt[data-model="'+model+'"]').empty().append(subview.render(ctype, data.toJSON()));
        //   // enable CKeditor
        //   self.$el.find('textarea').each(function(i,item) {
        //     var id = $(this).attr('name');
        //     CKEDITOR.replace(id);
        //   });
        // }, this);
        // load and display model data
        // $.getJSON('/'+ctype+'/'+model)
        //   .done(function(data) {
        //     subview = new app.addEditView();
        //     self.$el.find('div.cnt[data-model="'+model+'"]').empty().append(subview.render(ctype, data));
        //     // enable CKeditor
        //     self.$el.find('textarea').each(function(i,item) {
        //       var id = $(this).attr('name');
        //       CKEDITOR.replace(id);
        //     });
        //   });
      }
    },
    submitForm: function(e) {
      e.preventDefault();
      model = $(e.target).attr('data-model');
      ctype = $(e.target).attr('data-ctype');
      var formData = {};
      // switch between cases
      switch (ctype) {
        case "appartamenti":
          formData.ctype = $(e.target).find('input[name="ctype"]').val();
          formData.nome = $(e.target).find('input[name="nome"]').val();
          formData.edificio = $(e.target).find('input[name="edificio"]').val();
          formData.piano = $(e.target).find('input[name="piano"]').val();
          formData.tipologia = $(e.target).find('input[name="tipologia"]').val();
          formData.superficie = {};
          formData.superficie.lorda = $(e.target).find('input[name="superficie_lorda"]').val();
          formData.superficie.logge = $(e.target).find('input[name="superficie_logge"]').val();
          formData.superficie.convenzionale = $(e.target).find('input[name="superficie_convenzionale"]').val();
          formData.camere = [];
          formData.camere[0] = $(e.target).find('input[name="camera_1"]').val();
          formData.camere[1] = $(e.target).find('input[name="camera_2"]').val();
          formData.bagni = [];
          formData.bagni[0] = $(e.target).find('input[name="bagno_1"]').val();
          formData.bagni[1] = $(e.target).find('input[name="bagno_2"]').val();
          formData.planimetria = $(e.target).find('input[name="planimetria"]').val();
          // bio
          // formData.immagini = [];
          // _.each($(e.target).find('input.immagini'),function(item){
          //   formData.immagini.push($(item).val());
          // });
          break;
      }
      // check if CREATE or UPDATE      
      if ( typeof(model)!=="undefined" ) {
        // UPDATE
        var m = this.appartamenti.findWhere({_id:model});
        var id = m.get("_id");
        var rev = m.get("_rev");
        formData._rev = rev;
        this.updateToDB(id,formData);
        app.Collections.Appartamenti.save(m);
        // save to DB
        // m.set(formData);
        // m.save();

        // $.ajax({
        //   url: '/'+ctype+'/'+model,
        //   type: 'PUT',
        //   // contentType: 'application/json',
        //   // dataType: "json",
        //   data: JSON.stringify(data),
        //   success: function(data,textStatus,jqXHR) {
        //     alert('DB updated.');
        //     console.log( 'PUT response:' );
        //     console.dir( data );
        //     console.log( textStatus );
        //     console.dir( jqXHR );
        //     $('div.cnt[data-model="'+model+'"]').removeClass("active").hide();
        //   },
        //   error: function(jqXHR,textStatus,errorThrown) {
        //     alert("error: "+textStatus);
        //   }
        // });
      } else {
        // CREATE
        this.createToDB(formData);        
        // $.post('/'+ctype, JSON.stringify(data), function(data,textStatus,jqXHR) {
        //     alert('DB post.');
        //     console.log( 'POST response:' );
        //     console.dir( data );
        //     console.log( textStatus );
        //     console.dir( jqXHR );
        //     $('div.cnt[data-model="new"]').removeClass("active").hide();
        //   }
        // );
      }
    },
    createToDB: function(formData) {
      var uuids = {};
      res = $.getJSON('https://brontoluke:rio2016@minimalg.iriscouch.com/_uuids', function(uuids) { 
          var uuid = uuids.uuids[0];
          $.ajax({
            url: 'https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/'+uuid,
            type: 'PUT',
            data: JSON.stringify(formData),
            success: function( data, textStatus, jqXHR ) {
              console.log( 'Post response:' );
              console.dir( data );
              console.log( textStatus );
              console.dir( jqXHR );
            }
          });
      });
    },
    updateToDB: function(id,formData) {
      $.ajax({
        url: 'https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/'+id,
        type: 'PUT',
        data: JSON.stringify(formData),
        success: function( data, textStatus, jqXHR ) {
          console.log( 'Post response:' );
          console.dir( data );
          console.log( textStatus );
          console.dir( jqXHR );
        }
      });
    }
  });
})(jQuery);
