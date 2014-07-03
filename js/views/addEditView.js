var app = app || {};

(function($) {
  app.addEditView = Backbone.View.extend({
    render: function(ctype,model) {
      switch ( ctype ) {
        case "appartamenti":
          tpl = _.template($('#tpl-add-edit-appartamenti').html());
          if ( typeof(model)!=="undefined" ) {
            var data = {};
            data._id = model._id;
            data.ctype = model.ctype;
            data.nome = model.nome;
            data.edificio = model.edificio;
            data.tipologia = model.tipologia;
            data.piano = model.piano;
            data.superficie_lorda = model.superficie.lorda;
            data.superficie_logge = model.superficie.logge;
            data.superficie_convenzionale = model.superficie.convenzionale;
            data.camera_1 = model.camere[0];
            data.camera_2 = model.camere[1];
            data.bagno_1 = model.bagni[0];
            data.bagno_2 = model.bagni[1];
            data.planimetria = model.planimetria;
            data.planimetria_piano = model.planimetria_piano; 
          }
          this.$el.html( tpl({model: data, ctype: ctype}));
          return this.$el;
        default:
          console.log("switch->default");
      }
      // this.$el.html( this.template({ctype: ctype, items: data}) );
      // return this.$el;          
    }
  });
})(jQuery);