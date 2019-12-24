<?php foreach($about as $item): ?>
<div class="content-wrapper">
    <div class="row">
        <div class="col-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                <h4 class="card-title">Edit Brief</h4>
                <p class="card-description">
                    Enter Details of Church Brief
                </p>
                <?php echo form_open('/home-update-brief');?>
                <div class="forms-sample">
                    <div class="form-group">
                    <label >Brief</label>
                    <textarea class="form-control" name="brief" placeholder="<?php echo $item['brief'] ?>" rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <a href="<?php echo base_url() ?>home-list" class="btn btn-light">Cancel</a>
                </div>
                </form>
                </div>
            </div>
            </div>
    </div>
</div>

<?php endforeach ?>
