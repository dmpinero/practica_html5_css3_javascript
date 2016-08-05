$(document).ready(function() {    

    /* Sticky navigation */
    $('.js--section-quien-soy').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
            //console.log('Añado clase...');
        } else {
            $('nav').removeClass('sticky');
            //console.log('Quito clase...');
        }
    }, {
      offset: '60px;'
    });
    
    /* Smooth Navigation */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');          
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1300);
            return false;
          }
        }
      });
    });
    
    /* Sticky navigation. Quién soy */
    $('.quien-soy').waypoint(function(direction) {
        if (direction == "down") {
            $('#quien-soy_id').addClass('sticky_id');                        
        } else {            
            $('#quien-soy_id').removeClass('sticky_id');
        }
    }, {
      offset: '60px;'
    });

    /* Sticky navigation. Estudios profesionales */
    $('.estudios-y-certificaciones').waypoint(function(direction) {
        if (direction == "down") {
            $('#estudios_id').addClass('sticky_id');
            $('#quien-soy_id').removeClass('sticky_id');
        } else {            
            $('#estudios_id').removeClass('sticky_id');
            $('#quien-soy_id').addClass('sticky_id');
        }
    }, {
      offset: '60px;'
    });

    /* Sticky navigation. Experiencia profesional */
    $('.experiencia-profesional').waypoint(function(direction) {
        if (direction == "down") {
            $('#experiencia-profesional_id').addClass('sticky_id');
            $('#estudios_id').removeClass('sticky_id');
        } else {            
            $('#experiencia-profesional_id').removeClass('sticky_id');
            $('#estudios_id').addClass('sticky_id');
        }
    }, {
      offset: '60px;'
    });

    /* Sticky navigation. Conocimientos */
    $('.conocimientos').waypoint(function(direction) {
        if (direction == "down") {
            $('#conocimientos_id').addClass('sticky_id');
            $('#experiencia-profesional_id').removeClass('sticky_id');
        } else {            
            $('#conocimientos_id').removeClass('sticky_id');
            $('#experiencia-profesional_id').addClass('sticky_id');
        }
    }, {
      offset: '60px;'
    });

    /* Sticky navigation. Sobre mí */
    $('.sobre-mi').waypoint(function(direction) {
        if (direction == "down") {
            $('#sobre-mi_id').addClass('sticky_id');
            $('#conocimientos_id').removeClass('sticky_id');
        } else {                        
            $('#sobre-mi_id').removeClass('sticky_id');
            $('#conocimientos_id').addClass('sticky_id');
        }
    }, {
      offset: '60px;'
    });

    /* Sticky navigation. Contacto */
    $('.contacto').waypoint(function(direction) {
        if (direction == "down") {
            $('#contacto_id').addClass('sticky_id');
            $('#sobre-mi_id').removeClass('sticky_id');   
        } else {                        
            $('#contacto_id').removeClass('sticky_id');
        }
    }, {
      offset: '60px;'
    });    
});