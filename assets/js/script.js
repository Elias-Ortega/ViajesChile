$(document).scroll(function (e) {
    //cambio color  de barra de navegacion
    const y = $("html").scrollTop();
    if (y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})

$(document).ready(function () {
    //Smooth scroll
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //tooltip del boton enviar
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#btnEnviar').click(function (event) {
        event.preventDefault()
        var nombre = $('#txtNombre').val();
        var asunto = $('#txtAsunto').val();
        var mensaje = $('#txtArea').val();

        if (nombre !== "" && asunto !== "" && mensaje !== "") {

            alert('El mensaje fue enviado correctamente...');

            $('#txtNombre').val('');
            $('#txtAsunto').val('');
            $('#txtArea').val('');
        }
    });

    //Toggle en las tarjetas al hacer click en el titulo.
    $(".card-title").click(function () {
        $(this).next('.card-text').toggle();
    });


});