$(document).scroll(function (e) {
    const y = $("html").scrollTop();
    if (y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})