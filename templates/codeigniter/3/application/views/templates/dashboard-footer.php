        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2019 <a href="https://developerprince.co.zw" target="_blank">Developerprince</a>. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
	<script>
					ClassicEditor
									.create( document.querySelector( '#editor' ) )
									.then( editor => {
													console.log( editor );
									} )
									.catch( error => {
													console.error( error );
									} );
	</script>
  <!-- plugins:js -->
  <script src="<?php echo base_url(); ?>static/dashboard/vendors/base/vendor.bundle.base.js"></script>
  <!-- endinject -->
  <!-- Plugin js for this page-->
  <script src="<?php echo base_url(); ?>static/dashboard/vendors/chart.js/Chart.min.js"></script>
  <script src="<?php echo base_url(); ?>static/dashboard/vendors/datatables.net/jquery.dataTables.js"></script>
  <script src="<?php echo base_url(); ?>static/dashboard/vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  <script src="<?php echo base_url(); ?>static/dashboard/js/off-canvas.js"></script>
  <script src="<?php echo base_url(); ?>static/dashboard/js/hoverable-collapse.js"></script>
  <script src="<?php echo base_url(); ?>static/dashboard/js/template.js"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="<?php echo base_url(); ?>static/dashboard/js/dashboard.js"></script>
  <script src="<?php echo base_url(); ?>static/dashboard/js/data-table.js"></script>
  <script src="<?php echo base_url(); ?>static/dashboard/js/jquery.dataTables.js"></script>
  <script src="<?php echo base_url(); ?>static/dashboard/js/dataTables.bootstrap4.js"></script>
  <!-- End custom js for this page-->
</body>

</html>


