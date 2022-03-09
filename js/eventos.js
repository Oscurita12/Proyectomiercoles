let etiquetaBoton=document.getElementById("boton")

etiquetaBoton.addEventListener("click", cambiarFoto)

function cambiarFoto () {

    let titulo2=document.getElementById("titulo2")
    titulo2.textContent="Buenos días Señor"
}

let etiquetaImagen=document.getElementById("fotogravityfalls")

etiquetaImagen.addEventListener("mouseover", cambiarTitulo)

function cambiarTitulo () {
    let etiquetaTitulo=document.getElementById("titulo")
    etiquetaTitulo.textContent="le temeran al ser de un solo ojo"
}