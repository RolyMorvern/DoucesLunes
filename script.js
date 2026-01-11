$("#menuPhone").click(() => {
    if ($(".navLinksContainer").css("display") === "none") {
        $(".navLinksContainer").css("display", "flex").hide().fadeIn();
    	$("body").css("overflow", "hidden")
    } else {
        $(".navLinksContainer").fadeOut();
    	$("body").css("overflow", "visible")
    }
});

function setNavHeight() {
    const navHeight = $('nav').outerHeight();
    $('html').css('--nav-height', navHeight + 'px');
}

function updatePrice (price) {
    $("#itemPrice").text(`€${price}`)
}

$(window).on('load resize', setNavHeight);

function changeSize() {
    $('.size').removeClass('activeSize');
    $(this).addClass('activeSize');
}

$(document).on('click', '.size', function() {
    $('.size').removeClass('activeSize');
    $(this).addClass('activeSize');
});

$(document).on('click', '.color', function() {
    $('.colorContainer > div.active').contents().unwrap();
    $(this).wrap('<div class="active"></div>');
});