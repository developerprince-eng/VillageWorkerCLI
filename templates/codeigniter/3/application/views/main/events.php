</head>
  <body>
	  
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
		<a style="display: inline-block;" class="navbar-brand" href="<?php echo base_url(); ?>/">
			<span style="display: inline-block; width: 40px; "><img src="static/images/adventist-symbol--white.png" style="width: 100%; height: auto;"></span>
			<div  style="display: inline-block; width: 60px;">
				<span>Bulawayo</span>
				<span>City Church</span>
			</div>
		</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li class="nav-item"><a href="<?php echo base_url(); ?>" class="nav-link">Home</a></li>
	          <li class="nav-item"><a href="<?php echo base_url(); ?>about" class="nav-link">About</a></li>
	          <li class="nav-item"><a href="<?php echo base_url(); ?>ministry" class="nav-link">Ministries</a></li>
	          <li class="nav-item"><a href="<?php echo base_url(); ?>sermons" class="nav-link">Sermons</a></li>
	          <li class="nav-item active"><a href="<?php echo base_url(); ?>events" class="nav-link">Events</a></li>	          
	          <li class="nav-item"><a href="<?php echo base_url(); ?>contact" class="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    <!-- END nav -->
    
    <section class="hero-wrap hero-wrap-2" style="background-image: url('static/images/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-center">
          <div class="col-md-9 ftco-animate pb-5 text-center">
            <h1 class="mb-2 bread">Upcoming Events</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="/">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Events <i class="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section ftco-degree-bg">
      <div class="container">
        <div class="row">
		  <?php if($events == null) : ?>
			  <div class="col-md-8" style="margin-left: auto; margin-right: auto;">
				  <h1 style="text-align: center; ">There are No Events Available, Please Try again Later</h1>
			  </div>
		  <?php else : ?> 
  		  <?php foreach($events as $item) : ?>
          <?php if ($item['approve'] == 1): ?>
          <div class="col-lg-12 ftco-animate">
			  

		  	<div class="event-wrap d-md-flex ftco-animate">
				<div class="img"style="background-image: url(static/images/img/events/<?php echo $item['img_url']?>);"></div>
					<div class="text pl-md-5">
						<h2 class="mb-3"><a href="sermons"><?php echo $item['name'] ?></a></h2>
						<div class="meta">
							<p>
								<span><i class="icon-calendar mr-2"></i><?php echo $item['datefrom'] . ' ' .$item['timefrom']?></span>
								<span><i class="icon-calendar mr-2"></i><?php echo $item['dateto'] . ' ' .$item['timeto']?></span>
								<span><i class="icon-my_location mr-2"></i> <a href="#">Byo City Church</a></span>
								<span><i class="icon-location_city mr-2"></i>116 Hebert Chitepo Street Bulawayo, Zimbabwe</span>
							</p>
						</div>
						<p><a href="events" class="btn btn-primary">Read more</a></p>
					</div>
				</div>
			</div>
		     <?php endif ?>
			 <?php endforeach ?>
		     <?php endif ?>
        </div>
      </div>
    </section> <!-- .section -->
