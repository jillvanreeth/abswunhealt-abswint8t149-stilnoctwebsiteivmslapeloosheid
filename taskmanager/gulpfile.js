/**
 *
 * DEFAULT
 *
 */



// the Imports
var gulp = require('gulp'),
	env = require('gulp-environments'),
	requireDir = require('require-dir'),
	config = require('./taskmanager.config.json');



// load all tasks
var allTasks = requireDir('./tasks');



// the Variables
var dev = env.development,
	prod = env.production;



// the default no tasks function
var theDefaulTasks = function (cb) {
	console.log('no tasks!');
	cb();
};



// get the task names
var taskNames = Object.keys(allTasks);



// if tasks get the active ones
if (taskNames.length) {

	// start with an empty array
	let theActiveTasks = [];

	var theEnv = dev() ? "dev" : "prod";

	// loop through all tasks
	taskNames.forEach(function (taskName) {
		if (taskName != "favicon" || (taskName == "favicon" && theEnv == "prod"))
			(!allTasks[taskName].env || allTasks[taskName].env.indexOf(theEnv) > -1) && theActiveTasks.push(taskName);
	});


	// moves favicon to last position
	theActiveTasks.splice(theActiveTasks.length, 0, (theActiveTasks.splice(theActiveTasks.findIndex(task => task === "favicon"), 1)));


	// if has active tasks
	if (theActiveTasks.length) {
		theActiveTasks.unshift('clean');
		theDefaulTasks = theActiveTasks;
	}

}



// the Default Task
gulp.task('default', gulp.series(theDefaulTasks));