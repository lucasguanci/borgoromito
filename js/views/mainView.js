var app = app || {};

(function($) {
  app.mainView = Backbone.View.extend({
    el: '#tpl-ricerca-container',
    template: _.template( $('#tpl-ricerca').html() ),
    initialize: function() {
      this.collection = new app.Edifici(app.Data.Edifici);
      this.render();
    },
    events: {
      'click #btn-ricerca-edificio': 'ricercaEdificio',
      'change input[name="edificio"]': 'ricercaEdificio',
      'click #btn-ricerca-tipologia': 'ricercaTipologia',
      'click #btn-ricerca-appartamento': 'ricercaAppartamento',
      'click button.test': 'ricercaEdificio'
    },
    renderTest: function() {
      this.$el.html( this.template() );
    },
    render: function() {
      this.$el.html( this.template() );
      // this.renderRicercaTipologia();
      // this.renderRicercaAppartamento();
    },
    renderRicercaEdificio: function(model) {   
      console.log("clicked ricerca edificio"); 
    },
    ricercaEdificio: function(e) {
      e.preventDefault();
      console.log("clicked ricerca edificio");
      // collect form data
      var edificio = $(e.target).parent().find("input:checked").val();
      var model = this.collection.find(function(model) { 
        return model.get('id') == edificio;
      });
      // render subview
      var ricercaEdificioView = new app.ricercaEdificioView();
      this.$el.find("div#tpl-risultati-ricerca-edificio-container").html( ricercaEdificioView.render(model.toJSON()) );      
    } 
  });
})(jQuery)