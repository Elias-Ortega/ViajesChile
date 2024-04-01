$(document).scroll(function (e) {
    //cambio color  de barra de navegacion
    const y = $("html").scrollTop();
    if (y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})

$(document).ready(function () {
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

    //Oculta y muestra el parrafo de las tarjetas.
    $(".card-title").click(function () {
        $(this).next('.card-text').toggle();
    });


});