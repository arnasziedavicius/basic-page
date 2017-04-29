<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />

  <title><?php echo $site->title; ?></title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <meta name="robots" content="index, follow">

  <!-- // open graph // -->
  <meta property="og:title" content="<?php echo $site->title; ?>">
  <meta property="og:type" content="website">
  <meta property="og:description" content="<?php echo $site->summary; ?>"> <!--summary-->

  <!-- // twitter:cards - can be used in conjunction with og meta tags // -->
  <meta name="twitter:card" content="summary"> <!-- // options: summary / photo / player - see twitter docs// -->
  <meta name="twitter:site" content="@<?php echo $site->twitter; ?>">
  <meta name="twitter:creator" content="@<?php echo $site->twitter; ?>">

  <meta name="description" content="<?php echo $site->summary; ?>" />

  <link rel="stylesheet" type="text/css" href="assets/css/main.css">
  
  <script type="text/javascript" src="assets/js/main.js"></script>
</head>

<body>
