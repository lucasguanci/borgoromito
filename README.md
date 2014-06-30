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

# TODO
- merge _tipologia_ into _master_
- creare immagini appartamenti, inserire appartamenti e creare mappe cliccabili piani 
- gestire caso "nessun risultato"
- gulp per compilare css, autoprefixer

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
