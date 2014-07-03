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
      this.appartamenti = new app.Appartamenti();
      console.log('init: '+this.appartamenti.length);
      this.listenTo(this.appartamenti, 'reset', this.render);
      // collect models and create new collection
      this.readCouchDB();
    },
    events: {
      'click button.add': 'addEdit',
      'click button.edit': 'addEdit',
      'click button.remove': 'remove',
      'submit form.admin': 'submitForm'
    },
    render: function() {
      this.appartamenti.sort();
      this.$el.html( this.template(this.ctype) );
      subview = new app.ctypeView();    
      this.$el.find('#appartamenti div.panel-body').html(subview.render("appartamenti",this.appartamenti));
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
          formData.planimetria_piano = $(e.target).find('input[name="planimetria_piano"]').val();
          break;
      }
      // check if CREATE or UPDATE      
      if ( typeof(model)!=="undefined" ) {
        // UPDATE
        var m = this.appartamenti.findWhere({_id:model});
        var id = m.get("_id");
        var rev = m.get("_rev");
        formData._rev = rev;
        this.updateCouchDB(id,formData);
        this.readCouchDB();
      } else {
        // CREATE
        this.createCouchDB(formData);  
        this.readCouchDB();   
      }
    },
    readCouchDB: function() {
      this.appartamenti.reset(undefined, {silent:true});
      var self = this;
      var loaded = new $.Deferred();
      loaded.done(function() {
        console.log('read from DB: '+self.appartamenti.length);
        self.appartamenti.trigger('reset');        
      });      
      $.getJSON('https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/_design/get/_view/all', function(data) {
          var n = data.total_rows;
          var c = 0; // count getted documents
          _.each(data.rows, function(item, index) {
            // get id
            $.getJSON('https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/'+item.id, function(model) { 
                self.appartamenti.add(model);
                c += 1;
                if ( c >= n ) {
                  loaded.resolve();      
                }                
              });
          });          
      });
    }, 
    createCouchDB: function(formData) {
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
    updateCouchDB: function(id,formData) {
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
