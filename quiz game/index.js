const questions3 = [
    {
        question: "1. Javascript is an _______ language?",
        answers: [
            { text: "Object-Oriented", correct: "true" },
            { text: "Object-Based", correct: "false" },
            { text: "Procedural", correct: "false" },
            { text: "None of the above", correct: "false" },
        ]
    },
    {
        question: "2. Which of the following keywords is used to define a variable in Javascript?",
        answers: [
            { text: "int", correct: "false" },
            { text: "float", correct: "false" },
            { text: "var and let", correct: "true" },
            { text: "None of the above", correct: "false" },
        ]
    },
    {
        question: "3. Which of the following methods is used to access HTML elements using Javascript?",
        answers: [
            { text: "getelement()", correct: "false" },
            { text: "querySelector()", correct: "true" },
            { text: "getclass()", correct: "false" },
            { text: "None of the above", correct: "false" },
        ]
    },
    {
        question: "4. Upon encountering empty statements, what does the Javascript Interpreter do?",
        answers: [
            { text: "Ignores the statements", correct: "true" },
            { text: "Throws an error", correct: "false" },
            { text: "Gives a warning", correct: "false" },
            { text: "None of the above", correct: "false" },
        ]
    }
];
const questions1 = [
    {
        question: "1. Who is the father of HTML?",
        answers: [
            { text: "Rasmus Lerdorf", correct: "flase" },
            { text: "Tim Berners-Lee", correct: "true" },
            { text: "Brendan Eich", correct: "false" },
            { text: "Sergey Brin", correct: "false" },
        ]
    },
    {
        question: "2. HTML stands for __________",
        answers: [
            { text: "HyperText Markup Language", correct: "true" },
            { text: "HyperText Machine Language", correct: "false" },
            { text: "HyperText Marking Language", correct: "false" },
            { text: "HighText Marking Language", correct: "false" },
        ]
    },
    {
        question: "3. In which part of the HTML metadata is contained?",
        answers: [
            { text: "head tag", correct: "true" },
            { text: "title tag", correct: "false" },
            { text: "html tag", correct: "false" },
            { text: "body tag", correct: "false" }
        ]
    },
    {
        question: "4. Which of the following is used to read an HTML page and render it?",
        answers: [
            { text: "Web server", correct: "false" },
            { text: "Web Network", correct: "false" },
            { text: "Web browser", correct: "true" },
            { text: "Web matrix", correct: "false" },
        ]
    }
];
const questions2 = [
    {
        question: "1. Which of the following tag is used to embed css in html page?",
        answers: [
            { text: "< css >", correct: "false" },
            { text: "< !DOCTYPE html >", correct: "false" },
            { text: "< script >", correct: "false" },
            { text: "< style >", correct: "true" },
        ]
    },
    {
        question: "2. Which of the following CSS selectors are used to specify a group of elements?",
        answers: [
            { text: "tag", correct: "false" },
            { text: "id", correct: "false" },
            { text: "class", correct: "true" },
            { text: "both tag and class", correct: "false" },
        ]
    },
    {
        question: "3. Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        answers: [
            { text: "HTML", correct: "false" },
            { text: "CSS", correct: "true" },
            { text: "PHP", correct: "false" },
            { text: "Ajax", correct: "false" },
        ]
    },
    {
        question: "4. Which of the following CSS property is used to make the text bold?",
        answers: [
            { text: "text-decoration: bold", correct: "false" },
            { text: "font-weight: bold", correct: "true" },
            { text: "font-style: bold", correct: "false" },
            { text: "text-align: bold", correct: "false" },
        ]
    }
];
const questions4 = [
    {
        question: "1. Which of the following CSS framework is used to create a responsive design?",
        answers: [
            { text: "django", correct: "false" },
            { text: "rails", correct: "false" },
            { text: "larawell", correct: "false" },
            { text: "bootstrap", correct: "true" },
        ]
    },
    {
        question: "2. Who developed the bootstrap?",
        answers: [
            { text: "James Gosling", correct: "false" },
            { text: "Mark Jukervich", correct: "false" },
            { text: "Dennis Ritchie", correct: "false" },
            { text: "Mark Otto and Jacob Thornton", correct: "true" },
        ]
    },
    {
        question: "3. Which of the following class in Bootstrap is used to provide a responsive fixed width container?",
        answers: [
            { text: ".container-fixed", correct: "false" },
            { text: ".container-fluid", correct: "false" },
            { text: ".container", correct: "true" },
            { text: "All of the above", correct: "false" },
        ]
    },
    {
        question: "4. How many columns are allowed in a bootstrap grid system?",
        answers: [
            { text: "2", correct: "false" },
            { text: "6", correct: "false" },
            { text: "12", correct: "true" },
            { text: "8", correct: "false" },
        ]
    }
];

const options = [
    {
        topic: "Choose Your Quiz Topic 👇 ",
        option: [
            { text: "HTML" },
            { text: "CSS" },
            { text: "JavaScript" },
            { text: "Bootstrap" },
        ]
    }
]

var questions;
const questionElement = document.getElementById("question");
const answerButton = document.querySelector(".answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showOptions();
}
function showOptions() {
    resetState();
    let currentoption = options[0];
    questionElement.innerHTML = currentoption.topic;

    currentoption.option.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        button.addEventListener("click", function () {
            if (answer.text === "HTML") {
                questions = questions1;
                setTimeout(function () {
                    showQuestion();
                }, 200);
            } else if (answer.text === "CSS") {
                questions = questions2;
                setTimeout(function () {
                    showQuestion();
                }, 200);
            } else if (answer.text === "JavaScript") {
                questions = questions3;
                setTimeout(function () {
                    showQuestion();
                }, 200);
            } else if (answer.text === "Bootstrap") {
                questions = questions4;
                setTimeout(function () {
                    showQuestion();
                }, 200);
            }
        });
    });
}

function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }

}

function selectAns(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", function () {
    if (currentQuestionIndex < questions.length) {
        handelNextbtn();
    } else {
        startQuiz();
    }
})
function handelNextbtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();

    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}. Thank you for playing :) `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

startQuiz();
