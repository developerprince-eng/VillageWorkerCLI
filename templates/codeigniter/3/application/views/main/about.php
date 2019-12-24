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
	          <li class="nav-item active"><a href="<?php echo base_url(); ?>about" class="nav-link">About</a></li>
	          <li class="nav-item"><a href="<?php echo base_url(); ?>ministry" class="nav-link">Ministries</a></li>
	          <li class="nav-item"><a href="<?php echo base_url(); ?>sermons" class="nav-link">Sermons</a></li>
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
            <h1 class="mb-2 bread">About Us</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="/">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>About us <i class="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section>	
	<section>
		<div class="row justify-content-center mt-5 pb-3">
			<div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
				<h2 class="mb-2" style="color: #000;">History of Church</h2>
			</div>
		</div>
		<div class="container">
			<?php if ($about == null): ?>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada massa a arcu consequat, non pretium orci tristique. In rutrum maximus erat, egestas pellentesque ligula vestibulum quis. Proin urna eros, lobortis ac bibendum vel, hendrerit a eros. Pellentesque at nunc id mauris interdum aliquam. Nam commodo dui non mi varius, eget faucibus elit molestie. Nullam vitae semper purus. Proin varius arcu lacinia, feugiat tortor et, sollicitudin mi. Nam laoreet purus sit amet turpis molestie, vel laoreet dui rhoncus. Donec tristique tellus eu ante consequat faucibus. Aenean sed volutpat nulla.
			</p>
			<p>
			Proin tincidunt interdum elit non sollicitudin. Curabitur sed lorem vitae lacus consectetur ultrices quis ut justo. Duis pellentesque erat nulla, sollicitudin accumsan velit condimentum a. Vivamus eleifend dolor vitae tristique imperdiet. Praesent auctor ullamcorper imperdiet. Ut dapibus libero metus. Nulla porttitor leo ipsum, eget egestas felis condimentum non. Proin lacinia quam neque, et dignissim ex tempor ac. Fusce fermentum justo urna, viverra dignissim nisl tristique ut. Cras faucibus arcu dolor. Phasellus varius sapien mauris, sed condimentum diam sagittis ac. Quisque dictum elit in venenatis fermentum. Quisque tempor ultrices sem rutrum congue. Duis interdum sodales elit vel tristique. Sed hendrerit gravida libero. Praesent sed lacus pulvinar, congue arcu et, faucibus justo.
			</p>
			<?php else: ?>
				<?php foreach($about as $item): ?>
					<?php if($item['approve']==1): ?>
						<?php echo $item['history']; ?>
					<?php endif?>
				<?php endforeach?>
			<?php endif ?>
		</div>
	</section>
    <section class="ftco-counter" id="section-counter">
    	<div class="container">
    		<div class="row d-flex no-gutters">
    			<div class="col-md-6 d-flex flex-column align-items-stretch">
    				<div class="img d-flex align-self-stretch align-items-center justify-content-center" style="background-image:url(static/images/about-2.jpg);">
    				</div>
    			</div>
    			<div class="col-md-6 px-5 py-5">
    				<div class="row justify-content-start pt-3 pb-3">
		          <div class="col-md-12 heading-section ftco-animate">
		            <h2 class="mb-4">We are church that believes in Jesus Christ</h2>
		            <p>
						We are a Seventh Day Adventist Church anchored upon the Three angels message of our soon coming King and Lord, who shall come and wipe away all of tears and pains.
					</p>
		          </div>
		        </div>
	        </div>
        </div>
    	</div>
    </section>

    <!--<section class="ftco-section ftco-no-pt ftco-no-pb">-->
    <!--	<div class="container">-->
    <!--    <div class="row no-gutters">-->
    <!--			<div class="col-lg-6 py-4 py-md-5">-->
    <!--				<div class="d-flex services ftco-animate text-lg-right py-4 px-lg-4">-->
	   <!--         <div class="icon order-md-last d-flex align-items-center justify-content-center"><span class="flaticon-praying"></span></div>-->
	   <!--         <div class="media-body pr-lg-4">-->
	   <!--           <h3 class="heading mb-3">Daily Prayers</h3>-->
	   <!--           	<p>-->
				<!--		Devote yourself to daily Prayer and even join the prayer band.-->
				<!--	</p>-->
	   <!--         </div>-->
	   <!--       </div>-->
	   <!--       <div class="d-flex services ftco-animate text-lg-right py-4 px-4">-->
	   <!--         <div class="icon order-md-last d-flex align-items-center justify-content-center"><span class="flaticon-church"></span></div>-->
	   <!--         <div class="media-body pr-lg-4">-->
	   <!--           <h3 class="heading mb-3">Church Community</h3>-->
	   <!--           <p>-->
				<!--		The church community is made up a diverse community of young and old city folks.-->
				<!--  </p>-->
	   <!--         </div>-->
	   <!--       </div>-->
	   <!--       <div class="d-flex services ftco-animate text-lg-right py-4 px-lg-4">-->
	   <!--         <div class="icon order-md-last d-flex align-items-center justify-content-center"><span class="flaticon-bible"></span></div>-->
	   <!--         <div class="media-body pr-lg-4">-->
	   <!--           <h3 class="heading mb-3">Teaching</h3>-->
	   <!--           <p>-->
				<!--	  Experince Powerful teachings from the sabbath school department and action units -->
				<!--	</p>-->
	   <!--         </div>-->
	   <!--       </div>-->

	   <!--       <div class="d-flex services ftco-animate text-lg-right py-4 px-lg-4">-->
	   <!--         <div class="icon order-md-last d-flex align-items-center justify-content-center"><span class="flaticon-social-care"></span></div>-->
	   <!--         <div class="media-body pr-lg-4">-->
	   <!--           <h3 class="heading mb-3">Helpers</h3>-->
	   <!--           <p>Be part of the Church Ushering team and helping team in order to facilatate church programs and activites.</p>-->
	   <!--         </div>-->
	   <!--       </div>-->
	   <!--       <div class="d-flex services ftco-animate text-lg-right py-4 px-lg-4">-->
	   <!--         <div class="icon order-md-last d-flex align-items-center justify-content-center"><span class="flaticon-rings"></span></div>-->
	   <!--         <div class="media-body pr-lg-4">-->
	   <!--           <h3 class="heading mb-3">Wedding</h3>-->
	   <!--           <p>Experince the amazing occassion of God's union of a man and a woman. </p>-->
	   <!--         </div>-->
	   <!--       </div>-->
	   <!--       <div class="d-flex services ftco-animate text-lg-right py-4 px-lg-4">-->
	   <!--         <div class="icon order-md-last d-flex align-items-center justify-content-center"><span class="flaticon-promotion"></span></div>-->
	   <!--         <div class="media-body pr-lg-4">-->
	   <!--           <h3 class="heading mb-3">Events</h3>-->
	   <!--           <p>Grow and Enjoy the power church events organized by the local church and the GC</p>-->
	   <!--         </div>-->
	   <!--       </div>-->
    <!--			</div>-->

    <!--			<div class="col-md-6 d-flex align-items-stretch">-->
    <!--				<div class="img img-about" style="background-image: url(static/images/about.jpg);"></div>-->
    <!--			</div>-->
    <!--		</div>-->
    <!--	</div>-->
    <!--</section>-->
		
		<section class="instagram ftco-section ftco-no-pt ftco-no-pb">
      <div class="container-fluid px-md-0">
        <div class="row no-gutters">
          <div class="col-sm-12 col-md ftco-animate">
            <a href="static/images/insta-1.jpg" class="insta-img img image-popup" style="background-image: url(static/images/insta-1.jpg);">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="static/images/insta-2.jpg" class="insta-img img image-popup" style="background-image: url(static/images/insta-2.jpg);">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="static/images/insta-3.jpg" class="insta-img img image-popup" style="background-image: url(static/images/insta-3.jpg);">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md ftco-animate">
            <a href="static/images/insta-4.jpg" class="insta-img img image-popup" style="background-image: url(static/images/insta-4.jpg);">
              <div class="icon d-flex justify-content-center">
                <span class="icon-instagram align-self-center"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="ftco-section testimony-section img" style="background-image: url(static/images/bg_1.jpg);">
    	<div class="overlay"></div>
			<div class="container">
				<div class="row justify-content-center mb-5 pb-3">
				<div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
					<h2 class="mb-2">Inspirational Testimony</h2>
				</div>
				</div>
				<div class="row justify-content-center ftco-animate">
				<div class="col-md-8">
					<div class="carousel-testimony owl-carousel ftco-owl">
						<?php if($testimonials == null): ?>
							<div class="item">
							    <div class="jumbotron">
                                  <h1 class="display-4" style="margin: 0 , auto; text-align:center;"><strong>TO ADD A TESTIMONIAL</strong></h1>
                                  <p class="lead">If your are a member of Bulawayo City Center Church to add a testimonial please contact the communication department to have your testimonial approved and added, thank you.</p>
                                  <hr class="my-4">
                                  
                                  <a class="btn btn-primary btn-lg" style="margin-left:40%;" href="https://byocitycentersda.org.zw/contact" role="button">Contact Now</a>
                                </div>
							<!--	<div class="testimony-wrap text-center py-4 pb-5">-->
							<!--	<div class="user-img mb-4" style="background-image: url(static/images/forest_green.png)">-->
							<!--		<span class="quote d-flex align-items-center justify-content-center">-->
							<!--		<i class="icon-quote-left"></i>-->
							<!--		</span>-->
							<!--	</div>-->
							<!--	<div class="text p-3">-->
							<!--		<p class="mb-4">-->
							<!--			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum magna ex, in malesuada mi varius ac. Fusce ac sem.</p>-->
							<!--		<p class="name">John Cooper</p>-->
							<!--		<span class="position">Member</span>-->
							<!--	</div>-->
							<!--	</div>-->
							<!--</div>-->
							<!--<div class="item">-->
							<!--	<div class="testimony-wrap text-center py-4 pb-5">-->
							<!--	<div class="user-img mb-4" style="background-image: url(static/images/forest_green.png)">-->
							<!--		<span class="quote d-flex align-items-center justify-content-center">-->
							<!--		<i class="icon-quote-left"></i>-->
							<!--		</span>-->
							<!--	</div>-->
							<!--	<div class="text p-3">-->
							<!--		<p class="mb-4">-->
							<!--				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum magna ex, in malesuada mi varius ac. Fusce ac sem.</p>-->
							<!--		<p class="name">John Cooper</p>-->
							<!--		<span class="position">Member</span>-->
							<!--	</div>-->
							<!--	</div>-->
							<!--</div>-->
							<!--<div class="item">-->
							<!--	<div class="testimony-wrap text-center py-4 pb-5">-->
							<!--	<div class="user-img mb-4" style="background-image: url(static/images/forest_green.png)">-->
							<!--		<span class="quote d-flex align-items-center justify-content-center">-->
							<!--		<i class="icon-quote-left"></i>-->
							<!--		</span>-->
							<!--	</div>-->
							<!--	<div class="text p-3">-->
							<!--		<p class="mb-4">-->
							<!--				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum magna ex, in malesuada mi varius ac. Fusce ac sem.</p>-->
							<!--		<p class="name">John Cooper</p>-->
							<!--		<span class="position">Member</span>-->
							<!--	</div>-->
							<!--	</div>-->
							<!--</div>-->
							<!--<div class="item">-->
							<!--	<div class="testimony-wrap text-center py-4 pb-5">-->
							<!--	<div class="user-img mb-4" style="background-image: url(static/images/forest_green.png)">-->
							<!--		<span class="quote d-flex align-items-center justify-content-center">-->
							<!--		<i class="icon-quote-left"></i>-->
							<!--		</span>-->
							<!--	</div>-->
							<!--	<div class="text p-3">-->
							<!--		<p class="mb-4">-->
							<!--				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum magna ex, in malesuada mi varius ac. Fusce ac sem.</p>-->
							<!--		<p class="name">John Cooper</p>-->
							<!--		<span class="position">Member</span>-->
							<!--	</div>-->
							<!--	</div>-->
							<!--</div>-->
							<!--<div class="item">-->
							<!--	<div class="testimony-wrap text-center py-4 pb-5">-->
							<!--	<div class="user-img mb-4" style="background-image: url(static/images/forest_green.png)">-->
							<!--		<span class="quote d-flex align-items-center justify-content-center">-->
							<!--		<i class="icon-quote-left"></i>-->
							<!--		</span>-->
							<!--	</div>-->
							<!--	<div class="text p-3">-->
							<!--		<p class="mb-4">-->
							<!--			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum magna ex, in malesuada mi varius ac. Fusce ac sem.</p>-->
							<!--		<p class="name">John Cooper</p>-->
							<!--		<span class="position">Member</span>-->
							<!--	</div>-->
							<!--	</div>-->
							</div>
						<?php else:?>
							<?php foreach($testimonials as $item): ?>
								<?php if($item['approve'] == 1):?>
								<div class="item">
									<div class="testimony-wrap text-center py-4 pb-5">
									<div class="user-img mb-4" style="background-image: url(static/images/forest_green.png)">
										<span class="quote d-flex align-items-center justify-content-center">
										<i class="icon-quote-left"></i>
										</span>
									</div>
									<div class="text p-3">
										<p class="mb-4">
											<?php echo $item['testimony']?>
										</p>
										<p class="name"><?php echo $item['name']?></p>
										<span class="position">Member</span>
									</div>
									</div>
								</div>
								<?php endif ?>
							<?php endforeach?>
						<?php endif ?>

					</div>
				</div>
				</div>
			</div>
		</section>
		<!-- Staff Members -->
		<section>
			<div class="row justify-content-center mt-5 pb-3">
				<div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
					<h2 class="mt-2" style="color: #000 !Important;">Church Leadership</h2>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<?php if($staff == null): ?>
					<div class="col-md-4 col-sm-4">
						<div class="team-member">
							<!--<div class="team-img">-->
							<!--	<img src="https://image.freepik.com/free-photo/man-standing-with-a-black-t-shirt_1187-1045.jpg" alt="team member" class="img-responsive">-->
							<!--</div>-->
							<div class="team-hover">
								<div class="s-link">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
								</div>
							</div>
						</div>
						<div class="team-title">
							<h5 style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"><strong>Martin Smith</strong></h5>
							<span style="position: absolute; left: 50%; top: 80%; transform: translate(-50%, -50%);">founder &amp; ceo</span>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="team-member">
							<!--<div class="team-img">-->
							<!--	<img src="https://image.freepik.com/free-photo/elegant-man-with-thumbs-up_1149-1595.jpg" alt="team member" class="img-responsive">-->
							<!--</div>-->
							<div class="team-hover">
								<div class="s-link">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
								</div>
							</div>
						</div>
						<div class="team-title" >
							<h5 style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"><strong>Franklin Harbet</strong></h5>
							<span style="position: absolute; left: 50%; top: 80%; transform: translate(-50%, -50%);">HR Manager</span>
							<br>
							<br>
						</div>
					</div>
					<div class="col-md-4 col-sm-4">
						<div class="team-member">
							<!--<div class="team-img">-->
							<!--	<img src="https://image.freepik.com/free-photo/well-dressed-executive-with-crossed-arms_1098-3930.jpg" alt="team member" class="img-responsive">-->
							<!--</div>-->
							<div class="team-hover">
								<div class="s-link">
									<a href="#"><i class="fa fa-facebook"></i></a>
									<a href="#"><i class="fa fa-twitter"></i></a>
									<a href="#"><i class="fa fa-google-plus"></i></a>
								</div>
							</div>
						</div>
						<div class="team-title">
							<h5 style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"><strong>Linda Anderson</strong></h5>
							<span style="position: absolute; left: 50%; top: 80%; transform: translate(-50%, -50%);">Marketing Manager</span>
							<br>
							<br>
						</div>
					</div>
					<?php else:?>
						<?php foreach($staff as $item):?>
							<?php if($item['approve'] == 1): ?>
							<div class="col-md-4 col-sm-4">
								<div class="team-member">
									<div class="team-hover">
										<div class="s-link">
											<a href="#"><i class="fa fa-facebook"></i></a>
											<a href="#"><i class="fa fa-twitter"></i></a>
											<a href="#"><i class="fa fa-google-plus"></i></a>
										</div>
									</div>
								</div>
								<div class="team-title">
									<h5 style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"><strong><?php echo $item['name']?></strong></h5>
									<span style="position: absolute; left: 50%; top: 80%; transform: translate(-50%, -50%);"><?php echo $item['title']?></span>
									<br>
									<br>
								</div>
							</div>
							<?php endif ?>
						<?php endforeach?>
					<?php endif ?>
				</div>
			</div>

		</section>
	
