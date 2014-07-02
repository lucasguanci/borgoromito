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
    <!-- appartamenti -->
    <div class="container">
      <!-- Intro appartamenti -->
      <div class="row content">
        <div id="appartamenti" class="col-md-12 appartamenti intro">
          <h2>Gli appartamenti</h2>
          <div class="img-wrapper">
            <img src="images/complesso-residenziale-borgo-romito-piano-volumetrico.png" alt="Piano volumetrico Complesso residenziale BorgoRomito, Prato" />
          </div>          
          <p class="intro">
            Il <span class="red"><strong>Complesso residenziale BorgoRomito</strong></span>, appena fuori le Mura a due passi dal Centro Storico di Prato vicino a tutte le principali vie di comunicazione, in una zona ad alta densità di servizi.<br>
            La tua casa costruita in equilibrio fra vivibilità e tecnologia, nel rispetto delle risorse ambientali e del risparmio energetico.<br>
            Giardini e percorsi pedonali creano un ambiente accogliente e sereno con tante comodità.<br>
            La qualità dei materiali e l’attenzione alle finiture trasformano una casa nella tua casa.
          </p>
          <p class="intro">Disponibili anche garage e fondi commerciali</p>          
          <p class="intro-istruzioni">
            Per vedere gli appartamenti disponibili è possibile effettuare una <em>ricerca per edificio</em>, una <em>ricerca per tipologia</em> di appartamento (1 camera, 2 camere, etc) oppure una <em>ricerca diretta</em> inserendo l'identificativo dell'appartamento.
          </p>
        </div>
      </div>
    </div>
    <!-- /Intro appartamenti -->
    <!-- Ricerca appartamenti -->
    <div class="container">
      <div id="tpl-ricerca-container" class="row content">
        <!-- #tpl-ricerca -->
      </div>
    </div>
    <!-- /Ricerca appartamenti -->
    <!-- Risultati ricerca -->
    <div class="container">
      <div class="row content" id="risultati-ricerca">
        <!-- risultati ricerca per edificio -->
        <div id="tpl-risultati-ricerca-edificio-container" class="col-md-12 appartamenti risultati-ricerca risultati-ricerca-1">
          <!-- #tpl-risultati-ricerca-edificio -->
        </div>
        <!-- risultati ricerca per tipologia -->
        <div id="tpl-risultati-ricerca-tipologia-container" class="col-md-12 appartamenti risultati-ricerca">
          <!-- #tpl-risultati-ricerca-tipologia -->
        </div>
      </div>
    </div>
    <!-- /Risultati ricerca -->
    <!-- Modals appartamenti -->
    <div id="modals-container">
      <!-- tpl-modal -->
    </div>
    <!-- /Modals appartamenti -->
    <!-- /appartamenti -->
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
  <?php include_once 'inc/templates-appartamenti.php'; ?>
  <!-- /templates -->
  <!-- scripts -->
  <?php include_once 'inc/scripts.php'; ?>
  <?php include_once 'inc/scripts-appartamenti.php'; ?>
  <!-- /scripts -->
</body>
</html>
