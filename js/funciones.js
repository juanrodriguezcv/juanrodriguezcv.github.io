
function funcDesplegar(nom) {
    var x = document.getElementById(nom);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
