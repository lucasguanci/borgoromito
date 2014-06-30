var app = app || {};

(function($) {
  app.ricercaTipologiaView = Backbone.View.extend({
    el: '#tpl-risultati-ricerca-tipologia-container',
    template: _.template( $('#tpl-risultati-ricerca-tipologia').html() ),
    initialize: function() {
      this.edifici = new app.Edifici(app.Data.Edifici);
    },
    events: {
      'click #btn-seleziona-piano': 'renderPiano',
      'change #select-seleziona-piano': 'renderPiano'
    },
    render: function(edificio,appartamenti) {
      var e = this.edifici.findWhere({id: edificio});
      var nres = appartamenti.length;
      this.$el.empty();      
      this.$el.html( this.template({edificio: e.toJSON(), nres: nres}) );
      // ricerca piani
      var np = e.get("piani").length;
      var p = [];
      var c = new Backbone.Collection(appartamenti, {model: app.Appartamento});
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
    },
    renderPiano: function(e) {
      e.preventDefault();
      // piano = 1,2,3,..
      var piano = $('#select-seleziona-piano').find(":selected").val();
      var ricercaPianoView = new app.ricercaPianoView();
      var cnt = ricercaPianoView.render(this.model,piano);
      this.$el.find('#risultati-edificio-piano').html( cnt );
    }
  });
})(jQuery);