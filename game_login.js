function addUser(){
    jugador1 = document.getElementById("name_J1").value;
    jugador2 = document.getElementById("name_J2").value;
    localStorage.setItem("name_J1", jugador1 );
    localStorage.setItem("name_J2", jugador2);
    window.location = "quiz_game_page.html"
}