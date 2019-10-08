<?php

/**
 *
 * THE CONFIG
 *
 */

$theConfig = [

	// THE HOSTNAME
	'hostName' => isset($_SERVER['HTTP_X_FORWARDED_HOST']) && !empty($_SERVER['HTTP_X_FORWARDED_HOST']) ? $_SERVER['HTTP_X_FORWARDED_HOST'] : $_SERVER['HTTP_HOST'],

	// ENVIRONMENTS
	'domains' => [
		'dev' => 'abswint8t149.tdlinx.int',
		'wtf' => 'abswint8t149.tdlinx.wtf',
		'staging' => 'abswint8t149.tdlinx.be',
		'production' => ''
	],

	// LANGUAGES (the first one is the default language)
	'languages' => [
		'en-uk',
		'nl-be'
	],

	// PAGES
	'pages' => [
		'default' => 'home',
		'error' => '404'
	],

	// DIRECTORY NAMES
	'directories' => [
		'views' => '/views',
		'sections' => '/views/sections',
		'resources' => '/resources',
		'languages' => '/resources/languages'
	]

];

?>