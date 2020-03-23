import $ from 'jquery';
import 'owl.carousel';
import counterUp from 'counterup2';
import 'waypoints/lib/noframework.waypoints';

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        animateOut: 'fadeOut',
    });

    new Waypoint( {
        element: document.querySelector( '.digs-section' ),
        handler: function() {
            $('.counter').each((i, elem) => {
                counterUp(elem, {
                    duration: 800 * (i + 1),
                    delay: 16,
                });
            })

            this.destroy()
        },
        offset: 'bottom-in-view',
    } )

});
