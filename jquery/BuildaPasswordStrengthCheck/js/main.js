$(document).ready(function () {
    $(() =>{
        var number = /([0-9])/;
        var alphabet = /([a-zA-Z])/;
        var specail = /([~,!,@,#,$,%,^,&,*,-.+,=,?,<,>])/;
        $('input').keyup(()=>{
            var countext = $('input').val().length;
            console.log(countext);

            if(countext > 0 && countext < 20){
                $('.span1').addClass('low');
                $("p").html('your password is so week ');
            }else{
                $('span').removeClass('low');
                $('p').removeClass('low');
                // $("p").html('');
            }

            if($('input').val().match(alphabet) && $('input').val().match(number)){
                $(".span2").addClass('medium');
                $("p").html('your password is so medium');
                // console.log("helo")
            }else{
                // $("p").html('');
                $("p").removeClass('medium');
                // $('span').removeClass('medium');
            }

            if($('input').val().match(alphabet) && $('input').val().match(number) && $('input').val().match(specail)){
                $(".span3").addClass('strong');
                $("p").html('your password is so very strong ');
            }else{
                $("p").removeClass('strong');
                // $("p").html('');
            }

        })
    })
});