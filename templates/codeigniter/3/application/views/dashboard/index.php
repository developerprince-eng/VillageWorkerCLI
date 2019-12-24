<div class="content-wrapper">
    <div class="row">
    <div class="col-md-12 grid-margin">
        <div class="d-flex justify-content-between flex-wrap">
        <div class="d-flex align-items-end flex-wrap">
            <div class="mr-md-3 mr-xl-5">
            <h2>Welcome back,</h2>
            <p class="mb-md-0">Your analytics dashboard.</p>
            </div>
            <div class="d-flex">
            <i class="mdi mdi-home text-muted hover-cursor"></i>
            <p class="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;</p>
            <p class="text-primary mb-0 hover-cursor">Analytics</p>
            </div>
        </div>
        <div class="d-flex justify-content-between align-items-end flex-wrap">
            <button type="button" class="btn btn-light bg-white btn-icon mr-3 d-none d-md-block " disabled>
            <i class="mdi mdi-download text-muted"></i>
            </button>
            <button type="button" class="btn btn-light bg-white btn-icon mr-3 mt-2 mt-xl-0" disabled>
            <i class="mdi mdi-clock-outline text-muted"></i>
            </button>
            <button type="button" class="btn btn-light bg-white btn-icon mr-3 mt-2 mt-xl-0" disabled>
            <i class="mdi mdi-plus text-muted"></i>
            </button>
            <button class="btn btn-primary mt-2 mt-xl-0" disabled>Download report</button>
        </div>
        </div>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body dashboard-tabs p-0">
            <ul class="nav nav-tabs px-4" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
            </li>
            </ul>
            <div class="tab-content py-0 px-0">
            <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                <div class="d-flex flex-wrap justify-content-xl-between">
                <div class="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                    <i class="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                    <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Sermons</small>
                    <?php if($sermons == null): ?>
                    <h5 class="mr-2 mb-0">0</h5>
                    <?php else: ?>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <h5 class="mb-0 d-inline-block">26 Jul 2018</h5>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                        <?php foreach($sermons as $item) : ?>
                        <a class="dropdown-item" href="#"><?php echo $item['date'] ?></a>
                        <?php endforeach?>
                        </div>
                    </div>
                    <?php endif?>
                    </div>
                </div>  
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                    <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                    <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Funds Raised</small>
                    <h5 class="mr-2 mb-0">0</h5>
                    </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                    <i class="mdi mdi-eye mr-3 icon-lg text-success"></i>
                    <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Total views</small>
                    <h5 class="mr-2 mb-0"><?php foreach($visits as $visit_num): ?><?php echo $visit_num['visits']?><?php endforeach ?></h5>
                    </div>
                </div>
                <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                    <i class="mdi mdi-download mr-3 icon-lg text-warning"></i>
                    <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Downloads</small>
                    <h5 class="mr-2 mb-0">0</h5>
                    </div>
                </div>
                <div class="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                    <i class="mdi mdi-flag mr-3 icon-lg text-danger"></i>
                    <div class="d-flex flex-column justify-content-around">
                    <small class="mb-1 text-muted">Flagged</small>
                    <h5 class="mr-2 mb-0">0</h5>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12 stretch-card">
    <div class="content-wrapper">
    <div class="row">
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
        
            <div class="table-responsive">
            <?php if($events == null): ?>
            <div class="jumbotron jumbotron-fluid" style="background: white;">
                <div class="container">
                    <h1 class="display-4" style="text-align: center;">Currently There are No Events</h1>
                    <p class="lead" style="text-align: center;">Please Check Later for any Events</p>
                </div>
            </div>
            <?php else: ?>
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>
                    Name
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
                <?php foreach($events as $item) : ?>
                    <tr>
                        <td><?php echo $item['name']?></td>
                        <td><?php echo $item['brief']?></td>
                        <td><?php echo $item['date']?></td>
                        <td><?php echo $item['time']?></td>
                        <td><?php echo $item['approve']?></td>
                    </tr>
                <?php endforeach?>
                </tbody>
            </table>
            <?php endif ?>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
    </div>
    </div>
    </div>
