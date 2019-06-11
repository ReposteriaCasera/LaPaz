var menuItem = document.getElementById('menu-items')
var contLogo = document.getElementById('container-logo')

function menuOpen() {
    if (menuItem.style.display === "none") {
        menuItem.style.display = "inherit";
        contLogo.style.background = '#000'
    } else {
        menuItem.style.display = "none";
        contLogo.style.background = 'rgba(0, 0, 0, 0.5)'
    }
}