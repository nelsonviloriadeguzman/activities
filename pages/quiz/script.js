function goBack() {
window.location.href = '../../index.html'
}
// Shuffle Question
function shuffle(array) { 
var currentIndex = array.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}

return array;
}
// Shuffle Answer
function shuffleAnswer(){
for (x=0; x<quizData.length; x++){
    shuffle(quizData[x].answers); // Shuffle Question Possible Answer
}
}

async function quizInit(){
    await shuffle(quizData);
    await shuffleAnswer();
    await loadQuiz();
}

let quizData = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "High Train Make Language","Hyper Test Marker Language","Hint Try Mark Late"],
        correct: "Hyper Text Markup Language",
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Colorful Style Sheets","Creative Style Sheets","Computer Style Sheets"],
        correct: "Cascading Style Sheets",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<javascript>","<js>","<scripting>"],
        correct: "<script>",
    },
    {
        question: "Who is making the Web standards?",
        answers: ["The World Wide Web Consortium", "Google","Microsoft","Apple"],
        correct: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading",
        answers: ["<h1>", "<h2>","<h3>","<h4>"],
        correct: "<h1>",
    }
]
// Shuffle Question

  
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_value = document.getElementById('a')
const b_value = document.getElementById('b')
const c_value = document.getElementById('c')
const d_value = document.getElementById('d')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

quizInit()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_value.value = currentQuizData.answers[0]
    b_value.value = currentQuizData.answers[1]
    c_value.value = currentQuizData.answers[2]
    d_value.value = currentQuizData.answers[3]
    a_text.innerText = currentQuizData.answers[0]
    b_text.innerText = currentQuizData.answers[1]
    c_text.innerText = currentQuizData.answers[2]
    d_text.innerText = currentQuizData.answers[3]
    
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.value
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }

})