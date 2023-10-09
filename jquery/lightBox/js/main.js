$(document).ready(function () {
    $('.main img').click(function () {
        var c = $(this).attr('src');
        $('.imgmain').attr('src', c);
        $('.fade').fadeIn('800');
        $('.imgmain').fadeIn('1000');

    });
});