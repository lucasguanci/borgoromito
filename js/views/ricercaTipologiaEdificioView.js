var app = app || {};

(function($) {
  app.ricercaTipologiaEdificioView = Backbone.View.extend({
    template: _.template( $('#tpl-nav-tabs-content').html() ),
    render: function(edificio,nres,appartamenti) {
      this.$el.html( this.template({edificio: edificio.toJSON(), nres: nres}) );
      var e = edificio.get("id");
      // ricerca piani
      var np = edificio.get("piani").length;
      var p = [];
      var c = new Backbone.Collection(appartamenti);
      for ( var i=0; i<np; i++ ) {
        piano = i+1;
        piano += "";
        apps = c.where({piano: piano});
        if ( apps.length>0 ) {
          console.log("render piano "+piano);
          // render piano
          var pianoView = new app.ricercaTipologiaPianoView();
          var cnt = pianoView.render( piano, apps );
          this.$el.find('div.piani-container').append( cnt );          
        }
      }
      console.log(p);
      return this.$el;        
    }
  });
})(jQuery);