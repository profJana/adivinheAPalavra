function addUser(){
    player1Name = document.getElementById("player1NameImput").value;
    player2Name = document.getElementById("player2NameImput").value;
    localStorage.setItem("player1Name",player1Name)
    localStorage.setItem("player2Name",player2Name)

    window.location = "game_page.html"
}