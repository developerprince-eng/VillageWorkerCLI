

<?php foreach($about as $item): ?>
	<div class="content-wrapper">
		<div class="row">
			<div class="col-12 grid-margin stretch-card">
				<div class="card">
					<div class="card-body">
					<h4 class="card-title">Edit History</h4>
					<p class="card-description">
						Enter Details of Church History
					</p>
					<?php echo form_open('/about-update');?>
					<div class="forms-sample">
						<div class="form-group">
						<label >History</label>
						<textarea class="form-control" name="history" id="editor" placeholder="<?php echo $item['history']?>" rows="5"></textarea>
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
<?php endforeach ?>


