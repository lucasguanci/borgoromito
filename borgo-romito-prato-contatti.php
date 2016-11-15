<!DOCTYPE html>
<html>
  <head>
    <title>BorgoRomito - complesso residenziale, Prato</title>
    <!-- properly render unicode characters in IE -->
    <meta http-equiv="X-UA-Compatible" content="edge" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- common head elements -->
    <?php include_once 'inc/head-common.php' ?>
    <?php include_once 'inc/ie-fix.php' ?>
  </head>
<body>
  <?php include_once("inc/analyticstracking.php") ?>
  <header>
    <!-- main-nav -->
    <?php include_once 'inc/nav.php' ?>
  </header>
  <!-- /header -->
  <!-- content -->
  <section id="content" class="secondary">
    <!-- contatti -->
    <div class="container">
      <div class="row content">
        <div id="contatti" class="col-md-12 secondary contatti">
          <h2>CAP casa</h2>
          <div class="img-wrapper">
            <img src="images/img-logo-CAP-casa-prato.png" alt="CAP casa, Complesso residenziale BorgoRomito, Prato" />
          </div>          
          <p class="intro">
            <strong class="red">CAP CASA spa</strong> è una società immobiliare e fa parte del Gruppo CAP cooperativa autotrasporti pratese.<br>
            E' nata in occasione del progetto di riqualificazione e recupero dell'area della ex Officina e Deposito.<br>
            Posta a ridosso delle mura cittadine fra le strade di via del Romito e via Livi, questa area ospiterà il complesso BorgoRomito composto da tre edifici residenziali e uno direzionale.<br>
            Un importante impegno per dare un nuovo volto alla città.
          </p>
          <p class="content clear">            
            <strong class="red">Sede</strong><br>
            Piazza Duomo, 20<br>
            59100 Prato<br>
            email: <a href="mailto:segreteria@borgoromito.it">segreteria@borgoromito.it</a>
          </p>
        </div>
      </div>
    </div>
    <!-- /contatti -->
  </section>

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
  <?php include_once 'inc/templates.php'; ?>
  <?php include_once 'inc/templates-appartamenti.php'; ?>
  <!-- /templates -->
  <!-- scripts -->
  <?php include_once 'inc/scripts.php'; ?>
  <?php include_once 'inc/scripts-appartamenti.php'; ?>
  <!-- /scripts -->
</body>
</html>
