<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>BYOCityCenterSDA Login Page</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<link rel="stylesheet" href="<?php echo base_url(); ?>static/auth/style.css">
</head>
<body>
<!-- partial:index.partial.html -->
<section class="login__section">
<?php validation_errors(); ?>

<?php echo form_open('auth/login');?>
  <div class="login__card">
    
    <label class="login__label">E-mail:</label>
    <input class="login__input" name="email" type="email" placeholder="youremail@gmail.com">
    <?php if( validation_errors() === "The Email field is required"): ?>
      <?php echo '<p class="alert alert-success">'.validation_errors().'</p>';?>
    <?php endif; ?>
    <label class="login__label">Password:</label>
    <input class="login__input" name="password" type="password" placeholder="password">
    <?php if( validation_errors() === "The Password field is required"): ?>
      <?php echo '<p class="alert alert-success">'.validation_errors().'</p>';?>
    <?php endif; ?>
    <button type="submit" class="login__button ">Login</button>

  </div>
<?php echo form_close(); ?>
  
</section>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
<script  src="<?php echo base_url(); ?>static/auth/script.js"></script>

</body>
</html>
