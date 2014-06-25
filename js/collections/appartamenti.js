var app = app || {};

(function($) {
  app.Appartamenti = Backbone.Collection.extend({
    model: app.Appartamento,
    localStorage: new Backbone.LocalStorage("appartamenti")
//    url: 'appartamenti.json'
  });
})(jQuery);
