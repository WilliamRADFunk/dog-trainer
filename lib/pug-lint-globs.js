var glob = require('glob');
var PugLint = require('pug-lint');
var linter = new PugLint();

var groomDogs = function (args) {
    // Grab the configuration file.
    linter.configure({
        "disallowAttributeConcatenation": true
    });
    // Let glob find all pugs starting from user-designated source folder.
    var globs = glob.Glob(args.source + '/**/*.pug', {}, function(err, matches) {
        for(var i = 0; i < matches.length; i++) {
            // Find any linting errors in the glob matches.
            var fleas = linter.checkFile(matches[i]);
            if(Array.isArray(fleas) && fleas.length) {
                // Print each error to console
                for(var j = 0; j < fleas.length; j++) {
                    var error =
                    `--------------------------------------------------------------------------------
                    \nPug linting Error:
                    \n\tCode: \t\t${fleas[j].code}
                    \n\tMessage: \t${fleas[j].msg}
                    \n\tFilename: \t${fleas[j].filename}
                    \n\tError: \t\t${fleas[j].src}
                    \n\tLine: \t\t${fleas[j].line}
                    \n\tColumn: \t${fleas[j].column}
                    \n--------------------------------------------------------------------------------`;
                    console.error(error);
                }
                // If error occurred, kill it with a fail code.
                process.exit(1);
            }
        }
    });
};

module.exports = groomDogs;