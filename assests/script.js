var qno = 0;
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
const url ="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
// 'http://127.0.0.1:5500/javascript/quiz/api.json'
x = {"response_code":0,"results":[{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Area 51 is located in which US state?","correct_answer":"Nevada","incorrect_answers":["Arizona","New Mexico","Utah"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is &quot;dabbing&quot;?","correct_answer":"A dance","incorrect_answers":["A medical procedure","A sport","A language"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the shape of the toy invented by Hungarian professor Ern\u0151 Rubik?","correct_answer":"Cube","incorrect_answers":["Sphere","Cylinder","Pyramid"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the nickname of the US state of California?","correct_answer":"Golden State","incorrect_answers":["Sunshine State","Bay State","Treasure State"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is on display in the Madame Tussaud&#039;s museum in London?","correct_answer":"Wax sculptures","incorrect_answers":["Designer clothing","Unreleased film reels","Vintage cars"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Who is depicted on the US hundred dollar bill?","correct_answer":"Benjamin Franklin","incorrect_answers":["George Washington","Abraham Lincoln","Thomas Jefferson"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What do the letters in the GMT time zone stand for?","correct_answer":"Greenwich Mean Time","incorrect_answers":["Global Meridian Time","General Median Time","Glasgow Man Time"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which American-owned brewery led the country in sales by volume in 2015?","correct_answer":"D. G. Yuengling and Son, Inc","incorrect_answers":["Anheuser Busch","Boston Beer Company","Miller Coors"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What do the letters of the fast food chain KFC stand for?","correct_answer":"Kentucky Fried Chicken","incorrect_answers":["Kentucky Fresh Cheese","Kibbled Freaky Cow","Kiwi Food Cut"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"In which fast food chain can you order a Jamocha Shake?","correct_answer":"Arby&#039;s","incorrect_answers":["McDonald&#039;s","Burger King","Wendy&#039;s"]}]}
qrs=[]
function setQuiz(data) {
    document.getElementById("question").innerHTML = 'Q.' + (qno + 1) + ' ' + data.results[qno].question;
    qrs = [x.results[qno].correct_answer,x.results[qno].incorrect_answers[0],x.results[qno].incorrect_answers[1],x.results[qno].incorrect_answers[2]]
    randint = Math.floor(Math.random() * 4);
    [qrs[0],qrs[randint]] = [qrs[randint],qrs[0]];
    document.getElementById("option1").innerHTML = qrs[0];
    document.getElementById("option2").innerHTML = qrs[1];
    document.getElementById("option3").innerHTML = qrs[2];
    document.getElementById("option4").innerHTML = qrs[3];
    document.getElementById("disp").className = 'container-fluid display';
    document.getElementById("loader").className = 'hidden';
}
function next(data) {
    if (qno < 9 && qno >= 0) {
        qno++;
        setQuiz(data)   
    }
    else {
        console.log("something fishy");
    }
}
function previous(data) {
    if (qno <= 9 && qno > 0) {
        qno--;
        setQuiz(data)
    }
    else {
        console.log("something fishy");
    }
}

setQuiz(x);