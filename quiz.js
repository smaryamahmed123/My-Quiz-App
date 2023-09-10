var objData = [
    {
        question:"What is the full form of HTML?",
        options: ['HyperText Markup language',
        'mHyperText Makeup language',
        'HyperText Markup lam',
        'HyperTate Markup language'],
        Answer: "HyperText Markup language"
    },
    {
        question:"What isfull form of css?",
        options: ['common style sheet',
        'colorful style sheet',
        'computer style sheet',
        'cascading style sheet'],
        Answer: "cascading style sheet"
    },
    {
        question:"What is the full form of HTML?",
        options: ['HyperText Markup language',
        'mHyperText Makeup language',
        'HyperText Markup lam',
        'HyperTate Markup language'],
        Answer: "HyperText Markup language"
    },
    {
        question:"What does PHP stands for?",
        options: ['Personal Hypertext Processor',
        'Preprocessed HyperText Pages',
        'PHP: Hypertext Preprocessor',
        'Pretext Hyperlink Processor'],
        Answer: "Preprocessed HyperText Pages"
    },
    {
        question:"What isfull form of NAD university?",
        options: ['Nadirshaw Edulji Danish',
        'Nadirshaw Edulji Dinshaw',
        'Nadir Edulji Dinshaw',
        'Nadirshaw Ehsan Dinshaw'],
        Answer: "Nadirshaw Edulji Dinshaw"
    },    
]
var question = document.getElementById("question");
var options = document.getElementById("options");
var questionCount = document.getElementById("questionCount");
var scoreValue = document.getElementById("scoreValue");
var countdown = document.getElementById("countdown");
var nextQu = document.getElementById("nextQ")



var questionIndex = 0;
var score = 0;

function renderQ() {
    if (questionIndex < objData.length) {
        question.innerHTML = objData[questionIndex].question;
        questionCount.innerHTML = `current question : ${questionIndex + 1}/ ${objData.length}`;
        options.innerHTML = '';
        nextQu.innerHTML = "Next"
        for (var i = 0; i < objData[questionIndex].options.length; i++) {
            options.innerHTML += `<button class="btn btn-dark mx-5 my-4 d-flex text-center text-center px-5"
             onclick="chekingAns('${objData[questionIndex].options[i]}',
             '${objData[questionIndex].Answer}')">
              ${objData[questionIndex].options[i]}</button>`;
        }
    }
    else{
        endOfQuiz()
    }
}
renderQ()

function endOfQuiz(){
    question.innerHTML = "QUIZ COMPLETED"
    var percentage = (score / (objData.length * 5)) * 100;
    questionCount.textContent = `Your percentage is ${percentage}%`;
    options.innerHTML = "";
    scoreValue.textContent = score;

    var restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", restartQuiz);
    options.appendChild(restartButton);
    restartButton.className ='btn btn-outline-dark' 
    nextQu.style.display = "none"
  countdown.style.display = "none"
}

function nextQ(){
    questionIndex++;
    renderQ()
}

function chekingAns(userAns,Ans){
    if(userAns === Ans){
        score = score + 5
    }else{
        console.log("wrong")
    }
    nextQ();
    console.log("SCORE ====>",score);
}

function restartQuiz() {
    questionIndex = 0;
    score = 0;
    renderQ();
    startCountdown();
    nextQu.style.display = "block";
}
restartQuiz()

var timer;
var totalTime = 15 * 60; 

function startCountdown() {
    timer = setInterval(function () {
        if (totalTime <= 0 || questionIndex >= objData.length) {
            clearInterval(timer);
            endOfQuiz();
        } else {
            var minutes = Math.floor(totalTime / 60);
            var seconds = totalTime % 60;
            countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            totalTime--;
        }
    }, 1000); 
}

startCountdown();
