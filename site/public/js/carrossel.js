var contador = 1;

document.getElementById("radio1").checked = true;

setInterval(function () {
nextImage();

}, 3500)


function nextImage() {
    contador++;
    if(contador > 4){
        contador = 1;
    }

    document.getElementById("radio" + contador).checked = true;

}
