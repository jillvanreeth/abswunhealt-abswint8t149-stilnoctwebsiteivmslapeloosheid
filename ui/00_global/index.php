<?php include '_config.php'; ?><?php include 'functions.php'; ?><!DOCTYPE html>
<html lang="">
<head>
  <title>SANOFI | Stilnoct</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="author" content="">
  
  <meta property="og:type"           content="website" />
  <meta property="og:title"          content="" />
  <meta property="og:sitename"       content="" />
  <meta property="og:description"    content="" />
  <meta property="og:url"            content="" />
  <meta property="og:image"          content="" />
  <meta property="og:image:width"    content="600" />
  <meta property="og:image:height"   content="315" />

  <meta property="twitter:card" content="summary">
  <meta property="twitter:title" content="">
  <meta property="twitter:description" content="">
  <meta property="twitter:image" content="">
  <meta property="twitter:url" content="">

  <link rel="stylesheet" href="<?php echo RESOURCES; ?>/styles/main.css">

  <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,700|Roboto:700,300" rel="stylesheet">

  <link rel="shortcut icon" href="favicon.ico" />

</head>
<body class="">
  <div id="theBody">
    <div id="theBucket" class="<?php echo $thePageName; ?> <?php echo 'bgc--'.$dayPart; ?>">

      <?php include('views/sections/header.php'); ?>
      <?php include $thePage; ?>
      <?php include('views/sections/footer.php'); ?>
    </div>
  </div>

  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script src="<?php echo RESOURCES; ?>/scripts/main.js"></script>
</body>
</html>