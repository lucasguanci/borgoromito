var app = app || {};

(function($) {
  AdminWorkspace = Backbone.Router.extend({
    routes: {
      '*path': 'index'
    },
    start: function() {
      if ( Backbone.history.start() ) {
        console.log("History started successfully");
        return true;
      } else {
        console.log('can\'t start history');
        return false;
      }
    },
    init: function() {
      var adminView = new app.adminView();
    },
    index: function() {
      ;
    }
  });
})(jQuery);