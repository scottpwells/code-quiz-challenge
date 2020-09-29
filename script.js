var startButton = document.getElementById("begin");
var startScreen = document.getElementById("coding");
var quizScreen = document.getElementById("quiz-screen");

var Coding = document.getElementById("coding");
var startQuiz = document.getElementById("start quiz");
var answers = document.getElementById("answers");
var selection = document.getElementById("selection");

var Q = 0;
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
    answer:"all of the above"
    
 }
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

//   for (var i = 0; i < array.length; i++) {
//     // 1. Create an element.
//     var button = document.createElement("button");
//     // 2. Add content
//     button.setAttribute("class", "btn btn-info");
//     button.textContent = array[i];
//     button.setAttribute("data-value", array[i]);
    // 3. Append to an existing element
    // options.append(button);
  }

function questionClick() {
    console.log(this.value)
    // if statement for right or wrong answers
    if(currentQuestion.answer !== this.value) {
        //reduce time
    }
    else{
        //count as correct
    }
    Q++;
    if(Q === listQuestions.length) {
        console.log("end")
    } else {
    renderOptions()
    }
}
/**
 * Listens for the user to click on the options div.
 * If the target of the click matches a <button> el
 * We grab the data attribute of THAT button
 * Move to the next stage. 
 */
// options.addEventListener("click", function (event) {
//   if (event.target.matches("button")) {
//     console.log("You clicked a button");
//     var selectedCrust = event.target.getAttribute("data-value");
//     console.log(selectedCrust);

//     selection.textContent = "";
//     var crustToDisplay = document.createElement("h3");
//     crustToDisplay.textContent = selectedCrust;
//     selection.append(crustToDisplay);
//     // TODO: Save to Local Storage

//     if (currentStage === stages.length - 1) {
//       alert("Your pizza is on its way!");
//     } else {
//       setTimeout(function () {
//         currentStage++;
//         var optionsToDisplay = stages[currentStage].options;
//         options.textContent = "";
//         renderOptions(optionsToDisplay);
//       }, 1000);
//     }
//   }
// });

/**
 * When the start button is clicked
 * Hide the welcome container
 * Call renderOptions
 */
startButton.addEventListener("click", function () {
  startScreen.classList.add("hide")
  quizScreen.removeAttribute("class", "hide");
  renderOptions();
  console.log("hello")

 
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






