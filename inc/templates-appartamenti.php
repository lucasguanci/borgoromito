<script type="text/template" id="tpl-ricerca">
  <!-- Ricerca per edificio -->
  <div class="col-md-4 appartamenti ricerca edificio first">
    <h2>Ricerca per Edificio</h2>
    <form role="form" id="form-ricerca-edificio" class="form-ricerca edificio">
      <div class="radio">
        <label>
          <input type="radio" name="edificio" id="edificio-A" value="A" checked>
          Edificio A
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="edificio" id="edificio-B" value="B" disabled>
          Edificio B
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="edificio" id="edificio-C" value="C">
          Edificio C
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="edificio" id="edificio-D" value="D" disabled>
          Edificio D
        </label>
      </div>
      <button id="btn-ricerca-edificio" type="submit" class="btn btn-default">Prosegui</button>
    </form>
  </div>
  <!-- /Ricerca per edificio -->
  <!-- Ricerca per tipologia -->
  <div class="col-md-4 appartamenti ricerca tipologia">
    <h2>Ricerca per Tipologia</h2>
    <form role="form" id="form-ricerca-tipologia" class="form-ricerca tipologia">
      <div class="radio">
        <label>
          <input type="radio" name="tipologia" id="1C" value="1C">
          1 camera
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="tipologia" id="2C" value="2C" checked>
          2 camere
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="tipologia" id="3C" value="3C">
          3 camere
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="tipologia" id="attico" value="attico">
          Attico
        </label>
      </div>
      <button id="btn-ricerca-tipologia" type="submit" class="btn btn-default">Prosegui</button>
    </form>
  </div>
  <!-- /Ricerca per tipologia -->
  <!-- Ricerca per appartamento -->
  <div class="col-md-4 appartamenti ricerca appartamento last">
    <h2>Ricerca diretta</h2>
    <form role="form" id="form-ricerca-appartamento" class="form-ricerca appartamento">
      <div class="form-group">
        <label for="id-appartamento">Identificativo appartamento</label>
        <input type="text" class="form-control" id="id-appartamento" placeholder="ed.C-CT-T2sx">
      </div>
      <button id="btn-ricerca-appartamento" type="submit" class="btn btn-default">Prosegui</button>
    </form>
  </div>
  <!-- /Ricerca per appartamento -->
</script>

<script id="tpl-risultati-ricerca-edificio" type="text/template">
  <h2>Risultati ricerca per edificio</h2>
  <h3><%= edificio.nome %></h3>
  <p class="descrizione">
    <img class="edificio" src="<%= edificio.img.src %>" alt="<%= edificio.img.caption %>">
    <%= edificio.descrizione %>
  </p>
  <h3 class="istruzioni clear"><i class="fa fa-angle-double-right"></i> Selezionare un piano dell&#39;edificio</h3>
  <form id="form-edificio-seleziona-piano" class="form-inline clear" role="form">
    <select id="select-seleziona-piano" class="form-control">
      <% for ( i=0; i<edificio.piani.length; i++ ) { %> 
        <option value="<%= i %>"><%= edificio.piani[i].piano %></option>  
      <% } %>
    </select>
    <button id="btn-seleziona-piano" type="submit" class="btn btn-default">Prosegui</button>
  </form>
  <!-- risultati ricerca per edificio, mostra piano -->
  <div id="risultati-edificio-piano" class="risultati-ricerca-2">
    <!-- #tpl-risultati-edificio-piano -->
  </div>  
</script>

