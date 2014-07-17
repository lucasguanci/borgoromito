<?php
/**
 * Galleria immagini
 */
?>
    <!-- modal Galleria fotografica -->
    <div class="modal fade" id="modal-galleria-fotografica" tabindex="-1" role="dialog" aria-labelledby="label-modal-galleria-fotografica" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title" id="label-modal-galleria-fotografica giugno-5">
              <span class="giugno-5">Galleria fotografica</span>
            </h4>
          </div>
          <div class="modal-body modal-itinerario">
            <!-- carousel 5 giugno -->
            <div id="carousel-galleria-fotografica" class="carousel slide" data-ride="carousel">
              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item active">
                  <img src="" alt="">
                </div>
                <div class="item">
                <img src="" alt="">
                </div>
              </div>                  
              <!-- Controls -->
              <a class="left carousel-control" href="#carousel-galleria-fotografica" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
              </a>
              <a class="right carousel-control" href="#carousel-galleria-fotografica" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
              </a>
            </div>
            <p class="caption"></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Chiudi</button>
          </div>
        </div>
      </div>
    </div>
    <!-- /modal Galleria fotografica -->
    <!-- templates -->
    <script type="text/template" id="carousel-item">
      <div class="item">
        <img src="<%= img.src %>" alt="<%= img.alt %>">
        <div class="carousel-caption">
          <!-- <%= img.caption %> -->
        </div>
      </div>
    </script>
    <!-- /templates -->
