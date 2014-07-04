var app = app || {};

(function($) {
  app.Appartamenti = Backbone.Collection.extend({
    model: app.Appartamento,
    comparator: 'nome',
    url: 'appartamenti.json'
    // localStorage: new Backbone.LocalStorage("appartamenti")
  });
})(jQuery);
