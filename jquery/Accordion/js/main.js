$(document).ready(function() {
    $(".itrem-header").click(function() {
        $(".accodion-item").removeClass("active");
        $(this).parent().addClass("active");
        $(".icon").text("-");
        $(this).children(".icon").text("-");;
    });
});