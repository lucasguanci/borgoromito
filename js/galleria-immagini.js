var app = app || {};

app.Data = app.Data || {};
app.Data.Carousel = {"A": [{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio A","caption":"Complesso residenziale BorgoRomito, Prato - Edificio A","src":"images/borgo-romito-prato-appartamenti-01-A-E1.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio A","caption":"Complesso residenziale BorgoRomito, Prato - Edificio A","src":"images/borgo-romito-prato-appartamenti-02-A-E2.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio A","caption":"Complesso residenziale BorgoRomito, Prato - Edificio A","src":"images/borgo-romito-prato-appartamenti-03-A-E3.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio A","caption":"Complesso residenziale BorgoRomito, Prato - Edificio A","src":"images/borgo-romito-prato-appartamenti-04-A001.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio A","caption":"Complesso residenziale BorgoRomito, Prato - Edificio A","src":"images/borgo-romito-prato-appartamenti-05-A002.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio A","caption":"Complesso residenziale BorgoRomito, Prato - Edificio A","src":"images/borgo-romito-prato-appartamenti-06-A003.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio A","caption":"Complesso residenziale BorgoRomito, Prato - Edificio A","src":"images/borgo-romito-prato-appartamenti-07-A003B.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio A","caption":"Complesso residenziale BorgoRomito, Prato - Edificio A","src":"images/borgo-romito-prato-appartamenti-08-A004.jpg"}], "C": [{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio C","caption":"Complesso residenziale BorgoRomito, Prato - Edificio C","src":"images/borgo-romito-prato-appartamenti-09-C-E1.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio C","caption":"Complesso residenziale BorgoRomito, Prato - Edificio C","src":"images/borgo-romito-prato-appartamenti-10-C-E2.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio C","caption":"Complesso residenziale BorgoRomito, Prato - Edificio C","src":"images/borgo-romito-prato-appartamenti-11-C-E3.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio C","caption":"Complesso residenziale BorgoRomito, Prato - Edificio C","src":"images/borgo-romito-prato-appartamenti-12-C001.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio C","caption":"Complesso residenziale BorgoRomito, Prato - Edificio C","src":"images/borgo-romito-prato-appartamenti-13-C002.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio C","caption":"Complesso residenziale BorgoRomito, Prato - Edificio C","src":"images/borgo-romito-prato-appartamenti-14-C003.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio C","caption":"Complesso residenziale BorgoRomito, Prato - Edificio C","src":"images/borgo-romito-prato-appartamenti-15-C004.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio C","caption":"Complesso residenziale BorgoRomito, Prato - Edificio C","src":"images/borgo-romito-prato-appartamenti-16-C005.jpg"}], "D":[{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio D","caption":"Complesso residenziale BorgoRomito, Prato - Edificio D","src":"images/borgo-romito-prato-appartamenti-17-D-E1.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio D","caption":"Complesso residenziale BorgoRomito, Prato - Edificio D","src":"images/borgo-romito-prato-appartamenti-18-D-E2.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio D","caption":"Complesso residenziale BorgoRomito, Prato - Edificio D","src":"images/borgo-romito-prato-appartamenti-19-D-E3.jpg"},{"alt":"Complesso residenziale BorgoRomito, Prato - Edificio D","caption":"Complesso residenziale BorgoRomito, Prato - Edificio D","src":"images/borgo-romito-prato-appartamenti-20-D-E4.jpg"}]};

app.Fn = {
  initGallery: function() {
    console.log("init gallery");
    $('#modal-galleria-fotografica').on('hidden', function(){
        $(this).data('modal', null);
    });
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
      var data = app.Data.Carousel["A"].concat(app.Data.Carousel["C"].concat(app.Data.Carousel["D"]));
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
