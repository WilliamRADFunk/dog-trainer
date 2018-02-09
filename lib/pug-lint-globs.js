var Path = require('path');
var fs = require('fs');
var glob = require('glob');
var cmd = require('../node_modules/node-cmd/cmd.js');
var linter = require('pug-lint');
var assert = require("assert");

var findPugs = function () {
    var globs = glob.Glob('**/*.pug', {}, function(err, matches) {
        for(var i = 0; i < matches.length; i++) {
            console.log('Match: ', matches[i]);
            cmd.get('pug-lint \"' + matches[i] + '\"');
        }
    })
}();