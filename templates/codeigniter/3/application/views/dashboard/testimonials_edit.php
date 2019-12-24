<?php foreach($test as $item): ?>
<div class="content-wrapper">
    <div class="row">
        <div class="col-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                <h4 class="card-title">Add Testimonial</h4>
                <p class="card-description">
                    Enter Details of Testimonial
                </p>
                <?php echo form_open('/testimonial-update-single');?>
                <div class="forms-sample">
					<label >Name</label>
                    	<input type="text" class="form-control" name="name" placeholder="<?php echo $item['name'] ?>">
					</div>
                    <div class="form-group">
					<label >Testimony</label>
						<textarea class="form-control" name="testimony" placeholder="<?php echo $item['testimony'] ?>" rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <a href="<?php echo base_url() ?>about-list" class="btn btn-light">Cancel</a>
                </div>
                </form>
                </div>
            </div>
            </div>
    </div>
</div>
<?php endforeach; ?>
