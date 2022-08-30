update_player1_score = 0;
update_player2_score = 0;
player1_name = localStorage.getItem("name_J1");
player2_name = localStorage.getItem("name_J2");
document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name; 
document.getElementById("player1_score").innerHTML = update_player1_score;
document.getElementById("player2_score").innerHTML = update_player2_score;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

function send(){
    Answer_p1 = document.getElementById("Answer_p1").value;
    Answer_p2 = document.getElementById("Answer_p2").value;
    actual_answer = parseInt(Answer_p1) * parseInt(Answer_p2);
    question_number = "<h4>" +  Answer_p1 + " X " + Answer_p2 + "</h4>"
    input_box = "<br> Respuesta: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Comprobar</button>"
    row = question_number + input_box + check_button; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("Answer_p1").value = "";
    document.getElementById("Answer_p2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = update_player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = update_player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }

    }
    if(question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name;
    }else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML =   "Turno para responder - " + player2_name;
    }
    else
    {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML =   "Turno para responder - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}