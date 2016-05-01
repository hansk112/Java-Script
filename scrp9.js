window.onload = init;

function init() {
    document.getElementById("Key").onclick = speech;
    document.getElementById("Clarke").onclick = speech;
    document.getElementById("Hansen").onclick = speech;
}

function speech() {
    switch(this.id){
        case "Key":
        alert("I am the national leader");
        break;
        case "Clarke":
        alert("I am the labour leader");
        break;
        case "Hansen":
        alert("I am the all blacks");
        break;
        default:
    }
}