var app = app || {};

(function($) {
  app.Appartamenti = Backbone.Collection.extend({
    model: app.Appartamento
  });
})(jQuery);
