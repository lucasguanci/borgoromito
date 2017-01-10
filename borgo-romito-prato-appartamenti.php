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
            Gli edifici del <strong class="red">Complesso Residenziale BorgoRomito</strong> sono dotati dei più moderni sistemi di contenimento dei consumi energetici, e gli appartamenti sono certificati con Attestato di Prestazione Energetica (APE) in Classe A.
          </p>
          <p class="intro">
            Le dotazioni comprendono caldaie a condensazione centralizzate con contabilizzazione e regolazione personalizzata dei consumi termici, acqua calda centralizzata integrata con tecnologia solare, infissi ad elevato isolamento termoacustico e rivestimento a cappotto delle pareti esterne.
            Gli impianti elettrici sono predisposti per l'installazione di sistemi domotici.
          </p>
          <p class="intro">
            La suddivisione delle unità immobiliari residenziali in tagli differenziati viene incontro a qualsiasi esigenza dell’abitare contemporaneo: tutti gli appartamenti sono dotati di balconi o logge abitabili, accessori e predisposizioni qualificanti.
          </p>
          <p class="intro">
            Ai piani interrati degli edifici sono disponibili cantine e box auto.
          </p>
          <p class="intro-istruzioni" style="display:none">
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
