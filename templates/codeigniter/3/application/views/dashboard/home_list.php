<div class="content-wrapper">
    <div class="row">
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">Home List</h4>
            <p class="card-description">
            View Added Events
            </p>
            <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>
                    Brief
                    </th>
                    <th>
                    Approve
                    </th>
                    <th>
                        Edit
                    </th>
                </tr>
                <tbody>
                    <?php foreach($home as $item): ?>
                    <tr>
                        <td><?php echo $item['brief']?></td>
                        <td><?php echo $item['approve']?></td>
                        <td>
                        <?php if($item['approve'] == 0): ?>
                        <?php echo form_open('dashboard/home_delete_item/'.$item['hid']) ?>
                            <input type="submit" value="delete" class="btn btn-danger btn-block">
                        </form>
                        <br>
                        <?php echo form_open('/dashboard/home_approve_item/'. $item['hid'])?>
                            <input type="submit" value="approve" class="btn btn-primary btn-block">
						</form>
						<br>
						<a href="home-update/<?php echo $item['hid']?>"><input type="submit" disabled value="Edit" class="btn btn-primary btn-block"></a>
                        <?php else: ?>
                        <?php echo form_open('dashboard/home_delete_item/'.$item['hid']) ?>
                            <input type="submit" value="delete" class="btn btn-danger btn-block">
                        </form>
                        <br>
                        <?php echo form_open('/dashboard/home_suspend_item/'. $item['hid'])?>
                            <input type="submit" value="suspend" class="btn btn-secondary btn-block">
						</form>
						<br>
						<a href="home-update/<?php echo $item['hid']?>"><input type="submit" disabled value="Edit" class="btn btn-primary btn-block"></a>
                        <?php endif ?>
                        </td>
                    </tr>
                    <?php endforeach ?>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
