var app = app || {};

(function($) {
  app.modalView = Backbone.View.extend({
    template: _.template( $("#tpl-modal").html() ),
    events: {},
    render: function(appartamento) {
      this.$el.html( this.template({app: appartamento}) );
      return this.$el; 
    }
  });
})(jQuery);