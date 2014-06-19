var app = app || {};

(function($) {
  app.ricercaPianoView = Backbone.View.extend({
    template: _.template( $('#tpl-risultati-edificio-piano').html() ),
    events: {},
    render: function(model, piano) {
      this.$el.empty();
      // render modals and catch click events on area maps
      // ricerca appartamenti appartenenti piano e ritorna collection di appartamenti
      // ..
      // render subview
      // var modalsView = new app.modalsView();
      // var cnt = modalsView.render( appartamenti );
      // $("#modals-container").empty().html( cnt );
      // display piano
      this.$el.html( this.template({edificio: model, piano: piano}) );
      return this.$el;        
    }
  });
})(jQuery);