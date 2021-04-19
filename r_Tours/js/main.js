const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    540 : {
        items:2
    },
    950 : {
        items:3
    }
}

$(document).ready(function(){

    $nav=$('.nav');
    $togglecollapse=$('.toggle-collapse');

    $togglecollapse.click(function(){

        $nav.toggleClass('collapse');

    });

    //owl carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 5000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });

});