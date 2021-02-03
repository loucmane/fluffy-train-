$(function() {
    // alert("När sidan laddas");

    let divs = $("div");
    console.log(divs);

    divs.addClass("green").removeClass("green");

    $("div").first().on('click', function() {
        if($(this).hasClass('green')) {
            $(this).removeClass('green').addClass('red');
        }
        else {
            $(this).removeClass('red').addClass('green');
        }
    });

    $("button").on('click', function() {
        $('.blue').toggleClass("green").toggle(2000);
    });
});