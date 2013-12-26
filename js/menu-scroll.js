//code for the menu bar 
$(document).ready(function () {
    $(document).scroll(function (evt) {
        if ($(this).scrollTop() > 20) {
            $("#goto-top").fadeIn(1000);
            $("#mn").addClass("menu1", 1000);
        } else {
            $("#goto-top").fadeOut(1000);
            $("#mn").removeClass("menu1", 1000);
        }
    });
    $("#goto-top").click(function (evt) {
        if ($(document).scrollTop() > 20) {
            $('body').animate({
                scrollTop: 0,
                    "background-color": "black"
            }, 1500, function () {
                $('body').animate({
                }, 500);
            });
        }

    });
});

function scroll(name) {
    $('body').animate({
        scrollTop: $(name).offset().top,
    }, 1500, function () {
        $('body').animate({
        }, 500);
    });
}