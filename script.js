var startButton = document.getElementById("begin");
var startScreen = document.getElementById("coding");
var quizScreen = document.getElementById("quiz-screen");

var Coding = document.getElementById("coding");
var startQuiz = document.getElementById("start quiz");
var answers = document.getElementById("answers");
var selection = document.getElementById("selection");

var sec = 60;

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
},
{
 question: "string values must be enclosed with in____when being assigned to variables",
 answer: ["commas", "curly brackets","quotes","parentheses",]
},
{
    question: "a very useful tool used during development and debugging for printing content to the debugger is:",
    answer: ["javasScript", " terminal/bash", "for loops", "console.log",]
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

    if(currentQuestion.answer !== this.value) {   
    }
    else{
    
        function startTimer(){
            console.log('timer suppose to go')
            var timer = setInterval(function(){
                sec--;
                document.getElementById('timerDisplay').innerHTML='00:'+sec;
                if (sec < 0) {
                    clearInterval(timer);
                    alert("Time is up!")
                }
            }, 1000);
        }
        document.getElementById('incorrect').addEventListener('click', function() {
            sec -= 10;
            document.getElementById('timerDisplay').innerHTML='00:'+sec;
        });
        startTimer();
    })();

   
          
    // if statement for right or wrong answers
    
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