var startButton = document.getElementById("begin");
var startScreen = document.getElementById("welcome");
var quizScreen = document.getElementById("quiz-screen");
var results= document.getElementById("results")
var timer= document.getElementById("timer")

var startQuiz = document.getElementById("start quiz");
var answers = document.getElementById("answers");
var selection = document.getElementById("selection");
var Q = 0;
var time = 60000;
var listQuestions = [
    {
    question:"Commonly used data types Do Not include:_________",
    listAnswers:["strings","booleans","alerts","numbers"],
    answer: "alerts"
  },
  {
    question:"the Condition in an if/else statement is enclosed within_______",
    listAnswers:["quotes","curly brackets","parentheses","square brackets"],
    answer:"parentheses"
  },
  {
    question:"arrays in JavaScript can be used to store_______.",
    listAnswers:["numbers and strings", "other arrays", "booleans","all of the above"],
    answer:"all of the above",
  },
  {
    question:"string values must be enclosed when being assigned variable",
    listAnswers:["commas", "curly bracket","quotes", "parentheses"],
    },
  {
  questions:"a very useful tool during development and debugging for printing content to the debugger is",
  listAnswers: ["commas", "curly bracket", "quotes", "parentheses"],
   answer: "console log"
 },
 ]
/**
 * 
 * Takes in whatever array we pass in.
 * Preferably options for the current stage. 
 */
function renderOptions() {
    var currentQuestion = listQuestions[Q];

    var quizQuestion = document.getElementById("question-title");
    var answerBox = document.getElementById("answers");

    answerBox.innerHTML = "";
    quizQuestion.textContent=currentQuestion.question;

    currentQuestion.listAnswers.forEach(function(answer) {
        var button = document.createElement("button");
        button.classList.add("answer");
        button.setAttribute("value", answer);

        button.textContent = answer;

        button.onclick = questionClick;
        answerBox.appendChild(button)
    })

  }
startButton.addEventListener("click", function (options) {
  startScreen.classList.add("hide");
  quizScreen.classList.add("show");
   renderOptions ()
   console.log("hello World")
});


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//pseudo code

// welcome screen w/ start button 
// start button needs an event listener
// there should be a function within the event listener for timer function
// 1.timer starts a countdown (60 secs)
// 2.prompt for a question with answer choices on it for user to select 
// **easiest way to store info would be an array of objects!
// within one object you will have 3 different keys:
// 1. the question
// 2.an array of answer choices
// 3. a string with the correct answer
// **the reason you want to group all of the above into one object is to show it in the screen at the same time
// when you click the answer button it should spark another function: 
// (Need an event listener to do this)
// Function should:
//  a. show the next question in the array of objects 
//  b. show a message (text) saying if the answer is correct or incorrect 
//  c. compare the text on the button to the correct answer choice to see if it is correct 
//  d. if the text is incorrect, then decrement the timer
// Once you are at the end of the questions or the timer is over then the game is over. Use the below to signal game over.
// You will need a conditional statement: 
// IF the timer is zero, THEN stop giving questions 
// You will need your function to somehow be saved as a variable to stop the function. Similar to calling a function, you can stop.
// Another screen should pop up at the end for high scores. 
// 1.You need to have a way to save your initials and the timer score 
// Put the information into local storage in order to save 