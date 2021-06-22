/* this is thesection for the accordion toggle*/
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        /*Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }else {
            panel.style.display="block";
        }
    });
}
/*Fucntion for the open and close */
function openNav() {
    document.getElementById("sidebar").style.width="250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}