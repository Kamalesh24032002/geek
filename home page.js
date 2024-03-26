document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("popupContainer").style.display = "flex";
    }, 5000); 
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "none";
});