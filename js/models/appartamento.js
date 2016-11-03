var app = app || {};

(function($) {
  app.Appartamento = Backbone.Model.extend({
    parse: function(res) {
      res.id = res._id;
      return res;
    }
  });
})(jQuery);