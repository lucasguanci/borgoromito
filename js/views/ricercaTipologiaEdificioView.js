var app = app || {};

(function($) {
  app.ricercaTipologiaEdificioView = Backbone.View.extend({
    el: '#tpl-nav-tabs-content-container',
    template: _.template( $('#tpl-nav-tabs-content').html() ),
    render: function(edificio,nres,appartamenti,index) {
      this.$el.append( this.template({edificio: edificio.toJSON(), nres: nres, index: index}) );
      var e = edificio.get("id");
      // ricerca piani
      var np = edificio.get("piani").length;
      var c = new Backbone.Collection(appartamenti);
      for ( var i=0; i<np; i++ ) {
        piano = edificio.get("piani")[i];
        if ( i==0 && piano.piano=="nd" ) {
          continue;
        }
        p = i+"";
        apps = c.where({piano: p});
        if ( apps.length>0 ) {
          console.log("ed. %s render piano %s", e, p);
          // render piano
          var pianoView = new app.ricercaTipologiaPianoView();
          var cnt = pianoView.render( p, apps );
          var container = '#piani-container-'+e;
          this.$el.find(container).append( cnt );          
        }
      }
      return this.$el;        
    }
  });
})(jQuery);