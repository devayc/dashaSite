$('.slide-two').owlCarousel({
    loop:true,
    margin: 20,
   
    // nav:true,
    responsive:{
        0:{
            items: 1,
            width: 100,
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('.slide-one').owlCarousel({
    loop:true,
    margin:20,
    // nav:true,
    responsive:{
        0:{
            items: 1,
            width: 100,
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
        $('body,html').animate({ scrollTop: top }, 1100);
    }))

    $("[data-modal]").click(event => {
        console.log(event)
        event.preventDefault()
        $('.fixed-overlay__modal').fadeIn()
    })
    $('.fixed-overlay').click((e) => {
        const modalOverlay = document.querySelector('.fixed-overlay')
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
    $('#more').click(() => {
        const gallary = $('.gallary-item')
        gallary.each((e) => {
            if($(gallary[e]).hasClass('close-lg')) {
                $(gallary[e]).removeClass('close-lg')
                console.log('net')
            }
            $('#more').attr('disabled','disabled');
        }) 
    })
    $(".modal-form").click(function () {
        event.stopPropagation ()
        console.log('ds')
  if (($('#personal').prop("checked") && $('#policy').prop("checked"))) {
      $(".form-button").removeAttr("disabled");
      console.log('dis')
  } else {
      $(".form-button").attr("disabled", "disabled");
      console.log('add')
  }
})
});

$('body').append('<div class="upbtn"></div>');
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('.upbtn').css({
            transform: 'scale(1)'
        });
        } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    $('.upbtn').css({
        transform: 'scale(0)'
    });
    return false;
});