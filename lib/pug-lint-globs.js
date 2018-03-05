var glob = require('glob');
var fs = require('fs');
var PugLint = require('pug-lint');
var configFile = require('./pug-lint-config-default');
var linter = new PugLint();

var groomDogs = function (args) {
    // Grab the configuration file.
    if(args.config) {
        var data = fs.readFileSync(args.config).toString('utf8');
        console.log(data);
        // Feed linter the configuration file.
        linter.configure(data);
        findPugs(args.source);
    } else {
        // Feed linter the configuration file.
        linter.configure(configFile);
        findPugs(args.source);
    }
    
};

var findPugs = function(source) {
    // Handles user entered source, or assumed root level.
    if(!source) {
        source = '';
    } else {
        source += '/';
    }
    // Let glob find all pugs starting from user-designated source folder.
    var globs = glob.Glob(source + '**/*.pug', {}, function(err, matches) {
        findFleas(matches);
    });
};

var findFleas = function(matches) {
    for(var i = 0; i < matches.length; i++) {
        // Find any linting errors in the glob matches.
        var fleas = linter.checkFile(matches[i]);
        if(Array.isArray(fleas) && fleas.length) {
            // Print each error to console
            for(var j = 0; j < fleas.length; j++) {
                var error;
                if(j === 0) {
                    error = `--------------------------------------------------------------------------------`;
                }
                error +=
                `
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
            process.exit(2);
        }
    }
};

module.exports = groomDogs;