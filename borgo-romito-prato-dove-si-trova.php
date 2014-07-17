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
          <h2>Dove si trova</h2>
          <div class="img-wrapper">
            <img src="images/news-complesso-residenziale-borgo-romito-dove-si-trova.png" alt="Complesso residenziale BorgoRomito, Prato" />
          </div>          
          <p class="intro">
            <strong class="red">BorgoRomito</strong>, ubicato nel quadrilatero costituito da via del Romito, via Livi e via Vestri e dalla prosecuzione di via Pascoli, è costituito da tre edifici residenziali e da un fabbricato direzionale ad uffici.
          </p>
          <p class="intro">            
            Si colloca in una area ad alta densità di servizi, in posizione ideale tra il Centro Storico della Città di Prato e le principali vie di comunicazione, a pochi passi dalla pista ciclabile che collega le mura cittadine al nuovo centro commerciale.
          </p>
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
