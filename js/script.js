let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

/*-----------------------------------------------------------------*/

// Función para modificar el icono basado en el ancho de la pantalla
function modificarIcono() {
    var iconElements = document.querySelectorAll('.redes i.fa-brands');

    // Iterar sobre los elementos y modificar su clase
    iconElements.forEach(function(iconElement) {
        // Verificar si el elemento tiene la clase fa-2xl
        if (iconElement.classList.contains('fa-2xl')) {
            // Eliminar la clase fa-2xl y agregar la clase fa-xl
            iconElement.classList.remove('fa-2xl');
            iconElement.classList.add('fa-xl');
        }
    });
}

// Función para revertir el cambio cuando el ancho de la ventana sea mayor a 451px
function revertirModificacion() {
    var iconElements = document.querySelectorAll('.redes i.fa-brands');

    // Iterar sobre los elementos y modificar su clase
    iconElements.forEach(function(iconElement) {
        // Verificar si el elemento tiene la clase fa-xl
        if (iconElement.classList.contains('fa-xl')) {
            // Eliminar la clase fa-xl y agregar la clase fa-2xl
            iconElement.classList.remove('fa-xl');
            iconElement.classList.add('fa-2xl');
        }
    });
}

// Verificar cuando la ventana cambie de tamaño
window.addEventListener('resize', function() {
    if (window.matchMedia("(max-width: 451px)").matches) {
        modificarIcono();
    } else {
        revertirModificacion();
    }
});

// Llamar a la función al cargar la página
window.addEventListener('load', function() {
    if (window.matchMedia("(max-width: 451px)").matches) {
        modificarIcono();
    } else {
        revertirModificacion();
    }
});
