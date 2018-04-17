var glob = require('glob');
var fs = require('fs');
var filewatcher = require('filewatcher');
var pug = require('pug');

var watcher = filewatcher();

var trainDogs = function (args) {
   var source = '';
   // Handles user entered source, or assumed root level.
   if (args.source) {
       source += args.source + '/';
   }
   // Searches for pugs
   findPugs(source);

};

var findPugs = function(source) {

   // Let glob find all pugs starting from user-designated source folder.
   var globs = glob.Glob(source + '**/*.pug', {}, function(err, matches) {
       attachLeashes(matches);
   });
};

var attachLeashes = function(matches) {
   if (!matches) {
     console.log('Invalid source parameter.');
   }
   for (var i = 0; i < matches.length; i++) {
       console.log('Watching: ', matches[i]);
       // Find any linting errors in the glob matches.
       watcher.add(matches[i]);
   }
   watcher.on('change', disciplineDogs);
   console.log('All pugs accounted for, and ready for training...');
};

var disciplineDogs = function(file, stat) {
   var compiledFunction = pug.compileFile(file);
   fs.writeFile(file.slice(0, -4) + '.html', compiledFunction(), function(err) {
       if (err) {
           return console.log(err);
       }
       console.log(file, ' converted to ', file.slice(0, -4) + '.html');
   });
   if (!stat) console.log('deleted');
};

module.exports = trainDogs;