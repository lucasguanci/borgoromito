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

# TODO (140620)
- admin per inserimento appartamenti (vd. appunti)
- gulp per compilare css, autoprefixer
- inserire appartamenti e creare mappe cliccabili piani (da inserire in 
- template)

__GULP__
https://www.codefellows.org/blog/quick-intro-to-gulp-js
http://www.sitepoint.com/introduction-gulp-js/