<footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
							<h2 class="ftco-heading-2">Bulawayo City Centre Church</h2>
							<?php if($home == null) : ?>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum magna ex, in malesuada mi varius ac. Fusce ac sem.
								</p>
							<?php else: ?>
								<?php foreach($home as $item) : ?>
									<?php if($item['approve'] == 1) : ?>
										<p style="font-size: 0.85rem;">
											<?php echo $item['brief'] ?>
										</p>
									<?php endif ?>
								<?php endforeach ?>
							<?php endif ?>
              
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="https://www.facebook.com/byocitycentresda/"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">About</h2>
              <ul class="list-unstyled">
                <li><a href="https://szu.adventist.org/wp-content/uploads/2016/04/28_Beliefs.pdf" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Beliefs</a></li>
                <li><a href="<?php echo base_url()?>about" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>History</a></li>
                <li><a href="<?php echo base_url()?>ministry" class="py-1 d-block"><span class="ion-ios-arrow-forward mr-3"></span>Ministries</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Service Hours</h2>
              <div class="opening-hours">
              	<!--<h4>Services Hours</h4>-->
              	<p class="pl-3">
					<span class="mb-3" style="font-size: 0.85rem;">Wednesday Service &mdash; 5:30 am to 6:30 pm</span>
					<span class="mb-3" style="font-size: 0.85rem;">Friday Service &mdash; 5:30 am to 7 pm</span>
              		<span class="mb-3" style="font-size: 0.85rem;">Saturday Service &mdash; 9:00 am to 6:00 pm</span>
              	</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
							Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved  <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://developerprince.co.zw" target="_blank">DeveloperPrince</a>
							<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
						</p>
					</div>
        </div>
      </div>
    </footer>
    
  

  <!-- loader -->
  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


  <script src="static/js/jquery.min.js"></script>
  <script src="static/js/jquery-migrate-3.0.1.min.js"></script>
  <script src="static/js/popper.min.js"></script>
  <script src="static/js/bootstrap.min.js"></script>
  <script src="static/js/jquery.easing.1.3.js"></script>
  <script src="static/js/jquery.waypoints.min.js"></script>
  <script src="static/js/jquery.stellar.min.js"></script>
  <script src="static/js/owl.carousel.min.js"></script>
  <script src="static/js/jquery.magnific-popup.min.js"></script>
  <script src="static/js/aos.js"></script>
  <script src="static/js/jquery.animateNumber.min.js"></script>
  <script src="static/js/bootstrap-datepicker.js"></script>
  <script src="static/js/scrollax.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDt6v-8XddY_lIO-nXs6U2GB8DzkT9OefI&sensor=true"></script>
  <script src="static/js/google-map.js"></script>
	<script src="static/js/main.js"></script>
	<script src='https://cdnjs.cloudflare.com/ajax/libs/velocity/1.1.0/velocity.min.js'></script>
  </body>
</html>
