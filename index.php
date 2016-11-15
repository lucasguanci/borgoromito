<!DOCTYPE html>
<html>
  <head>
    <title>BorgoRomito - complesso residenziale, Prato</title>
    <meta http-equiv="X-UA-Compatible" content="edge" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- common head elements -->
    <?php include_once 'inc/head-common.php' ?>
    <?php include_once 'inc/ie-fix.php' ?>
  </head>
<body>
  <?php include_once("inc/analyticstracking.php") ?>
<!--   <section id="cookies-wrapper">
    <div class="cookies-left">
      Questo sito utilizza cookies tecnici e di terze parti al solo scopo di ottimizzare la navigazione. Per maggiori dettagli ed una autonoma gestione dei cookies, visionare l'informativa estesa. Cliccando "OK" acconsenti all'utilizzo dei cookies.
    </div>
    <div class="cookies-right">
      <button type="button" class="btn btn-default">Informativa</button>
      <button type="button" class="btn btn-default">OK</button>
    </div>
  </section>
 -->  <header>
    <!-- main-nav -->
    <?php include_once 'inc/nav.php' ?>
    <!-- carousel -->
    <?php include_once 'inc/banner.php' ?>
  </header>
  <!-- /header -->
  <!-- news -->
  <section id="news" class="news index">
    <?php include_once 'inc/news.php' ?>
  </section>
  <!-- /news --> 
  <!-- galleria immagini -->
  <section class="galleria">
    <?php include_once 'inc/galleria-immagini.php'; ?>
  </section>
  <!-- /galleria immagini -->
  <!-- footer -->
  <footer>
    <?php include_once 'inc/footer.php'; ?>  
  </footer>
  <!-- /footer -->
  <!-- templates -->
  <!--<?php include_once 'inc/templates.php'; ?>-->
  <!-- /templates -->
  <!-- scripts -->
  <?php include_once 'inc/scripts.php'; ?>
  <!-- /scripts -->
</body>
</html>
