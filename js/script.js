$(function() { 
    $(".p-header__right__burger-btn").on("click", function() {
        $(".p-header__right__nav").toggleClass("menu-open");
        $(".p-header__right__burger-btn").toggleClass("menu-open");
    });
});


$(function(){
    $(window).scroll(function (){
        $('.u-fadein').each(function(){
            let targetElement = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
