var app = app || {};

(function($) {
  app.MainView = Backbone.View.Extend({
    el: '#ricerca-wrapper',
    template: _.template( $('#tpl-mainView').html() ),
    initialize: function() {
      this.render();
    },
    events: {
      'click #btn-ricerca-edificio': 'ricercaEdificio',
      'click #btn-ricerca-tipologia': 'ricercaTipologia',
      'click #btn-ricerca-appartamento': 'ricercaAppartamento',
    },
    render: function() {
      this.$el.html( this.template() );
      var ricercaEdificio = this.renderRicercaEdificio();
      this.$el.find("div.ricerca-edificio").html(ricercaEdificio);      
      // this.renderRicercaTipologia();
      // this.renderRicercaAppartamento();
    },
    renderRicercaEdificio: function() {
      var ricercaEdificioView = new app.ricercaEdificioView();
      return ricercaEdificioView.render();
    } 
  });
})(jQuery)