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

$(window).on('load resize', setNavHeight);

