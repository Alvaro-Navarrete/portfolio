document.addEventListener('DOMContentLoaded', () => {
    const inicio = document.getElementById('inicio');
    const proyecto = document.getElementById('proyecto');
    const habilidad = document.getElementById('habilidad');
    const sobreMi = document.getElementById('sobre-mi');
    const contacto = document.getElementById('contacto');



    $(function () {

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

       
        $(inicio).on("click", function(event){
            var posicion = $("body").offset().top

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });

        $(proyecto).on("click", function(event){
            var posicion = $("#project-container").offset().top

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });
        $(habilidad).on("click", function(event){
            var posicion = $("#skills").offset().top - 150

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });
        $(sobreMi).on("click", function(event){
            var posicion = $("#about-me").offset().top

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });
        $(contacto).on("click", function(event){
            var posicion = $("#contact").offset().top

            $('html, body').animate({
                scrollTop: posicion
            }, 100);
        });



    })


})