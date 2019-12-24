<div class="content-wrapper">
    <div class="row">
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">Sermons List</h4>
            <p class="card-description">
            View Added Sermons
            </p>
            <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>
                    Title
                    </th>
                    <th>
                    Preacher
                    </th>
                    <th>
                    Date
                    </th>
                    <th>
                    PDF Link
                    </th>
                    <th>
                    Approve
                    </th>
                    <th>
                        Edit
                    </th>
                </tr>

                <tbody>
                <?php foreach($sermons as $item): ?>
                    <tr>
                    <td><?php echo $item['title']?></td>
                    <td><?php echo $item['preacher']?></td>
                    <td><?php echo $item['date']?></td>
                    <td><?php echo $item['pdf_url']?></td>
                    <td><?php echo $item['approve']?></td>
                    <td>
                        <?php if($item['approve'] == 0): ?>
                        <?php echo form_open('dashboard/sermons_delete_item/'.$item['sid']) ?>
                            <input type="submit" value="delete" class="btn btn-danger btn-block">
                        </form>
                        <br>
                        <?php echo form_open('/dashboard/sermons_approve_item/'. $item['sid'])?>
                            <input type="submit" value="approve" class="btn btn-primary btn-block">
						</form>
						<br>
						<a href="sermons-update/<?php echo $item['sid']?>"><input type="submit" value="Edit" disabled class="btn btn-primary btn-block"></a>
                        <?php else: ?>
                        <?php echo form_open('dashboard/sermons_delete_item/'.$item['sid']) ?>
                            <input type="submit" value="delete" class="btn btn-danger btn-block">
						</form>
						<br>
                        <?php echo form_open('/dashboard/sermons_suspend_item/'. $item['sid'])?>
                            <input type="submit" value="suspend" class="btn btn-secondary btn-block">
						</form>
						<br>
						<a href="sermons-update/<?php echo $item['sid']?>"><input type="submit" value="Edit" disabled class="btn btn-primary btn-block"></a>
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
