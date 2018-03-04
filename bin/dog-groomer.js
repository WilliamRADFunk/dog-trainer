#!/usr/bin/env node
var args = require('yargs').argv;
require('../lib/pug-lint-globs')(args);