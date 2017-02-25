#!/usr/bin/env node
'use strict';

var lister = require('./lister');
var Write = require('./write');
var Edit = require('./edit');

console.log('Checking node_modules: ');

var command = process.argv[2];

switch (command) {
  case 'list':
    lister();
    break;
  case 'write':
    var write = new Write();
    write.start();
    break;
  case 'new':
    var writeNew = new Write('');
    writeNew.start();
    break;
  case 'edit':
    var edit = new Edit('');
    edit.start();
    break;
  default:
    console.log('Help:');
    console.log('available commands:');
    console.log('list = list all node modules');
    console.log('edit = recreate the dependencies in package.json');
    console.log('write = write a package.npr.json file');
    console.log('new = write a new package.json file - will overwrite! = be careful!');
}
//# sourceMappingURL=app.js.map
