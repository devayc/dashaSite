$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(document).ready(function(){
    $(document).on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        const id = $(this).attr('href');
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        const top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1100);
    });
    // $("#menu2").on("click","a", function (event) {
    //     //отменяем стандартную обработку нажатия по ссылке
    //     event.preventDefault();
    //     //забираем идентификатор бока с атрибута href
    //     const id = $(this).attr('href');
    //     //узнаем высоту от начала страницы до блока на который ссылается якорь
    //     const top = $(id).offset().top;
    //     //анимируем переход на расстояние - top за 1500 мс
    //     $('body,html').animate({scrollTop: top}, 900);
    // });

});

$(".service-btn").click(event => {
    console.log(event)
    event.preventDefault()
    $('.fixed-overlay__modal').fadeIn()
})

$('.fixed-overlay').click((e) => {
    const modalOverlay = document.querySelector('.fixed-overlay')
    console.log(modalOverlay)
    if (e.target === modalOverlay){
        $('.fixed-overlay__modal').fadeOut()
    }
})
$('.close-modal').click(() => {
    $('.fixed-overlay__modal').fadeOut()
       
})