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
    <!-- ufficio vendite -->
    <div class="container">
      <div class="row content">
        <div id="contatti" class="col-md-12 secondary contatti">
          <h2>Ufficio vendite</h2>
          <div class="img-wrapper">
            <img src="images/complesso-residenziale-borgo-romito-piano-volumetrico.png" alt="Piano volumetrico Complesso residenziale BorgoRomito, Prato" />
          </div>          
          <p class="intro">
            Per ogni informazione sul <strong>Complesso Residenziale BorgoRomito</strong> puoi rivolgerti all’<span class="red">UFFICIO VENDITE</span>. Avrai il vantaggio derivante dalla vendita diretta senza intermediazione e grazie ad accordi esclusivi con primari Istituti di Credito, la possibilità di accedere a mutui con condizioni particolarmente vantaggiose.
          </p>
          <p class="intro clear" style="float: left">
            <strong class="red">Ufficio vendite</strong><br>
            via del Romito 70 - Prato<br>
            Per prenotazioni e appuntamenti<br>
            telefono. 338.9360852<br>
            email. <a class="link" href="mailto:ufficiovendite@borgoromito.it">ufficiovendite@borgoromito.it</a>
          </p>
          <p class="clear"></p>
        </div>
      </div>
    </div>
    <!-- /ufficio vendite -->
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
