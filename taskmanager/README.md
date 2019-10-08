# TD²NA 1.0 BONELESS

## 1. Install Node

Node:

	https://nodejs.org/en/



## 2. Config

Configure the project settings where needed in the ./taskmanager.config.json

### 2.1 framework

Could be the following values:

	- wordpress



## 3. Tasks

Tasks can be activated/deactivated in the ./taskmanager.config.json by setting it's active property to true/false

	{
		active: true
	}

When setting the property watchIt to true the taskmanager will watch the source for changed, added and removed files.

	{
		watchIt: true
	}

### First run

	$ npm start

This command will install all npm packages that are needed for the project and run all active tasks in development mode.
The packages are listed in ./package.json

Run it when you just checked out the repository or when you have deleted the node_modules directory.

### Development

	$ npm run dev

This command will run all active tasks in development mode.
NO uglify, NO minify, NO optimize, ... => Waste of time in development.

### Production

	$ npm run production

This command will run all active tasks in production mode.
YES uglify, YES minify, YES optimize, ... => Better performance for production.



## 4. Shame

This folder is used for them shamefull, fast and dirty fixes.
Only use this folder when you are short in time, not out of laziness.