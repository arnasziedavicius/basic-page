<?php
namespace AZ;

class Site {

  public $title = "Website Title";
  public $summary = "Website Summary";
  public $twitter = "Website Twitter";

  public function __construct() {
    //
  }  

}

use AZ\Site as Site;

$site = new Site();