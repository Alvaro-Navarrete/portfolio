document.addEventListener('DOMContentLoaded', () => {
    const inicio = document.getElementById('inicio');
    const proyecto = document.getElementById('proyecto');
    const habilidad = document.getElementById('habilidad');
    const sobreMi = document.getElementById('sobre-mi');
    const contacto = document.getElementById('contacto');
    const btnCv = document.getElementById('cv');


    $(function () {

        // desliza los elementos al ir bajando la pantalla
        $(window).on("scroll", function () {

            const elementLeft = document.querySelectorAll('.info-izquierda');
            const elementRight = document.querySelectorAll('.info-derecha');
            var altura = window.innerHeight / 1.5;


            elementLeft.forEach((element, i) => {
                var distancia = element.getBoundingClientRect().top;

                if (distancia <= altura) {

                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            })

            elementRight.forEach((element, i) => {
                const distancia = element.getBoundingClientRect().top;

                if (distancia <= altura) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });

        })
        

        $(btnCv).on('click', function (event) {
            window.open("assets/Cv_Alvaro_Navarrete.pdf")
        })



        // desplazamiento de pantalla hacia la seccion

        $(inicio).on("click", function (event) {
            var posicion = $("body").offset().top

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });

        $(proyecto).on("click", function (event) {
            var posicion = $("#project-container").offset().top - 70

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });
        $(habilidad).on("click", function (event) {
            var posicion = $("#skills").offset().top - 150

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });
        $(sobreMi).on("click", function (event) {
            var posicion = $("#about-me").offset().top - 70

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });
        $(contacto).on("click", function (event) {
            var posicion = $("#contact").offset().top - 70

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });


        //modal


        $(".box-project").on('click', function (event) {
            if ($('#modal').css('display') === "none" || $('#modal').css('display') === "") {
                $('#modal').css('display', 'flex')
                $('#modal-background').css('display', 'flex')

                // deshabilita el scroll de la pagina    
                $('body').addClass('open_modal');
            }
        })

        $('#modal-background').on('click', function (event) {
            $('#modal').css('display', 'none')
            $('#modal-background').css('display', 'none')

            // remueve la clase para desplazar la pagina
            $('body').removeClass('open_modal');
        })


        $('#modal').on('click', function (event) {
            event.stopPropagation();
        })





    })

    // tooltip bootstrap

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


})