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
        </div>
      </div>
    </div>
    <!-- /Risultati ricerca -->
    <div id="modals-container">
      <!-- tpl-modals -->
      <!-- modals appartamenti -->
      <div class="modal fade" id="ed-A-A1-T2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">
                Scheda appartamento ed-A-A1-T2
              </h4>
            </div>
            <div class="modal-body">
              <p class="edificio">
                Edificio A - piano 1
              </p>
              <img src="images/planimetria-ed-A-A1-T2.png">
              <p class="superficie">
                sup. LORDA: 65 mq.<br>
                sup. logge e balconi: 8 mq.<br>
                sup. CONVENZIONALE: 67 mq.
              </p>
              <p class="camere">
                1 camera doppia
              </p>
              <p class="bagno">
                1 bagno con vasca
              </p>
              <button type="button" class="btn btn-default" data-dismiss="modal">Chiudi</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="ed-A-A1-T1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">
                Scheda appartamento ed-A-A1-T1
              </h4>
            </div>
            <div class="modal-body">
              <p class="edificio">
                Edificio A - piano 1
              </p>
              <img src="images/planimetria-ed-A-A1-T1.png">
              <p class="superficie">
                sup. LORDA: 97 mq.<br>
                sup. logge e balconi: 9 mq.<br>
                sup. CONVENZIONALE: 99 mq.
              </p>
              <p class="camere">
                2 camere doppie
              </p>
              <p class="bagno">
                1 bagno con vasca<br>
                1 bagno con doccia
              </p>
              <button type="button" class="btn btn-default" data-dismiss="modal">Chiudi</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="ed-A-A1-T3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">
                Scheda appartamento ed-A-A1-T3
              </h4>
            </div>
            <div class="modal-body">
              <p class="edificio">
                Edificio A - piano 1
              </p>
              <img src="images/planimetria-ed-A-A1-T3.png">
              <p class="superficie">
                sup. LORDA: 65 mq.<br>
                sup. logge e balconi: 8 mq.<br>
                sup. CONVENZIONALE: 67 mq.
              </p>
              <p class="camere">
                1 camera doppia<br>
                1 camera singola
              </p>
              <p class="bagno">
                1 bagno con doccia
              </p>
              <button type="button" class="btn btn-default" data-dismiss="modal">Chiudi</button>
            </div>
          </div>
        </div>
      </div>
      <!-- /modals-appartamenti -->
    </div>
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
  <?php include_once 'inc/templates.php'; ?>
  <?php include_once 'inc/templates-appartamenti.php'; ?>
  <!-- /templates -->
  <!-- scripts -->
  <?php include_once 'inc/scripts.php'; ?>
  <?php include_once 'inc/scripts-appartamenti.php'; ?>
  <!-- /scripts -->
</body>
</html>
