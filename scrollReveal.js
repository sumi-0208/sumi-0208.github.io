 $(function(){
            ScrollReveal().reveal('.animate');
            ScrollReveal().reveal('.animateright', { distance: '200px', origin: 'right', viewFactor: '0.8' });
            ScrollReveal().reveal('.animateleft', { distance: '200px', origin: 'left', viewFactor: '0.8' });
            ScrollReveal().reveal('.animateslow', { duration: '3000', reset: 'true'});
            ScrollReveal().reveal('.animatespeed1', { duration: '1800' } );
            ScrollReveal().reveal('.animatespeed2', { duration: '1800' ,delay: '500'} );
            ScrollReveal().reveal('.animatespeed3', { duration: '1800' ,delay: '1000'} );
        });
