var app = app || {};

(function($) {
  app.ricercaTipologiaPianoView = Backbone.View.extend({
    className: "piani",
    template: _.template( $('#tpl-risultati-ricerca-tipologia-piano').html() ),
    initialize: function() {
      ;
    },
    events: {},
    render: function(piano,apps) {
      // create modals
      _.each(apps,function(item) {
        var modalView = new app.modalView();
        var cnt = modalView.render( item.toJSON() );
        $("#modals-container").append( cnt );        
      });
      // render view
      this.$el.append( this.template({piano: piano, apps: apps}) );
      return this.$el;        

      // render modals and catch click events on area maps
      // ricerca appartamenti appartenenti piano e ritorna collection di appartamenti
      // var e = model.edificio;
      // var p = parseInt(piano)+1;
      // p += "";
      // var appartamenti = this.appartamenti.where({"edificio":e,"piano":p});
      // // render subview
      // $("#modals-container").empty();        
      // _.each(appartamenti,function(item) {
      //   var modalView = new app.modalView();
      //   var cnt = modalView.render( item.toJSON() );
      //   $("#modals-container").append( cnt );        
      // });
      // // display piano
      // this.$el.html( this.template({edificio: model, piano: piano}) );
      // return this.$el;        
    }
  });
})(jQuery);