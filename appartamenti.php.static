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
            <img src="images/cpmplesso-residenziale-borgo-romito-piano-volumetrico.png" alt="Piano volumetrico Complesso residenziale BorgoRomito, Prato" />
          </div>          
          <p class="intro">
            Breve introduzione al complesso residenziale
            4 edifici, edifico A ..., edificio B ..., etc.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
          </p>
          <p class="intro">Disponibili anche garage e fondi commerciali</p>          
        </div>
      </div>
      <!-- /Intro appartamenti -->
      <!-- Ricerca appartamenti -->
      <div class="row content">
        <!-- Ricerca per edificio -->
        <div class="col-md-4 appartamenti ricerca edificio">
          <h2>Ricerca per Edificio</h2>
          <form role="form" id="form-ricerca-edificio" class="form-ricerca edificio">
            <div class="radio">
              <label>
                <input type="radio" name="edificio" id="edificio-A" value="edificio-A" checked>
                Edificio A
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="edificio" id="edificio-B" value="edificio-B" disabled>
                Edificio B
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="edificio" id="edificio-C" value="edificio-C">
                Edificio C
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="edificio" id="edificio-D" value="edificio-D" disabled>
                Edificio D
              </label>
            </div>
            <button type="submit" class="btn btn-default">Prosegui</button>
          </form>
        </div>
        <!-- /Ricerca per edificio -->
        <!-- Ricerca per tipologia -->
        <div class="col-md-4 appartamenti ricerca tipologia">
          <h2>Ricerca per Tipologia</h2>
          <form role="form" id="form-ricerca-tipologia" class="form-ricerca tipologia">
            <div class="radio">
              <label>
                <input type="radio" name="tipologia" id="T1" value="T1">
                1 camera
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="tipologia" id="T2" value="T2" checked>
                2 camere
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="tipologia" id="T3" value="T3">
                3 camere
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="tipologia" id="T4" value="T4">
                Attico
              </label>
            </div>
            <button type="submit" class="btn btn-default">Prosegui</button>
          </form>
        </div>
        <!-- /Ricerca per tipologia -->
        <!-- Ricerca per appartamento -->
        <div class="col-md-4 appartamenti ricerca appartamento">
          <h2>Ricerca diretta</h2>
          <form role="form" id="form-ricerca-appartamento" class="form-ricerca appartamento">
            <div class="form-group">
              <label for="id-appartamento">Identificativo appartamento</label>
              <input type="text" class="form-control" id="id-appartamento" placeholder="ed.C-CT-T2sx">
            </div>
            <button type="submit" class="btn btn-default">Prosegui</button>
          </form>
        </div>
        <!-- /Ricerca per appartamento -->
      </div>
      <!-- /Ricerca appartamenti -->
      <!-- Risultati ricerca -->
      <div class="row content">
        <!-- risultati ricerca per edificio -->
        <div id="risultati-edificio" class="col-md-12 appartamenti risultati-ricerca-1">
          <h2>Risultati ricerca per edificio</h2>
          <h3>Edificio A</h3>
          <p class="descrizione">
            <img src="images/edificio.png">
            lorem ipsum
          </p>
          <form id="form-edificio-seleziona-piano" class="form-inline" role="form">
            <select class="form-control">
              <option>Piano 1</option>
              <option>Piano 2</option>
              <option>Piano 3</option>
              <option>Piano 4</option>
              <option>Piano 5</option>
            </select>
            <button type="submit" class="btn btn-default">Prosegui</button>
          </form>
          <!-- risultati ricerca per edificio, mostra piano -->
          <div id="risultati-edificio-piano" class="risultati-ricerca-2">
            <h3>Edificio A - piano 1</h3>
            <p class="intro">
              Per visualizzare la descrizione di un appartamento, cliccare sulla pianta sull'appartamento desiderato.
            </p>
            <img src="images/map-edA-p1.png" width="940" height="350" usemap="#map-edA-p1" alt="">
            <map name="map-edA-p1">
              <area shape="poly" alt="" coords="741,162, 741,129, 867,129, 867,152, 846,152, 846,212, 723,212, 723,162, 741,162" href="#edA-C1-T1-02-dw" data-toggle="modal" data-target="#modal-appartamento">
              <area shape="poly" alt="" coords="698,47, 772,47, 846,47, 846,107, 867,107, 867,129, 741,129, 741,142, 710,142, 710,113, 698,113, 698,47" href="#edA-C1-T1-01-up">
              <area shape="poly" alt="" coords="72,167, 81,167, 81,113, 165,113, 165,142, 167,142, 167,222, 72,222, 72,167" href="#edA-A1-T1-01-sx">
              <area shape="poly" alt="" coords="72,222, 72,278, 81,278, 81,331, 163,331, 245,331, 245,208, 167,208, 167,222, 72,222" href="#edA-A1-T2-01-sx">
              <area shape="poly" alt="" coords="564,47, 698,47, 698,113, 686,113, 686,142, 673,142, 673,212, 620,212, 620,220, 564,220, 564,134, 564,47" href="#edA-C1-T2-01-sx">
              <area shape="poly" alt="" coords="431,47, 564,47, 564,134, 564,220, 509,220, 509,212, 455,212, 455,142, 443,142, 443,113, 431,113, 431,47" href="#edA-B1-T2-02-dx">
              <area shape="poly" alt="" coords="297,47, 431,47, 431,113, 418,113, 418,142, 406,142, 406,212, 352,212, 352,220, 297,220, 297,134, 297,47" href="#edA-B1-T2-01-sx">
              <area shape="poly" alt="" coords="190,142, 190,47, 297,47, 297,134, 297,220, 245,220, 245,142, 190,142" href="#edA-A1-T2-02-dx">
            </map>
