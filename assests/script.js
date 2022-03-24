
// varialbles
var qno = 0,correct = 0,wrong = 0,x;
var SelectedOption = 10;
const difficulty=["easy","medium","hard"];
var url,raw=0;

//function to get data from api
async function apiget(url){
    const response = await fetch(url);
    raw = await response.json();
    x=raw;
    startquiz();
    }

//function to get category
function categorySelection(cat){
    category=cat;
    document.getElementById("category-box").className="hidden";
    document.getElementsByTagName("body")[0].style.backgroundImage="url('images/hexagon.svg')";
    document.getElementById("difficulty-box").className="container";
}

//function to get difficulty
function difficultySelection(def){
    url="https://opentdb.com/api.php?amount=10&category="+category+"&difficulty="+difficulty[def]+"&type=multiple";
    console.log(url);
    document.getElementById("difficulty-box").className="hidden";
    document.getElementsByTagName("body")[0].style.backgroundImage="url('images/background.svg')";
    document.getElementById("loader").className="display"
    apiget(url);
}

//function to show category
function showCategory(){
    document.getElementById("welcome").className="hidden";
    document.getElementById("category-box").className="container display fadein";
    document.getElementsByTagName("body")[0].style.backgroundImage="url('images/pattern.svg')";
}

qrs = []

//function to set the quiz

function setQuiz(data) {
    document.getElementById("question").innerHTML = 'Q.' + (qno + 1) + ' ' + data.results[qno].question;
    qrs = [x.results[qno].correct_answer, x.results[qno].incorrect_answers[0], x.results[qno].incorrect_answers[1], x.results[qno].incorrect_answers[2]]
    randint = Math.floor(Math.random() * 4);
    [qrs[0], qrs[randint]] = [qrs[randint], qrs[0]];
    document.getElementById("option1").innerHTML = qrs[0];
    document.getElementById("option2").innerHTML = qrs[1];
    document.getElementById("option3").innerHTML = qrs[2];
    document.getElementById("option4").innerHTML = qrs[3];
    document.getElementById("disp").className = 'container-fluid display';
    document.getElementById("option1").className = 'options';
    document.getElementById("option2").className = 'options';
    document.getElementById("option3").className = 'options';
    document.getElementById("option4").className = 'options';
    document.getElementById("correct").innerHTML = "Score : " + correct;
    document.getElementById("wrong").innerHTML = "Wrong : " + wrong;
    document.getElementById("final-correct").innerHTML = "Correct : " + correct;
    document.getElementById("final-wrong").innerHTML = "Wrong : " + wrong;
    document.getElementById("submit").disabled = true;
    document.getElementById("category-box").className = 'hidden';
    document.getElementById("difficulty-box").className = 'hidden';
}

//function to show the next question
function next(data) {
    if (qno < 9 && qno >= 0) {
        qno++;
        setQuiz(data);
        document.getElementById("submit").className = "btn btn-lg btn-primary";
        document.getElementById("submit").disabled = true;
        document.getElementById("next").className = "hidden";
        document.getElementById("option1").disabled = false;
        document.getElementById("option2").disabled = false;
        document.getElementById("option3").disabled = false;
        document.getElementById("option4").disabled = false;
    } else {
        document.getElementById("disp").className = 'container-fluid hidden ';
        document.getElementById("result").className = 'display';
    }
}
function previous(data) {
    if (qno <= 9 && qno > 0) {
        qno--;
        setQuiz(data)
    } else {
        console.log("something fishy");
    }
}

//function to check the submitted option
function optionChecker(option) {
    SelectedOption = option;
    document.getElementById("option1").className = 'options';
    document.getElementById("option2").className = 'options';
    document.getElementById("option3").className = 'options';
    document.getElementById("option4").className = 'options';
    document.getElementById("option" + (option + 1)).className = 'options option-selected';
    document.getElementById("submit").disabled = false;
    
}

//function to submit the selected option
function submit(option) {
    if (qrs[option] == x.results[qno].correct_answer) {
        document.getElementById("option" + (option + 1)).className = 'options correct-option';
        correct++;
    } else {
        document.getElementById("option" + (option + 1)).className = 'options incorrect-option';
        for (let i = 0; i <= 3; i++) {
            if (qrs[i] == x.results[qno].correct_answer) {
                document.getElementById("option" + (i + 1)).className = 'options correct-option';
                break;
            }                       
        }
        wrong++;
    }
    document.getElementById("submit").className = 'hidden';
    document.getElementById("next").className = 'btn btn-lg btn-primary';
    document.getElementById("correct").innerHTML = "Score : " + correct;
    document.getElementById("wrong").innerHTML = "Wrong : " + wrong;
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;
    document.getElementById("option4").disabled = true;
    SelectedOption=99;
}

//function to start the quiz
function startquiz(){
    document.getElementById("difficulty-box").className = 'hidden';
    document.getElementById("quiz").className="quiz display";
    document.getElementById("loader").className="hidden"
    setQuiz(x);
}

document.getElementById("difficulty-box").className = 'hidden';
document.getElementById("category-box").className= 'hidden';

// to make sure all the images are loaded
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    document.getElementById("homepage").className = 'homepage display';
});