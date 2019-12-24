<?php foreach($staff as $item): ?>
<div class="content-wrapper">
    <div class="row">
        <div class="col-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                <h4 class="card-title">Edit a Staff Member</h4>
                <p class="card-description">
                    Edit Details of Staff Member
                </p>
                <?php echo form_open_multipart('/staff-update-member');?>
                <div class="forms-sample">
					<label >Name</label>
                    <input type="text" class="form-control" name="name" placeholder="<?php echo $item['name']?>">
					</div>
					<label >Title</label>
                    <input type="text" class="form-control" name="title" placeholder="<?php echo $item['title']?>">
                    </div>
                    <div class="form-group">
                    <label >Brief</label>
                    <textarea class="form-control" name="brief" id="editor" placeholder="<?php echo $item['brief']?>" rows="5"></textarea>
					</div>
					<div class="form-group">
                    <!-- <label>Upload Image</label>
                    <input type="file" name="userfile" class="btn-primary btn-block" size="20">
                    </div> -->
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <a href="<?php echo base_url() ?>staff-list" class="btn btn-light">Cancel</a>
                </div>
                </form>
                </div>
            </div>
            </div>
    </div>
</div>

<?php endforeach; ?>
