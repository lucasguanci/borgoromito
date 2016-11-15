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
    <!-- dove si trova -->
    <div class="container">
      <div class="row content">
        <div id="mutuo" class="col-md-12 secondary mutuo intro">
          <h2>Dove si trova</h2>
          <div class="img-wrapper">
            <img src="images/img-complesso-residenziale-borgo-romito-prato-dove-si-trova.jpg" alt="Complesso residenziale BorgoRomito, Prato" data-toggle="modal" data-target="#modal-dove-si-trova" style="cursor: pointer"/>
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
    <!-- /dove si trova -->
    <!-- Modal -->
    <div class="modal fade" id="modal-dove-si-trova" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <h4 class="modal-title" id="myModalLabel">Complesso residenziale BorgoRomito</h4>
          </div>
          <div class="modal-body">
            <img src="images/img-complesso-residenziale-borgo-romito-prato-dove-si-trova-large.jpg" alt="Complesso residenziale BorgoRomito, Prato"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
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
