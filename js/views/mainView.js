var app = app || {};

(function($) {
  app.mainView = Backbone.View.extend({
    el: '#tpl-ricerca-container',
    template: _.template( $('#tpl-ricerca').html() ),
    initialize: function() {
      this.edifici = new app.Edifici(app.Data.Edifici);
      this.appartamenti = new app.Appartamenti(app.Data.Appartamenti);
      this.render();
    },
    events: {
      'click #btn-ricerca-edificio': 'ricercaEdificio',
      'change input[name="edificio"]': 'ricercaEdificio',
      'click #btn-ricerca-tipologia': 'ricercaTipologia',
      'change input[name="tipologia"]': 'ricercaTipologia',
      'click #btn-ricerca-appartamento': 'ricercaAppartamento',
      'click button.test': 'ricercaEdificio'
    },
    render: function() {
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
      edifici = _.keys(_.groupBy(apps,function(app){return app.get("edificio")}))
      var self = this;
      edifici.forEach(function(edificio) {
        var ricercaTipologiaView = new app.ricercaTipologiaView();
        self.$el.find("div#tpl-risultati-ricerca-tipologia-container").html( ricercaTipologiaView.render(edificio,apps) );  
      });
    },
    clearRisultatiRicerca: function() {
      $("div.appartamenti.risultati-ricerca").empty();
    }
  });
})(jQuery)