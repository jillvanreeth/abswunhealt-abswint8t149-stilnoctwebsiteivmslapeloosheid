<?php

/**
 *
 * THE PATHS
 *
 */

// define the variables
$theHostName = $theConfig['hostName'];
$theUri = '//' . $theHostName;
$theRoot = __DIR__ . '/..';


// define the paths
if(!defined('VIEWS')) { define('VIEWS', $theRoot . $theConfig['directories']['views']); }
if(!defined('SECTIONS')) { define('SECTIONS', $theRoot . $theConfig['directories']['sections']); }
if(!defined('LANGUAGES')) { define('LANGUAGES', $theRoot . $theConfig['directories']['languages']); }
if(!defined('RESOURCES_DIR')) { define('RESOURCES_DIR', $theRoot . $theConfig['directories']['resources']); }
if(!defined('RESOURCES')) { define('RESOURCES', $theUri . $theConfig['directories']['resources']); }

?>