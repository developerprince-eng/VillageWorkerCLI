<div class="content-wrapper">
    <div class="row">
        <div class="col-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                <h4 class="card-title">Add a Picture</h4>
                <p class="card-description">
                    Enter Details for new picture
                </p>
                <?php echo form_open_multipart('/gallery-add-item');?>
                <div class="forms-sample">
                    <div class="form-group">
                   <label >Category</label>
                    <select name="category">
                        <option value = "church">Church</option>
                        <option value = "youth">Youth</option>
                    </select> 
                    </div>
                    <div class="form-group">
                    <label>Upload Image</label>
                    <input type="file" name="userfile" class="btn-primary btn-block" size="20">
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <a href="<?php echo base_url() ?>gallery-list" class="btn btn-light">Cancel</a>
                </div>
                </form>
                </div>
                </div>
            </div>
    </div>
</div>