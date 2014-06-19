var app = app || {};

(function($) {
  app.Edifici = Backbone.Collection.extend({
    model: app.Edificio
  });
})(jQuery);
