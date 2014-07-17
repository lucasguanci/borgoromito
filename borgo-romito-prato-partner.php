<!DOCTYPE html>
<html>
  <head>
    <title>BorgoRomito - complesso residenziale, Prato</title>
    <!-- properly render unicode characters in IE -->
    <meta http-equiv="X-UA-Compatible" content="IE=7" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- common head elements -->
    <?php include_once 'inc/head-common.php' ?>
    <?php include_once 'inc/ie-fix.php' ?>
  </head>
<body>
  <?php include_once("analyticstracking.php") ?>
  <header>
    <!-- main-nav -->
    <?php include_once 'inc/nav.php' ?>
  </header>
  <!-- /header -->
  <!-- content -->
  <section id="content" class="secondary">
    <!-- mututo -->
    <div class="container">
      <div class="row content">
        <div id="mutuo" class="col-md-12 secondary mutuo intro">
          <h2></h2>
          <div class="img-wrapper"></div>          
          <p class="intro">pagina in costruzione</p>
        </div>
      </div>
    </div>
    <!-- /mututo -->
  </section>

  <!-- galleria immagini -->
  <section class="galleria">
    <?php include_once 'inc/galleria-immagini.php'; ?>
  </section>
  <!-- /galleria immagini -->

  <section id="news" class="news">
    <?php include_once 'inc/news.php' ?>
  </section>
  <!-- /content -->    
  <!-- footer -->
  <footer>
    <?php include_once 'inc/footer.php'; ?>  
  </footer>
  <!-- /footer -->
  <!-- templates -->
  <?php include_once 'inc/templates-appartamenti.php'; ?>
  <!-- /templates -->
  <!-- scripts -->
  <?php include_once 'inc/scripts.php'; ?>
  <?php include_once 'inc/scripts-appartamenti.php'; ?>
  <!-- /scripts -->
</body>
</html>
