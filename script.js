window.onload = function () {
    const petalos = document.querySelectorAll('.petalo');

    function mostrarPetalosSecuencialmente() {
        let i = 0;
        const intervalo = setInterval(function () {
            if (i < petalos.length) {
                petalos[i].style.opacity = 1;
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, 300); // Tiempo entre la aparición de cada pétalo (en milisegundos)
    }

    mostrarPetalosSecuencialmente();
};
