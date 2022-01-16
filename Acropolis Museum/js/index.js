let museum1 = new museum();
museum1.initializeGallery();
const artPieces = museum1.getPieces();

function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "300px";
    document.getElementById("mus").innerHTML = ".";
}  

function normalImg(x) {
    x.style.height = "350px";
    x.style.width = "350px";
    document.getElementById("mus").innerHTML = artPieces[0].getDescription();
}

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("Olivo").innerHTML = ".";
}

function dragging(event) {
    document.getElementById("Olivo").innerHTML = artPieces[1].getDescription();
}

function allowDrop(event) {
    event.preventDefault();
    document.getElementById("Olivo").innerHTML = ".";
}

function scrl() {
    document.getElementById("Mosco").innerHTML = artPieces[2].getDescription();
}

function key() {
    alert(artPieces[3].getDescription())
}

function dblclick() {
    document.getElementById("rampin").innerHTML = artPieces[4].getDescription();
}