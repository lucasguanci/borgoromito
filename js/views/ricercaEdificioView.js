var app = app || {};

(function($) {
  app.ricercaEdificioView = Backbone.View.extend({
    el: '#tpl-risultati-ricerca-edificio-container',
    template: _.template( $('#tpl-risultati-ricerca-edificio').html() ),
    events: {
      'click #btn-seleziona-piano': 'renderPiano',
      'change #select-seleziona-piano': 'renderPiano'
    },
    render: function(model) {
      this.model = model;
      this.$el.empty();
      var $container = $('#tpl-risultati-ricerca-edificio-container');
      this.$el.html( this.template({edificio: model}) );
      return this.$el;        

      // if ( $container.hasClass("active") ) {
      //   $container.removeClass("active");
      //   $container.hide();
      // } else {
      //   $container.addClass("active");
      //   $container.show();
      //   this.$el.html( this.template() );
      //   return this.$el;        
      // }
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