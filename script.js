var qno=0
const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
//'http://127.0.0.1:5500/javascript/quiz/api.json'

fetch(url).then(function (response){
    return response.json();
}).then(function (data){
    document.getElementById("question").innerHTML='Q.'+ (qno+1)+' ' +data.results[qno].question;
    document.getElementById("option1").innerHTML=data.results[qno].correct_answer;
    document.getElementById("option2").innerHTML=data.results[qno].incorrect_answers[0];
    document.getElementById("option3").innerHTML=data.results[qno].incorrect_answers[1];
    document.getElementById("option4").innerHTML=data.results[qno].incorrect_answers[2];
    document.getElementById("disp").className = 'container-fluid display';
    document.getElementById("loader").className = 'hidden';
    console.log(data.results);
}).catch(function (error){
    console.log(error);
}
)