<script id="tpl-risultati-edificio-piano" type="text/template">
  <h3><%= edificio.nome %> - <%= edificio.piani[piano].piano %></h3>
  <p class="intro">
    Per visualizzare la descrizione di un appartamento, cliccare sulla pianta sull appartamento desiderato.
  </p>
  <div class="img-piano">
    <img src="<%= edificio.piani[piano].img %>" width="500" height="200" usemap="<%= edificio.piani[piano].map %>" alt="">
    <img class="legenda" src="images/edificio-legenda.png">
  </div>
  <!-- edificio-A piano-1 -->
  <map name="edificio-A-piano-1">
  <area shape="poly" alt="" coords="418,84, 418,63, 496,63, 496,77, 484,77, 484,114, 407,114, 407,84, 418,84" data-toggle="modal" data-target="#ed-A-C1-T11" href="#tpl-risultati-ricerca-edificio-container">
  <area shape="poly" alt="" coords="392,12, 484,12, 484,49, 496,49, 496,63, 418,63, 418,71, 399,71, 399,53, 392,53, 392,12" data-toggle="modal" data-target="#ed-A-C1-T10" href="#tpl-risultati-ricerca-edificio-container">
  <area shape="poly" alt="" coords="4,86, 9,86, 9,53, 61,53, 61,71, 63,71, 63,121, 4,121, 4,86" href="#tpl-risultati-ricerca-edificio-container" data-toggle="modal" data-target="#ed-A-A1-T2">
  <area shape="poly" alt="" coords="4,121, 4,155, 9,155, 9,188, 111,188, 111,112, 63,112, 63,121, 4,121" data-toggle="modal" data-target="#ed-A-A1-T1" href="#tpl-risultati-ricerca-edificio-container">
  <area shape="poly" alt="" coords="309,12, 392,12, 392,53, 384,53, 384,71, 376,71, 376,114, 343,114, 343,120, 309,120, 309,12" data-toggle="modal" data-target="#ed-A-C1-T4sx" href="#tpl-risultati-ricerca-edificio-container">
  <area shape="poly" alt="" coords="226,12, 309,12, 309,120, 274,120, 274,114, 241,114, 241,71, 234,71, 234,53, 226,53, 226,12" data-toggle="modal" data-target="#ed-A-B1-T4-1dx" href="#tpl-risultati-ricerca-edificio-container">
  <area shape="poly" alt="" coords="143,12, 226,12, 226,53, 218,53, 218,71, 211,71, 211,114, 177,114, 177,120, 143,120, 143,12" data-toggle="modal" data-target="#ed-A-B1-T4-1sx" href="#tpl-risultati-ricerca-edificio-container">
  <area shape="poly" alt="" coords="77,71, 77,12, 143,12, 143,120, 111,120, 111,71, 77,71" href="#tpl-risultati-ricerca-edificio-container" data-toggle="modal" data-target="#ed-A-A1-T3">
  </map>
  <!-- edificio-A piano-4 -->
  <map name="edificio-A-piano-4">
  <area shape="poly" alt="" coords="418,86, 418,65, 496,65, 496,79, 483,79, 483,116, 407,116, 407,86, 418,86" href="ed.A-C4-T11">
  <area shape="poly" alt="" coords="374,14, 483,14, 483,51, 496,51, 496,65, 418,65, 418,73, 399,73, 399,55, 374,55, 374,14" href="ed.A-C4-T10">
  <area shape="poly" alt="" coords="309,14, 374,14, 374,55, 384,55, 384,73, 376,73, 376,116, 343,116, 343,121, 309,121, 309,14" href="ed.A-C4-T9">
  <area shape="poly" alt="" coords="226,14, 309,14, 309,121, 274,121, 274,116, 241,116, 241,73, 233,73, 233,55, 226,55, 226,14" href="ed.A-B4-T4.1dx">
  <area shape="poly" alt="" coords="143,14, 226,14, 226,55, 218,55, 218,73, 210,73, 210,116, 177,116, 177,121, 143,121, 143,14" href="ed.A-B4-T4.1sx">
  <area shape="poly" alt="" coords="76,114, 76,14, 143,14, 143,121, 111,121, 111,114, 76,114" href="ed.A-A4-T6">
  </map>
</script>

