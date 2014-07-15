var app = app || {};

app.Data = app.Data || {};
app.Data.Carousel = {"A": [{"alt":"Edificio A","caption":"Edificio A","src":"images/slides-A-01.jpg"},{"alt":"Edificio A","caption":"Edificio A","src":"images/slides-A-02.jpg"},{"alt":"Edificio A","caption":"Edificio A","src":"images/slides-A-03.jpg"}],"C": [{"alt":"Edificio C","caption":"Edificio C","src":"images/slides-C-01.jpg"},{"alt":"Edificio C","caption":"Edificio C","src":"images/slides-C-02.jpg"},{"alt":"Edificio C","caption":"Edificio C","src":"images/slides-C-03.jpg"}]};

app.Fn = {
  initGallery: function() {
    console.log("init gallery");
    if ( $("a.galleria-immagini").length>0 ) {
      $("a.galleria-immagini").on('click', function(e) {
        e.preventDefault();
        var e = $(e.target).attr('data-edificio');
        app.Fn.showGallery(e);
        return false;
      });      
    }
  },
  showGallery: function(edificio) {
    console.log(edificio);
    if ( edificio=="all") {
      var data = app.Data.Carousel["A"].concat(app.Data.Carousel["C"]);
      var carousel = {
        "data": data,
        "caption": "p.caption"
      }
    } else {
      var carousel = {
        "data": app.Data.Carousel[edificio],
        "caption": "p.caption"
      }      
    }
    // create modal
    // create carousel(edificio)
    // show gallery
    var template = _.template( $("#carousel-item").html() );
    var container = "#carousel-galleria-fotografica div.carousel-inner";
    $(container).empty();
    for ( i=0; i<carousel.data.length; i++ ) {
      var item = template({img: carousel.data[i]});
      $(container).append(item);
      if ( i==0 ) {
        $(container).find("div.item").addClass("active");
      }
    }
    // var caption = $('div.item:nth-child(1) .carousel-caption');
    // $(carousel.caption).html(caption.html());
    // caption.css('display','none');
    // $(carousel.id).on('slide.bs.carousel', function(evt) {
    //    var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .carousel-caption');
    //    $(carousel.caption).html(caption.html());
    //    caption.css('display','none');
    // });
    $("#modal-galleria-fotografica").modal('show');
    // start carousel
    $("#carousel-galleria-fotografica").carousel({
      interval: 2000
    });
  }
};

(function($){
  app.Fn.initGallery();
})(jQuery)
