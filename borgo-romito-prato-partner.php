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
        <div id="partner" class="col-md-3 secondary partner intro">
          <a href="http://www.alessandrogoti.com/" target="blank">
            <img src="images/img-complesso-borgo-romito-prato-partner-studio-goti.png" alt="Complesso BorgoRomito, Prato - Partner, Studio Goti" />
          </a>
          <p style="text-align: center">
            <a style="color: rgb(51,51,51)" href="http://www.alessandrogoti.com/" target="blank">
              STUDIO TECNICO
            </a><br>
            Ingegnere Alessandro Goti<br>
            Ingegnere Stefano Goti
          </p>
        </div>
        <div id="partner" class="col-md-3 secondary partner intro">
          <a href="http://www.brunetticostruzioni.it/" target="blank">
            <img src="images/img-complesso-borgo-romito-prato-partner-brunetti.png" alt="Complesso BorgoRomito, Prato - Partner, B&amp;A" />
          </a>
          <p style="text-align: center">
            <a style="color: rgb(51,51,51)" href="http://www.brunetticostruzioni.it/" target="blank">
              Impresa esecutrice
            </a>
          </p>
        </div>
        <div id="partner" class="col-md-3 secondary partner intro">
          <a href="http://www.bottegadellartigiano.it/" target="blank">
            <img src="images/img-complesso-borgo-romito-prato-partner-bottega-dell-artigiano.png" alt="Complesso BorgoRomito, Prato - Partner, Bottega dell'Artigiano" />
          </a>
          <p style="text-align: center">
            <a style="color: rgb(51,51,51)" href="http://www.bottegadellartigiano.it" target="blank">
              Arredamenti
            </a>
          </p>
        </div>
        <div id="partner" class="col-md-3 secondary partner intro">
          <a href="http://www.consorzioevolve.it/" target="blank">
            <img src="images/img-complesso-borgo-romito-prato-partner-consorzio-evolve.png" alt="Complesso BorgoRomito, Prato - Partner, Consorzio Evolve" />
          </a>
          <p style="text-align: center">
            <a style="color: rgb(51,51,51)" href="http://www.consorzioevolve.it" target="blank">
              Impresa pulizie
            </a>
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
