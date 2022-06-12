var elements = [];
var elements = document.getElementById('click');


for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = afisare_recenzii();
}



function afisare_recenzii() {
    document.getElementById('recenzie').style.visibility = 'visible';
}