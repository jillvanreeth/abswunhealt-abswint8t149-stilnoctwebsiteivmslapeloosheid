<?php

/**
 *
 * THE ENVIRONMENT
 *
 */

switch($theConfig['hostName']) {
    case 'localhost':
    case $theConfig['domains']['dev']:
        define('THE_ENV', 'development');
        break;

    case $theConfig['domains']['wtf']:
        define('THE_ENV', 'wtf');
        break;

    case $theConfig['domains']['staging']:
        define('THE_ENV', 'staging');
        break;

    case $theConfig['domains']['production']:
    default:
        define('THE_ENV', 'production');
}

?>