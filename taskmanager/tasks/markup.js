/**
 *
 * MARKUP
 *
 */

// get the Config
var config = require('../taskmanager.config.json');



// the Imports
var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	browser = require('./browser'),
	notify = require('gulp-notify'),
	htmlmin = require('gulp-htmlmin'),
	changed = require('gulp-changed'),
	plumber = require('gulp-plumber'),
	env = require('gulp-environments');



// the Variables
var prod = env.production,
	theCwd = config.directories.cwd,
	theSource = [
		'**/**/*.{html,php,njk,twig}'
	],
	theDest = config.directories.dest.markup || config.directories.dest.default,
	minifyIt = false,
	watchIt = true,
	watcher = null;



// the Function
function markup() {

	"use strict";

	// get browser reload function ... or not
	var reloadIt = !!browser.stream ? browser.stream({once: true}) : function() { return true; };

	// the Watcher
	if(!watcher && !prod() && watchIt) {

		watcher = gulp.watch(theSource, {cwd: theCwd}, markup);
		watcher.on('all', function(event, path) { console.log(path + ' : ' + event); });

	}

	// the Stream
	return gulp.src(theSource, {cwd: theCwd})
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(changed(theDest, {hasChanged: changed.compareLastModifiedTime}))
		.pipe(gulpif(minifyIt, htmlmin({
			collapseWhitespace: true,
			collapseInlineTagWhitespace: true,
			removeComments: true
		})))
		.pipe(gulp.dest(function(path) {

			// define the cwd dirname
			var theCwdDirname;
			theCwdDirname = theCwd.split('/');
			theCwdDirname = theCwdDirname[theCwdDirname.length - 1];

			// define the variables
			var pathParams = path.dirname.replace(/\\/g, '/');
			pathParams = pathParams.split('/');

			var isGlobal = (pathParams[pathParams.length - 1] === theCwdDirname) || (path.basename !== 'functions' && pathParams.indexOf('templates') === -1 && pathParams.indexOf('00_global') > -1) || (pathParams.indexOf('05_buckets') > -1 && config.framework.toLowerCase() === 'wordpress');
			var isBucket = pathParams.indexOf('05_buckets') > -1 && config.framework.toLowerCase() !== 'wordpress';
			var isFunction = pathParams.indexOf('functions') > -1;

			// flatten path to the UI directory
			pathParams.splice(pathParams.indexOf(theCwdDirname) + 1);

			// not global
			if(!isGlobal && !isFunction) {
				pathParams.push(config.dirNames.views);
			}

			// is section
			if(!isGlobal && !isFunction && !isBucket) {
				pathParams.push(config.dirNames.sections);
			}

			// is function
			if(isFunction) {
				pathParams.push('functions');
			}

			// define the new dirname
			path.dirname = pathParams.join('/');

			return theDest;

		}))
		.pipe(gulpif(!!browser.stream, reloadIt));

}



// the Task
gulp.task(markup);