<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>BYOCityCenterChurch Dashboard</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>static/dashboard/vendors/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="<?php echo base_url(); ?>static/dashboard/vendors/base/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>static/dashboard/vendors/datatables.net-bs4/dataTables.bootstrap4.css">
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="<?php echo base_url(); ?>static/dashboard/css/style.css">
	<!-- endinject -->
	<script src="https://cdn.ckeditor.com/ckeditor5/12.4.0/classic/ckeditor.js"></script>
</head>
<body>
  <div class="container-scroller">
    <!-- partial:partials/_navbar -->
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="navbar-brand-wrapper d-flex justify-content-center">
        <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">  
          <a class="navbar-brand brand-logo" href="index"><img style="width: 100%; height: Auto;" src="<?php echo base_url(); ?>static/dashboard/images/logo.png" alt="logo"/></a>
          <a class="navbar-brand brand-logo-mini" href="index"><h1>CityCenter</h1></a>
          <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span class="mdi mdi-sort-variant"></span>
          </button>
        </div>  
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul class="navbar-nav mr-lg-4 w-100">
          <li class="nav-item nav-search d-none d-lg-block w-100">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="search">
                  <i class="mdi mdi-magnify"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Search now" aria-label="search" aria-describedby="search">
            </div>
          </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
   
          <li class="nav-item nav-profile dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src="<?php echo base_url(); ?>static/dashboard/images/faces/avatar.png" alt="profile"/>
              <span class="nav-profile-name"><?php echo $this->session->userdata('email'); ?></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a class="dropdown-item">
                <i class="mdi mdi-settings text-primary"></i>
                Settings
              </a>
              <a class="dropdown-item" href="<?php echo base_url(); ?>auth/logout">
                <i class="mdi mdi-logout text-primary"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="dashboard">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#events" aria-expanded="false" aria-controls="auth">
              <i class="mdi mdi mdi-calendar-multiple menu-icon"></i>
              <span class="menu-title">Events</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="events">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="events-list"> View List </a></li>
                <li class="nav-item"> <a class="nav-link" href="event-add"> Add Event </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#home" aria-expanded="false" aria-controls="auth">
              <i class="mdi mdi mdi-blur-linear menu-icon"></i>
              <span class="menu-title">Home</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="home">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="home-list"> View List </a></li>
                <li class="nav-item"> <a class="nav-link" href="home-add"> Add Home Item </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#staff" aria-expanded="false" aria-controls="auth">
              <i class="mdi mdi mdi-account-multiple menu-icon"></i>
              <span class="menu-title">Staff</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="staff">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="staff-list"> View List </a></li>
                <li class="nav-item"> <a class="nav-link" href="staff-add"> Add Staff </a></li>
              </ul>
            </div>
					</li>
					<li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#about" aria-expanded="false" aria-controls="auth">
              <i class="mdi mdi mdi-script menu-icon"></i>
              <span class="menu-title">About</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="about">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="about-list"> View List </a></li>
								<li class="nav-item"> <a class="nav-link" href="about-add"> Add About </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#sermons" aria-expanded="false" aria-controls="auth">
              <i class="mdi mdi mdi-book-open-variant menu-icon"></i>
              <span class="menu-title">Sermons</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="sermons">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="sermons-list"> View List </a></li>
                <li class="nav-item"> <a class="nav-link" href="sermon-add"> Add Sermon </a></li>
              </ul>
            </div>
					</li>
					<li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#testimonials" aria-expanded="false" aria-controls="auth">
              <i class="mdi mdi mdi-calendar-multiple menu-icon"></i>
              <span class="menu-title">Testimonials</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="testimonials">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="testimonials-list"> View List </a></li>
                <li class="nav-item"> <a class="nav-link" href="testimonial-add"> Add Testimonial </a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <!-- partial -->
      <div class="main-panel">
