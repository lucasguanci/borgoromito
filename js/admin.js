var app = app || {};

(function($){
  app.Data = {};
  app.Data.Edifici = [
    { id: "A", nome: "Edificio A", edificio: "A", img: {src: "images/complesso-residenziale-borgo-romito-vendita-appartamenti-prato-edificio-A.jpg", alt:"Edificio A"}, descrizione: "L’<strong class=\"red\">Edificio A<\/strong> è posto tra via del Romito, via Livi e via Vestri, e presenta al piano terreno spazi verdi, ampi porticati ed una galleria commerciale con negozi, con dotazione di ampia area a parcheggio esterna. Tre vani scala conducono ai piani superiori dove troviamo unità immobiliari residenziali di tagli differenziati per incontrare qualsiasi esigenza, tutti dotati di logge abitabili e di accessori e predisposizioni qualificanti. Nei due piani interrati sono disponibili cantine/ripostiglio e box auto.<br> Gli appartamenti sono dotati dei più moderni sistemi di contenimento dei consumi energetici, che consentono l’agevole ottenimento della Attestazione di Prestazione Energetica (APE) in Classe B.", piani: [{piano: "piano 1", img: "images/edificio-A-piano-1.png", map: "#edificio-A-piano-1"}, {piano: "piano 2", img: "images/edificio-A-piano-2.png", map: "#edificio-A-piano-2"}, {piano: "piano 3", img: "images/edificio-A-piano-3.png", map: "#edificio-A-piano-3"}, {piano: "piano 4", img: "images/edificio-A-piano-4.png", map: "#edificio-A-piano-4"}, {piano: "piano 5", img: "images/edificio-A-piano-5.png", map: "#edificio-A-piano-5"}] },
    { id: "C", nome: "Edificio C", edificio: "C", img: {src: "images/complesso-residenziale-borgo-romito-vendita-appartamenti-prato-edificio-C.jpg", alt:"Edificio C"}, descrizione: "L’<strong class=\"red\">Edificio C<\/strong> è posto lungo una nuova via che costituisce il prolungamento di via Pascoli, tra via del Romito e via Vestri. Completamente a destinazione residenziale, l’edificio presenta al piano terreno quattro ampi appartamenti con grandi spazi esterni lastricati privati.<br>Quattro vani scala conducono ai piani superiori dove troviamo unità immobiliari con tagli differenziati per incontrare qualsiasi esigenza, tutti dotati di logge abitabili e di accessori e predisposizioni qualificanti. Nei due piani interrati sono disponibili cantine/ripostiglio e box auto.<br>Gli appartamenti sono dotati dei più moderni sistemi di contenimento dei consumi energetici, che consentono l’agevole ottenimento della Attestazione di Prestazione Energetica (APE) in Classe B.", piani: [{ piano: "piano 1", img: "images/edificio-C-piano-1.png"}, { piano: "piano 2", img: "images/edificio-C-piano-2.png"}] },
  ];
  app.Data.Appartamenti = [
    { id:"ed-A-A1-T1", edificio:"A", piano:"1", tipologia:"T1", superficie:{lorda:44,logge:9,convenzionale:46}, camere:["1 camera doppia"], bagni:["1 bagno con vasca"], planimetria:"images/planimetria-ed-A-A1-T1.png" },
    { id:"ed-A-A1-T2", edificio:"A", piano:"1", tipologia:"T2", superficie:{lorda:44,logge:9,convenzionale:46}, camere:["1 camera doppia"], bagni:["1 bagno con vasca"], planimetria:"images/planimetria-ed-A-A1-T2.png" },    
    { id:"ed-A-A1-T3", edificio:"A", piano:"1", tipologia:"T3", superficie:{lorda:44,logge:9,convenzionale:46}, camere:["1 camera doppia","1 camera singola"], bagni:["1 bagno con doccia"], planimetria:"images/planimetria-ed-A-A1-T3.png" }
  ];

  app.Router = new AdminWorkspace();
  app.Router.start();
  app.Router.init();
})(jQuery);

/**
 * Utility functions
**/
function resetForm(form) {
  $(form).find('input:text, input:password, input:file, select, textarea').val('');
  $(form).find('input:radio, input:checkbox')
       .removeAttr('checked').removeAttr('selected');
}
