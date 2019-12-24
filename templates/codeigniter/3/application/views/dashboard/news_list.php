<div class="content-wrapper">
    <div class="row">
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">News List</h4>
            <p class="card-description">
            View Added News
            </p>
            <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>
                    Title
                    </th>
                    <th>
                    Brief
                    </th>
                    <th>
                    Date
                    </th>
                    <th>
                    Time
                    </th>
                    <th>
                    Approve
                    </th>
                    <th>
                        Edit
                    </th>
                </tr>
                <tbody>
                <?php foreach($news as $item): ?>
                    <tr>
                        <td><?php echo $item['title']?></td>
                        <td><?php echo $item['brief']?></td>
                        <td><?php echo $item['date']?></td>
                        <td><?php echo $item['time']?></td>
                        <td><?php echo $item['approve']?></td>
                        <td>
                        <?php if($item['approve'] == 0): ?>
                        <?php echo form_open('dashboard/news_delete_item/'.$item['nid']) ?>
                            <input type="submit" value="delete" class="btn btn-danger btn-block">
                        </form>
                        <br>
                        <?php echo form_open('/dashboard/news_approve_item/'. $item['nid'])?>
                            <input type="submit" value="approve" class="btn btn-primary btn-block">
                        </form>
                        <?php else: ?>
                        <?php echo form_open('dashboard/news_delete_item/'.$item['nid']) ?>
                            <input type="submit" value="delete" class="btn btn-danger btn-block">
                        </form>
                        <br>
                        <?php echo form_open('/dashboard/news_suspend_item/'. $item['nid'])?>
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
