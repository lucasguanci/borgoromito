var app = app || {};

(function($) {
	Workspace = Backbone.Router.extend({
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
      }
    },
    init: function() {
      var mainView = new app.mainView();
    },
    index: function() {
      ;
    }
	});
})(jQuery);