var app = app || {};

(function($) {
  app.ricercaPianoView = Backbone.View.extend({
    template: _.template( $('#tpl-risultati-edificio-piano').html() ),
    initialize: function() {
      this.appartamenti = new app.Appartamenti(app.Data.Appartamenti);
    },
    events: {},
    render: function(model, piano) {
      this.$el.empty();
      // render modals and catch click events on area maps
      // ricerca appartamenti appartenenti piano e ritorna collection di appartamenti
      var e = model.edificio;
      var p = parseInt(piano);
      p += "";
      var appartamenti = this.appartamenti.where({"edificio":e,"piano":p});
      // render subview
      $("#modals-container").empty();        
      _.each(appartamenti,function(item) {
        var modalView = new app.modalView();
        var cnt = modalView.render( item.toJSON() );
        $("#modals-container").append( cnt );        
      });
      // display piano
      this.$el.html( this.template({edificio: model, piano: piano}) );
      return this.$el;        
    }
  });
})(jQuery);