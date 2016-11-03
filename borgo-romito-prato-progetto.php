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
    <!-- mututo -->
    <div class="container">
      <div class="row content">
        <div id="mutuo" class="col-md-12 secondary mutuo intro">
          <h2>Progetto BorgoRomito</h2>
          <div class="img-wrapper">
            <img src="images/img-complesso-residenziale-borgo-romito-prato-progetto.jpg" alt="Complesso residenziale BorgoRomito, Prato" />
          </div>          
          <p class="intro">
            Il <strong class="red">Complesso Residenziale BorgoRomito</strong> è il risultato di un intervento di recupero ambientale di ampio respiro: in luogo di fabbricati industriali dismessi CAP Casa spa realizza edifici residenziali di pregio con ampie zone destinate a verde.
          </p>
          <p class="intro">
            Appena fuori le Mura a due passi dal Centro Storico di Prato vicino a tutte le principali vie di comunicazione, in una zona ad alta densità di servizi.
          </p>
          <p class="intro">
            La tua casa costruita in equilibrio fra vivibilità e tecnologia, nel rispetto delle risorse ambientali e del risparmio energetico.<br>
            Giardini e percorsi pedonali creano un ambiente accogliente e sereno con tante comodità.
          </p>
          <p class="intro">
            La qualità dei materiali e l’attenzione alle finiture trasformano una casa nella tua casa.      
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
