<?php
namespace BP;

class Site {

  public $title = "Website Title";
  public $summary = "Website Summary";
  public $twitter = "Website Twitter";

  public function __construct() {
    //
  }  

}

use BP\Site as Site;

$site = new Site();