/**
 *
 * FAVICON
 *
 */



// get the Config
var config = require('../taskmanager.config.json');



// the Imports
var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	browser = require('./browser'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	flatten = require('gulp-flatten'),
	changed = require('gulp-changed'),
	env = require('gulp-environments'),
	gutil = require('gulp-util'),
	realFavicon = require('gulp-real-favicon'),
	fs = require('fs'),
	imagemin = require('gulp-imagemin');



// the Variables
var prod = env.production,
	theCwd = config.directories.cwd,
	theFaviconData = config.favicon.iconFolder + 'faviconData.json',
	watchIt = true,
	watcher = null;

// the Function
gulp.task('generate', function (done) {
	realFavicon.generateFavicon({
		masterPicture: config.favicon.masterPicture,
		dest: config.favicon.iconFolder,
		iconsPath: config.favicon.iconPath,
		design: {
			ios: {
				pictureAspect: config.favicon.ios.pictureAspect,
				backgroundColor: config.favicon.backgroundColor,
				margin: "14%",
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				},
				appName: config.favicon.appName
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: config.favicon.windows.pictureAspect,
				backgroundColor: config.favicon.backgroundColor,
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: config.favicon.androidChrome.pictureAspect,
				margin: "17%",
				backgroundColor: config.favicon.backgroundColor,
				themeColor: config.favicon.backgroundColor,
				manifest: {
					name: config.favicon.appName,
					display: "standalone",
					orientation: "notSet",
					onConflict: "override",
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			},
			safariPinnedTab: {
				pictureAspect: "silhouette",
				themeColor: config.favicon.brandColor
			}
		},
		settings: {
			compression: 2,
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false,
			readmeFile: false,
			htmlCodeFile: false,
			usePathAsIs: false
		},
		markupFile: theFaviconData
	}, function () {
		done();
	});
});

// Inject metadata into index.php
gulp.task('inject-favicon-markups', function () {
	return gulp.src([config.favicon.targetFile], {base: './'})
		.pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(theFaviconData)).favicon.html_code))
		.pipe(gulp.dest('./'));
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
gulp.task('check-for-favicon-update', function (done) {
	var currentVersion = JSON.parse(fs.readFileSync(theFaviconData)).version;
	realFavicon.checkForUpdates(currentVersion, function (err) {
		if (err) {
			throw err;
		} else {
			done();
		}
	});
});

// the Task
gulp.task('favicon', gulp.series('generate', 'inject-favicon-markups'/*, 'check-for-favicon-update'*/));