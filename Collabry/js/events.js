window.addEventListener("resize", function(e) {
    var tileElement = document.getElementById("tile");
    tileElement.style.height = tileElement.offsetWidth;
});