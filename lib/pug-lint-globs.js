var Path = require('path');
var fs = require('fs');
var file = require('file');
var linter = require('pug-lint/lib/cli');
var assert = require("assert");

console.log(linter);

var find = function () {
    file.walkSync('src/', function(error, path, dirs, name) {
        if(name === undefined) {
            name = dirs;
            dirs = path;
            path = error;
            error = undefined;
        }
        if(!error && name.length) {
            for(var i = 0; i < name.length; i++) {
                var last4 = name[i].substr(name[i].length - 4, 4);
                if(last4 === '.pug') {
                    console.log('Found one: ', name[i], ' at ', Path.join(path, name[i]));
                    console.log(linter(Path.join(path, name[i])));
                }
            }
        }
    });    
}();