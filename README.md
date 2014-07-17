# PROGETTO
- la mappa del piano dell'edificio è cliccabile come poligono, possiamo avere la forma precisa degli appartamenti e la mappa si riscala al variare delle dimensioni dell'immagine (resize finestra, dispositivi diversi)

# exporting json data CouchDB
http://www.greenacorn-websolutions.com/couchdb/export-import-a-database-with-couchdb.php

# reading/writing to json file
http://stackoverflow.com/questions/20591083/backbone-populate-collection-from-external-json
e.g.
var ProfileList = Backbone.Collection.extend({
   model: Profile,
   url: '/json/profiles.json'
});

# 140620 
- on _modals_, modals creation works fine
- merged branch _modals_ into master
- modified _compile.sh_, now changes php extension in html for anchor tags 

# 140620 
- on branch _admin_

# 140625 
- the CouchDB interface works fine
- on branch _admin_ there is still an issue with handling the response from all the calls to CouchDB when retrieving all the documents to populate this.appartamenti
- get files from CouchDB by issuing
curl https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/_all_docs/\?include_docs=true > appartamenti.couchdb 
- transform into "proper" json file with
node couchdb2json.js

# 140625b
- merged branch _admin_ into _master_

# 140626
- on branch _tipologia_, creata ricerca per tipologia

# 140627
- fixed _errore mainView.js:52_ nella costruzione del vettore edifici, elementi duplicati
- fixed ricerca per tipologia: testare e creare styling_
- styling ricerca per tipologia
- la collection di appartamenti adesso è ordinata alfabeticamente
- risolto problema async nel recuperare appartamenti

# 140701
- merged _tipologia_ (versione 1) into _master_
- on branch _tipologia_ riscritto il rendering della ricercaper tipologia, da testare e vedere se tutto è ok anche con 2+ edifici

# 140702
- on branch _tipologia_, completata la nuova vista tipologia e testata con 2 edifici
- iniziata modifica template modal

# 140703
- creata vista _ricerca diretta_
- completato template modal per inserire vista piano etc, modificato oggetto appartamento e api db per immagine collocazione appartamento nel piano

# 140704
- modal, inserito campo descrizione e bottone per galleria immagini
- app.Appartamenti (la collection) adesso legge i dati da appartamenti.json

# 140707
- iniziato a lavorare alla galleria fotografica

# 140708
- sistemato case edificio (A,C, all,..)

# 140711
- sistemata galleria immagini, adesso è contenuta in galleria-immagini.php e galleria-immagini.js

# 140714
- completato deleteCouchDB()

# 140715
- tolto il fetch della collection da file (non supportato da IIS), gli appartamenti vengono inclusi in appartamenti.js
- risolto problema con attivazione modal utilizzando modal.toggle() in modalView.js dove si raccolgono i click della scheda

# TODO
- ricerca per tip, 2C, non si visualizzano app. tranne che per il piano 0

- che immagine mettiamo per l'ufficio vendite?
- edC-A1-T3sx no descr.
- edC-T6 no descr.
- edC-T7sx T7dx D4-T8 no descr.

- ricerca per tipologia >> attico è codificato con "A" in app.Data.Appartamenti
- a volte ci sono ancora pb. con i tempi dello slideshow, che ci siano troppe istanze di Carousel?
- testare ricerca per edificio su Edificio C con piano 0, piano 1, etc
- gestire caso "nessun risultato"

- gulp per compilare css, autoprefixer

__CouchDB__
<!-- update appartamenti.json -->
curl https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/_all_docs/\?include_docs=true > appartamenti.couchdb
node couchdb2json.js
<!-- COPY document -->
curl -X GET https://brontoluke:rio2016@minimalg.iriscouch.com/_uuids?count=10
<!-- edc-d1-t3dx -->
curl -X COPY https://brontoluke:rio2016@minimalg.iriscouch.com/borgoromito/b767a7067b240270fbab5b31a8005e0d -H "Destination: bdd69ff394898c79367cdb07f700ac5b"

__MODAL WIDTH__
http://stackoverflow.com/questions/10169432/how-can-i-change-the-default-width-of-a-twitter-bootstrap-modal-box

__GULP__
https://www.codefellows.org/blog/quick-intro-to-gulp-js
http://www.sitepoint.com/introduction-gulp-js/

__OOP__
Ford = function(model) {
  switch (model) {
    case 'ka':
      this.cilindrata = [900];
      this.posti = 4;
      break;
    case 'fiesta':
      this.cilindrata = [1000,1200];
      this.posti = 5;
      break;
  }
}
Ford.prototype.brand = "ford";

var auto_1 = new Ford('ka');
var auto_2 = new Ford('fiesta');

Opel = {
  corsa: function() {
    this.cilindrata = 1000;
    this.posti = 4;
    return this;
  },
  omega: function() {
    this.cilindrata = 1600;
    this.posti = 5;
    return this;
  }
}

a.Fn = {
  sayHello: function(g) { 
    this.g = g || "hello world"; 
    return g;
  }
}
