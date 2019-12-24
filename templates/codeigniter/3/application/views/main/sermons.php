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
	          <li class="nav-item active"><a href="<?php echo base_url(); ?>sermons" class="nav-link">Sermons</a></li>
	          <li class="nav-item"><a href="<?php echo base_url(); ?>events" class="nav-link">Events</a></li>	          
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
            <h1 class="mb-2 bread">Sermons</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="<?php echo base_url(); ?>/">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Sermons <i class="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section">
    	<div class="container">
        <div class="row">
			<?php if($sermons == null): ?>
			<div class="col-md-8" style="margin-left: auto; margin-right: auto;">
				<h1 style="text-align: center; ">There are No Sermons Available,Please Try again Later</h1>
			</div>
			<?php else: ?>
				<?php foreach($sermons as $item): ?>
					<?php if ($item['approve'] == 1): ?>
					<div class="col-md-4">
						<div class="sermon-wrap sermon-wrap-2 mb-4 ftco-animate">
							<div class="img d-flex align-items-center justify-content-center" style="background-image: url(static/images/sermon-1.jpg);">
								<div class="vid-down d-flex">
									<a href="<?php echo base_url() ?>/static/pdf/sermons/<?php echo $item['pdf_url']?>" class="btn-custom d-flex align-items-center justify-content-center"><span class="icon-download"></span></a>
								</div>
							</div>
							<div class="text p-4 bg-light text-center">
								<h2 class="mb-3"><a href="sermon"><?php echo $item['title'] ?></a></h2>
								<div class="meta">
									<p>
										<span class="mr-2">Sermon from: <a href="#" class="ptr"><?php echo $item['preacher'] ?></a></span>
										
										<span><a href="#">On <?php echo $item['date'] ?></a></span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<?php endif ?>
				<?php endforeach ?>
			<?php endif ?>
        </div>
    	</div>
    </section>
