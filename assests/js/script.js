
function myFunction(){
    const showMenu = document.getElementById('menu');
    if (showMenu.style.display === "none") {
        showMenu.style.display = "block";
      } else {
        showMenu.style.display = "none";
      }
}


function linkAction(){
    const showMenu = document.getElementById('menu')
    if (showMenu.style.display === "block") {
        showMenu.style.display = "none";
      }
}