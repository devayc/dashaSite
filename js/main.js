$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    // nav:true,
    responsive:{
        0:{
            items: 1,
            width: 100
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(document).ready(function () {
    $('[data-target]').click((function (event) {
        event.preventDefault()
        const id = $(this).attr('href')
        console.log($(this))
        const top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1100);
    }))

    $("[data-modal]").click(event => {
        console.log(event)
        event.preventDefault()
        $('.fixed-overlay__modal').fadeIn()
    })
    $('.fixed-overlay').click((e) => {
        const modalOverlay = document.querySelector('.fixed-overlay')
        console.log(modalOverlay)
        if (e.target === modalOverlay) {
            $('.fixed-overlay__modal').fadeOut()
        }
    })
    $('.close-modal').click(() => {
        $('.fixed-overlay__modal').fadeOut()
       
    })
    $('.humburger-container').click(() => {
        console.log($('.humburger-container'))
        if ($('.mob-menu').hasClass('mob-menu-out')) {
            OpenMenu()
        } else {
            CloseMenu()
        }
    })
    $('.nav-mob-menu__link').click(() => {
        CloseMenu()
    })
    function OpenMenu() {
        $('.mob-menu').removeClass('mob-menu-out')
        $("#top").addClass('top')
        $("#bottom").addClass('bottom')
        $("#middle").addClass('middle')
        $('.bar').addClass('bar2')
    }
    function CloseMenu() {
        $('.mob-menu').addClass('mob-menu-out')
        $("#top").removeClass('top')
        $("#bottom").removeClass('bottom')
        $("#middle").removeClass('middle')
        $('.bar').removeClass('bar2')
    }
    // $('#more').click(() => {
    //     if ($('.gallary-items').find('.close-sm')) {
    //         let small= $('.gallary-items').find('.close-sm')
    //         $(small).removeClass('close-sm')
    //         console.log('')
    //     } else {
    //         console.log('da')
    //        let big = $('.gallary-items').find('.close-lg')
    //             big.removeClass('close-lg')
    //     }
    // })
    $('#more').click(() => {
        const gallary = $('.gallary-item')
        gallary.each((e) => {
            console.log(gallary[e])
            if ($(gallary[e]).hasClass('close-sm')) {
                $(gallary[e]).removeClass('close-sm')
               return false
            } else if($(gallary[e]).hasClass('close-lg')){
               $(gallary[e]).removeClass('close-lg')
                $('#more').attr('disabled','disabled');
            }
        }) 
    })
});




