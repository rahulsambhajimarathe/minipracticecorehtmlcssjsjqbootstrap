$(document).ready(function() {
    $('.container img').on({
        mouseover: function() {
            $(this).css({
                'cursor': 'pointer',
                'border': 'red solid 2px',
            });

        },
        mouseout: function() {
            $(this).css({
                'cursor': 'default',
                'border': 'gray solid 2px',
            });
        },
        click: function() {
            var imageurl = $(this).attr('src');
            $(".mainIamage").fadeOut(300, function() {
                $("#mainImage").attr('src', imageurl);
            }).fadeIn(300);
        }
    });
});