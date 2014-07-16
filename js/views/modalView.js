var app = app || {};

(function($) {
  app.modalView = Backbone.View.extend({
    template: _.template( $("#tpl-modal").html() ),
    events: {
      // 'click a.galleria-immagini-scheda': 'toggleModal',
      'click a.btn': 'toggleModal'
    },
    render: function(appartamento) {
      this.$el.html( this.template({app: appartamento}) );
      return this.$el; 
    },
    toggleModal: function(e) {
      // init Galleria fotografica
      id = $(e.target).attr('data-modal-id');
      //$(id).modal("toggle");
      edificio = $(e.target).attr('data-edificio');
      app.Fn.showGallery(edificio);
    }
  });
})(jQuery);