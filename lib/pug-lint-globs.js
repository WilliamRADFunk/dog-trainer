var args = require('yargs').argv;
var glob = require('glob');
var PugLint = require('pug-lint');
var linter = new PugLint();

var groomDogs = function () {
    linter.configure({
    "disallowAttributeConcatenation": true
});

    var globs = glob.Glob(args.source + '/**/*.pug', {}, function(err, matches) {
        for(var i = 0; i < matches.length; i++) {
            console.log('Match: ', matches[i]);
            var fleas = linter.checkFile(matches[i]);
            if(Array.isArray(fleas) && fleas.length) {
                var error = `
                    Pug linting Error:
                    \n     ${fleas[0].code}
                    \n     ${fleas[0].msg}
                `;
                console.log(error);
            }
        }
    });
}();