//Mobile Menu
$(".header__burger").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("active");
    $('.header__menu').toggleClass('active');
    $('.header__menu').addClass('anim--active');
    $("body").toggleClass("noscroll");
});