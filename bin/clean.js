var rimraf = require('rimraf');
var path = require('path');
var fs = require('fs');

var dir = path.resolve(__dirname,'../dist');

rimraf(dir, function (err) {
	if (err) {
		throw err;
	}

	if (process.argv.indexOf("createdir") >= 0) {
		fs.mkdirSync(dir);
	}
});