<script id="tpl-risultati-ricerca-tipologia" type="text/template">
  <div id="tpl-risultati-ricerca-tipologia-header">
    <h2>Risultati ricerca per tipologia</h2>
    <ul id="tpl-nav-tabs-container" class="nav nav-tabs" role="tablist">
      <% for (i=0; i<edifici.length; i++) { %> 
        <li <% if (i==0) print('class="active"'); %> >
          <a href="#tab-edificio-<%= edifici[i].toJSON().id %>" role="tab" data-toggle="tab"><%= edifici[i].toJSON().nome %> - <%= nres[i] %> risultati</a>
        </li>
      <% } %>    
    </ul>
    <div id="tpl-nav-tabs-content-container" class="tab-content">
      <!-- #tpl-nav-tabs-content -->
    </div>
  </div>          
</script>

<script id="tpl-nav-tabs-content" type="text/template">  
  <div class="tab-pane <% if (index==0) print('active') %>" id="tab-edificio-<%= edificio.id %>">    
    <p class="descrizione">
      <img class="edificio" src="<%= edificio.img.src %>" alt="<%= edificio.img.caption %>">
      <%= edificio.descrizione %>
    </p>
    <h3 class="istruzioni clear"><i class="fa fa-angle-double-right"></i> Selezionare un piano dell&#39;edificio</h3>
    <div id="piani-container-<%=edificio.id%>" class="piani-container"></div>
  </div>
</script>

<script id="tpl-risultati-ricerca-tipologia-piano" type="text/template">   
  <div class="header">
    <p>
      <span class="red">Piano <%= piano %></span> 
      <i class="fa fa-angle-double-right"></i> <%= apps.length %> risultati
    </p>
    <a data-toggle="collapse" data-target="#piano-<%= piano %>">visualizza</a>
  </div>
  <div id="piano-<%= piano %>" class="piano-container collapse clear">
    <% for (i=0;i<apps.length;i++) { %>
      <div class="piano">
        <h4>
          <a data-toggle="modal" data-target="#<%= apps[i].toJSON().nome %>"><%= apps[i].toJSON().nome %></a>
        </h4>
        <a class="link-img" data-toggle="modal" data-target="#<%= apps[i].toJSON().nome %>">
          <img src="<%= apps[i].toJSON().planimetria %>"/>
        </a>
        <button class="btn btn-default" data-toggle="modal" data-target="#<%= apps[i].toJSON().nome %>">visualizza</button>
      </div>
    <% } %>
  </div>
  <div class="clear"></div>
</script>

<script id="tpl-modal" type="text/template">
<!-- modal appartamenti -->
<div class="modal fade" id="<%= app.nome %>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">
          Scheda appartamento <%= app.nome %>
        </h4>
      </div>
      <div class="modal-body">
        <h5>Posizione</h5>
        <p class="edificio">
          Edificio <%= app.edificio %> - piano <%= app.piano %>
          <br>
          <a href="#">Visualizza galleria immagini Edificio <%= app.edificio %></a>
        </p>
        <img class="piano" src="">
        <img class="planimetria" src="<%= app.planimetria %>">
        <h5>Superficie</h5>
        <p class="superficie">
          sup. LORDA: <%= app.superficie.lorda %> mq.<br>
          sup. logge e balconi: <%= app.superficie.logge %> mq.<br>
          sup. CONVENZIONALE: <%= app.superficie.convenzionale %> mq.
        </p>
        <h5>Camere</h5>
        <p class="camere">
          <% for ( i=0; i<app.camere.length; i++ ) { %>
            <%= app.camere[i] %><br>
          <% } %>
        </p>
        <h5>Bagni</h5>
        <p class="bagno">
          <% for ( i=0; i<app.bagni.length; i++ ) { %>
            <%= app.bagni[i] %><br>
          <% } %>
        </p>
        <button type="button" class="btn btn-default" data-dismiss="modal">Chiudi</button>
        <a class="btn btn-default" href="#">Scarica PDF</a>
      </div>
    </div>
  </div>
</div>
<!-- /modal appartamenti -->
</script>

<script id="tpl-test" type="text/template">
  <button type="submit" class="btn btn-default test">Prosegui</button>
</script>