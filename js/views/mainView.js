var app = app || {};

(function($) {
  app.mainView = Backbone.View.extend({
    el: '#tpl-ricerca-container',
    template: _.template( $('#tpl-ricerca').html() ),
    initialize: function() {
      this.edifici = new app.Edifici(app.Data.Edifici);
      this.appartamenti = new app.Appartamenti(app.Data.Appartamenti);
      this.render();
    },
    events: {
      'click #btn-ricerca-edificio': 'ricercaEdificio',
      'change input[name="edificio"]': 'ricercaEdificio',
      'click #btn-ricerca-tipologia': 'ricercaTipologia',
      'click #btn-ricerca-appartamento': 'ricercaAppartamento',
      'click button.test': 'ricercaEdificio'
    },
    renderTest: function() {
      this.$el.html( this.template() );
    },
    render: function() {
      this.$el.html( this.template() );
      // this.renderRicercaTipologia();
      // this.renderRicercaAppartamento();
    },
    renderRicercaEdificio: function(model) {   
      console.log("clicked ricerca edificio"); 
    },
    ricercaEdificio: function(e) {
      e.preventDefault();
      console.log("clicked ricerca edificio");
      // collect form data
      var edificio = $(e.target).parent().find("input:checked").val();
      var model = this.edifici.find(function(model) { 
        return model.get('id') == edificio;
      });
      // render subview
      var ricercaEdificioView = new app.ricercaEdificioView();
      this.$el.find("div#tpl-risultati-ricerca-edificio-container").html( ricercaEdificioView.render(model.toJSON()) );      
    },
    ricercaTipologia: function(e) {
      e.preventDefault();
      // get form data
      var tipologia = $(e.target).parent().find("input:checked").val();
      console.log("clicked ricerca tipologia, tipologia: "+tipologia);
      // risultato ricerca
      // res = { A:[{app.1},{app.2},..], C:[{app.1},..]}
      var apps = this.appartamenti.where({tipologia: tipologia});
      var edifici = [];
      apps.forEach(function(item) {
        edifici.push(item.get("edificio"));
      });
      var self = this;
      edifici.forEach(function(edificio) {
        var ricercaTipologiaView = new app.ricercaTipologiaView();
        self.$el.find("div#tpl-risultati-ricerca-tipologia-container").html( ricercaTipologiaView.render(edificio,apps) );  
      });

       
      // var res = {}; 
      // var self = this;
      // this.edifici.each(function(edificio) {
      //   var apps = self.appartamenti.where({tipologia: tipologia, edificio: edificio.get("id") });
      //   if ( apps.length>0 ) {
      //     res[edificio.id] = [];
      //     _.each(apps, function(item) {
      //       res[edificio.id].push(item);
      //     })
      //   }
      // });
      // console.log(res);
      // // crea vista per ogni edificio
      // var keys = Object.keys(res);
      // var keysArray = []; 
      // keys.forEach(function(item){
      //   keysArray.push(item);
      // });
      // var self = this;
      // keysArray.forEach(function(edificio) {
      //   var ricercaTipologiaView = new app.ricercaTipologiaView();
      //   self.$el.find("div#tpl-risultati-ricerca-tipologia-container").html( ricercaTipologiaView.render(edificio,res[edificio]) ); 
      // });
    }
  });
})(jQuery)