var app = app || {};

(function($) {
  app.mainView = Backbone.View.extend({
    el: '#tpl-ricerca-container',
    template: _.template( $('#tpl-ricerca').html() ),
    initialize: function() {
      this.edifici = new app.Edifici(app.Data.Edifici);
      this.appartamenti = new app.Appartamenti();
      this.listenTo(this.appartamenti,'reset',this.render);
      this.appartamenti.add(app.Data.Appartamenti);
      this.appartamenti.trigger('reset');
      // this.appartamenti = new app.Appartamenti();
      // this.appartamenti.fetch({reset: true});
      // this.listenTo(this.appartamenti,'reset',this.render);
    },
    events: {
      'click #btn-ricerca-edificio': 'ricercaEdificio',
      'change input[name="edificio"]': 'ricercaEdificio',
      'click #btn-ricerca-tipologia': 'ricercaTipologia',
      'change input[name="tipologia"]': 'ricercaTipologia',
      'click #btn-ricerca-appartamento': 'ricercaAppartamento'
    },
    render: function() {
      console.log('MainView rendered');
      this.$el.html( this.template() );
    },
    ricercaEdificio: function(e) {
      e.preventDefault();
      this.clearRisultatiRicerca();
      console.log("clicked ricerca edificio");
      // collect form data
      var edificio = $(e.target).parent().find("input:checked").val();
      var model = this.edifici.find(function(model) { 
        return model.get('id') == edificio;
      });
      // render subview
      var ricercaEdificioView = new app.ricercaEdificioView();
      this.$el.find("div#tpl-risultati-ricerca-edificio-container").html( ricercaEdificioView.render(model.toJSON()) );      
    },
    ricercaTipologia: function(e) {
      e.preventDefault();
      this.clearRisultatiRicerca();
      // get form data
      var tipologia = $(e.target).parent().find("input:checked").val();
      console.log("clicked ricerca tipologia, tipologia: "+tipologia);
      // risultato ricerca
      // res = { A:[{app.1},{app.2},..], C:[{app.1},..]}
      var apps = this.appartamenti.where({tipologia: tipologia});      
      var edifici = [];
      keys = _.keys(_.groupBy(apps,function(app){return app.get("edificio")}));
      var self = this;
      _.each(keys, function(edificio) {
        edifici.push(self.edifici.findWhere({edificio: edificio}));
      });
      var c = new Backbone.Collection(apps);
      var nres = _.map(edifici, function(edificio){ 
        return c.where({"edificio":edificio.get("id")}).length;
      });
      var ricercaTipologiaView = new app.ricercaTipologiaView();
      this.$el.find("div#tpl-risultati-ricerca-tipologia-container").html( ricercaTipologiaView.render(edifici,nres,apps) );  


      // edifici.forEach(function(edificio) {
      //   var ricercaTipologiaView = new app.ricercaTipologiaView();
      //   self.$el.find("div#tpl-risultati-ricerca-tipologia-container").html( ricercaTipologiaView.render(edificio,apps) );  
      // });
    },
    ricercaAppartamento: function(e) {
      e.preventDefault();
      var id = $(e.target).parent().find("input").val();
      var appartamento = this.appartamenti.findWhere({nome: id});
      if ( typeof(appartamento)!=="undefined" ) {
        this.clearRisultatiRicerca();
        var modalView = new app.modalView();
        var cnt = modalView.render( appartamento.toJSON() );
        $("#modals-container").append( cnt );   
        $("#"+id).modal('show');             
      } else {
        alert("Il codice appartamento inserito non è valido");
      }
    },
    clearRisultatiRicerca: function() {
      $("div.appartamenti.risultati-ricerca").empty();
    }
  });
})(jQuery)