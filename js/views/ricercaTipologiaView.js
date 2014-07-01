var app = app || {};

(function($) {
  app.ricercaTipologiaView = Backbone.View.extend({
    el: '#tpl-risultati-ricerca-tipologia-container',
    template: _.template( $('#tpl-risultati-ricerca-tipologia').html() ),
    initialize: function() {
      this.edifici = new app.Edifici(app.Data.Edifici);
    },
    render: function(edifici,nres,apps) {
      this.$el.empty();      
      this.$el.html( this.template({edifici: edifici, nres: nres}) );
      var c = new Backbone.Collection(apps);
      for ( var i=0; i<edifici.length; i++ ) {        
        var appartamenti = c.where({edificio: edifici[i].get("id")});
        this.renderRisultatiEdificio(edifici[i],nres[i],appartamenti);
      }
      return this.$el;        
    },
    renderRisultatiEdificio: function(edificio,nres,apps) {
      var edificioView = new app.ricercaTipologiaEdificioView();
      this.$el.find("#tpl-nav-tabs-content-container").append( edificioView.render(edificio,nres,apps) );
    }
  });
})(jQuery);