<!--             <a id="prenota" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal-appartamento"></a>            
 -->
            <div class="modal fade" id="modal-appartamento" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">
                      Scheda appartamento xyz
                    </h4>
                  </div>
                  <div class="modal-body">
                    <p>
                      Lorem ipsum..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /risultati ricerca per edificio, mostra piano -->
        </div>
        <!-- /risultati ricerca per edificio -->
        <!-- risultati ricerca per tipologia -->
        <div id="risultati-tipologia" class="col-md-12 appartamenti risultati-ricerca">
          risultati ricerca per tipologia
        </div>
        <!-- /risultati ricerca per tipologia -->
        <!-- risultati ricerca per diretta -->
        <div id="risultati-diretta" class="col-md-12 appartamenti risultati-ricerca">
          risultati ricerca diretta
        </div>
        <!-- /risultati ricerca per diretta -->
      <!-- /Risultati ricerca -->

    </div>
    <!-- /appartamenti -->
    <!-- news -->
    <div class="container">
      <div id="news-wrapper" class="row content news">
        <!-- col.1 -->
        <div class="col-md-3 news">
          <h2>BorgoRomito</h2>
          <a class="link-img" href="#">
            <img src="images/placeholder-news-220.png" />
          </a>
          <p class="cnt">
            Lorem ipsum dolor sit amet, ei eros consulatu efficiendi vel, vel autem graeco interpretaris te. Vidit vivendum facilisi in has, ex torquatos democritum pri, gubergren similique nec eu. Ut sed omnes tincidunt concludaturque, labores inciderint delicatissimi sea ea. Et apeirian inciderint vis. Per elaboraret signiferumque ea.
          </p>
        </div>
        <!-- col.1 -->
        <div class="col-md-3 news">
          <h2>Il progetto</h2>
          <a class="link-img" href="#">
            <img src="images/placeholder-news-220.png" />
          </a>
          <p class="cnt">
            Lorem ipsum dolor sit amet, ei eros consulatu efficiendi vel, vel autem graeco interpretaris te. Vidit vivendum facilisi in has, ex torquatos democritum pri, gubergren similique nec eu. Ut sed omnes tincidunt concludaturque, labores inciderint delicatissimi sea ea. Et apeirian inciderint vis. Per elaboraret signiferumque ea.
          </p>
        </div>
        <!-- col.3 -->
        <div class="col-md-3 news">
          <h2>Gli appartamenti</h2>
          <a class="link-img" href="#">
            <img src="images/placeholder-news-220.png" />
          </a>
          <p class="cnt">
            Lorem ipsum dolor sit amet, ei eros consulatu efficiendi vel, vel autem graeco interpretaris te. Vidit vivendum facilisi in has, ex torquatos democritum pri, gubergren similique nec eu. Ut sed omnes tincidunt concludaturque, labores inciderint delicatissimi sea ea. Et apeirian inciderint vis. Per elaboraret signiferumque ea.
          </p>
        </div>
        <!-- col.4 -->
        <div class="col-md-3 news">
          <h2>Mutuo agevolato</h2>
          <a class="link-img" href="#">
            <img src="images/placeholder-news-220.png" />
          </a>
          <p class="cnt">
            Lorem ipsum dolor sit amet, ei eros consulatu efficiendi vel, vel autem graeco interpretaris te. Vidit vivendum facilisi in has, ex torquatos democritum pri, gubergren similique nec eu. Ut sed omnes tincidunt concludaturque, labores inciderint delicatissimi sea ea. Et apeirian inciderint vis. Per elaboraret signiferumque ea.
          </p>
        </div>
       </div>
    </div>
    <!-- /news -->
  </section>
  <!-- /content -->    
  <!-- footer -->
  <footer>
    <?php include_once 'inc/footer.php'; ?>  
  </footer>
  <!-- /footer -->
  <!-- templates -->
  <?php include_once 'inc/templates.php'; ?>
  <!-- /templates -->
  <!-- scripts -->
  <?php include_once 'inc/scripts.php'; ?>
  <!-- /scripts -->
</body>
</html>
