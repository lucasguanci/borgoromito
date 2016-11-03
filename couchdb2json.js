var fs = require('fs');
var file = {};
var out = [];
fs.readFile("./appartamenti.couchdb", "utf-8", function(err, data) {
  if (err) throw err;
  file = JSON.parse(data);
  for ( n=0; n<file.total_rows; n++ ) {
    var re = /^_.*/;
    if ( !file.rows[n].doc._id.match(re) ) {
      out.push(file.rows[n].doc);
    }
  }
  fs.writeFile("./appartamenti.json", JSON.stringify(out), function(err) {
    if (err) throw err;
    console.log("saved!");
  })

});
