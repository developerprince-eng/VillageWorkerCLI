<div class="content-wrapper">
    <div class="row">
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">Gallery List</h4>
            <p class="card-description">
            View Added Pictures in Gallery
            </p>
            <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>
                    Title
                    </th>
                    <th>
                    Category
                    </th>
                    <th>
                    Approve
                    </th>
                    <th>
                    Edit
                    </th>
                </tr>

                <tbody>
                <?php foreach($gallery as $item): ?>
                    <tr>
                        <td><?php echo $item['title']?></td>
                        <td><?php echo $item['category']?></td>
                        <td><?php echo $item['approve']?></td>
                        <td>
                        <?php if($item['approve'] == 0): ?>
                            <?php echo form_open('dashboard/gallery_delete_item/'.$item['gid']) ?>
                                <input type="submit" value="delete" class="btn btn-danger btn-block">
                            </form>
                            <br>
                            <?php echo form_open('/dashboard/gallery_approve_item/'. $item['gid'])?>
                                <input type="submit" value="approve" class="btn btn-primary btn-block">
                            </form>
                        <?php else: ?>
                            <?php echo form_open('dashboard/gallery_delete_item/'.$item['gid']) ?>
                                <input type="submit" value="delete" class="btn btn-danger btn-block">
                            </form>
                            <br>
                            <?php echo form_open('/dashboard/gallery_suspend_item/'. $item['gid'])?>
                                <input type="submit" value="suspend" class="btn btn-secondary btn-block">
                            </form>
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
