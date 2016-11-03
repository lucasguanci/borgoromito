var app = app || {};

(function($) {
  app.ctypeView = Backbone.View.extend({
    className: 'ctype-wrapper',
    template: _.template($('#tpl-show-ctype').html()),
    render: function(ctype, collection) {
      this.$el.html( this.template({ctype: ctype, models: collection.toJSON()}) );
      return this.$el;          
    }
  });
})(jQuery);