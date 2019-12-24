<?php

defined('BASEPATH') OR exit('No direct script access allowed');

$autoload['packages'] = array('form_validation', 'session','database', 'pagination');

$autoload['libraries'] = array();

$autoload['drivers'] = array();

$autoload['helper'] = array('url', 'file', 'form', 'html');

$autoload['config'] = array();

$autoload['language'] = array();

$autoload['model'] = array('gallery_model', 'event_model', 'news_model', 'sermons_model', 'user_model', 'visitors_model', 'home_model', 'staff_model', 'about_model', 'testimonials_model');
