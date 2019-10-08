<?php

/**
 *
 * THE ROUTES
 *
 */

// get the uri as an array
$uri = isset($_GET['queryVar']) ? array_filter(explode('/', $_GET['queryVar'])) : [];
$uriLength = count($uri);

$thePageName = $uriLength >= 1 ? $uri[0] : 'home';
$thePage = false;

// get page name or 404 page name
$thePageName = !file_exists(VIEWS . '/' . $thePageName . '.php') ? (isset($theConfig['pages']['error']) ? $theConfig['pages']['error'] : die('No 404 page is set!')) : $thePageName;

// define the path to the page
$thePage = VIEWS . '/' . $thePageName . '.php';

// get morning, noon & night
//$dayPart =  substr($thePageName, 6); 

// define dark & light pages
switch ($thePageName) {
  case 'contact':
    $dayPart = 'night';
    break;
  case 'get-serious':
    $dayPart = 'night';
    break;
  case 'home':
  	$dayPart = 'day';
    break;
  case 'insomnia':
  	$dayPart = 'night';
    break;
  case 'science':
  	$dayPart = 'day';
    break;
  case 'tips--morning':
    $dayPart = 'morning';
    break;
  case 'tips--noon':
    $dayPart = 'noon';
    break;
  case 'tips--night':
    $dayPart = 'night';
    break;
  case '404':
    $dayPart = 'morning';
    break;
  default:
    $dayPart = 'morning';
}

?>