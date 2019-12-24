<body>
	<div id="preloader"></div>
    <div id="wrapper">
        <!-- header begin -->
        <header>
            <div class="container">
                <span id="menu-btn"></span>
                <div class="row">
                    <div class="col-md-3">
                        <!-- logo begin -->
                        <div id="logo">
                            <div class="inner">
                                <a href="index">
                                    <img src="<?php echo base_url() ?>static/img/logo-white.png" alt="" class="logo-1">  
                                    <img src="<?php echo base_url() ?>static/img/logo-2.png" alt="" class="logo-2">
                                </a>
                            </div>
                        </div>
                        <!-- logo close -->
                    </div>

                    <div class="col-md-9">
                        <!-- mainmenu begin -->
                        <div id="mainmenu-container">
                            <ul id="mainmenu">
                                <li><a href="<?php echo base_url() ?>">Home</a>
                                </li>
                                <li><a href="<?php echo base_url() ?>events">Events</a>
                                </li>
                                <li><a href="<?php echo base_url() ?>sermons">Sermons</a></li>
                                <li><a href="<?php echo base_url() ?>church-building">Church Building</a></li>
                                <li><a href="<?php echo base_url() ?>ministries">Ministries</a></li>
                                <li><a href="<?php echo base_url() ?>news">News</a></li>
                                <li><a href="<?php echo base_url() ?>gallery">Gallery</a></li>
                                <li><a href="<?php echo base_url() ?>contact">Contact</a></li>
                            </ul>
                        </div>
                        <!-- mainmenu close -->

                    </div>
                </div>
            </div>
        </header>
        <!-- header close -->

        <!-- subheader begin -->
        <section id="subheader" data-speed="2" data-type="background">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Our Gallery</h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- subheader close -->
        <div class="clearfix"></div>
        <!-- content begin -->
        <div id="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul id="filters">
                            <li><a href="#" data-filter="*" class="selected">show all</a></li>
                            <li><a href="#" data-filter=".youth">youth</a></li>
                            <li><a href="#" data-filter=".church">church</a></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <?php if($gallery == null): ?>
                    <div class="jumbotron jumbotron-fluid" style="background: white;">
                        <div class="container">
                            <h1 class="display-4" style="text-align: center;">Currently There are no Pictures</h1>
                            <p class="lead" style="text-align: center;">Please Check Later for any Pictures or Contact Communications Director</p>
                        </div>
                    </div>
                    <?php else: ?>
                    <div id="gallery-isotope" class="zoom-gallery col-md-12">
                    <?php foreach($gallery as $item) : ?>
                    <?php if($item['approve'] == 1): ?>    
                        <div class="item small-pic <?php echo $item['category']?>">
                            <a href="<?php echo base_url() ?>static/img/gallery/<?php echo $item['title']?>"><span class="overlay"></span></a>
                            <img src="<?php echo base_url() ?>static/img/gallery/<?php echo $item['title']?>" alt="">
                        </div>
                    <?php endif ?>
                    <?php endforeach ?>
                    </div>
                    <?php endif ?>
                </div>
            </div>
        </div>
        <!-- content close -->
        <!-- footer begin -->
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        &copy; Copyiright 2019 - MontroseSDA by DeveloperPrince
                    </div>
                    <div class="col-md-6">
                        <nav>
                            <ul>
                                <li><a href="https://www.facebook.com/montrosesda/"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="<?php echo base_url() ?>">Home</a></li>
                                <li><a href="<?php echo base_url() ?>">About Us</a></li>
                                <li><a href="<?php echo base_url() ?>events">Events</a></li>
                                <li><a href="<?php echo base_url() ?>news">News</a></li>
                                <li><a href="<?php echo base_url() ?>contact">Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
        <!-- footer close -->
    </div>