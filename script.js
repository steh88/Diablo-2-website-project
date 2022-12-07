function finishFunction() {
  alert("Thank you for completing the quiz.");
}

function rndm_colour(){
  var letters = '0123456789ABCDEF';
  //console.log(letters);
  var colour = '#';
  //console.log(colour);
  for (var i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)];
  }
  return colour
}

function change_heading() {
  colour = rndm_colour();
  document.getElementById("heading").style.color = colour;

}

function show_hide(){
  if (document.getElementById("appear").style.display == 'none'){
    document.getElementById("appear").style.display = 'block';
  }else{
    document.getElementById("appear").style.display = 'none';
  }
}

function say_hello(){
  var name = document.getElementById("shortName").value;
  document.getElementById("Welcome").innerHTML = "<h2>Welcome " + name + "</h2>";
  if (name.length < 1) {
    document.getElementById("Welcome").innerHTML = "";
  }
}

function change_background(){
  colour = rndm_colour();
  document.getElementById("body").style.backgroundColor = colour;
}

function change_colour(){
    if (document.getElementById("Q2Answer3").style.backgroundColor == "red"){
    document.getElementById("Q2Answer3").style.backgroundColor = "linen";
  }else{
    document.getElementById("Q2Answer3").style.backgroundColor = "red";
  }
}
function image_inside(){
document.getElementById('myImage').src='YorkMinster.jpg';
}

function image_outside(){
document.getElementById('myImage').src='YorkMinsterOutside.jpg';
}

function image_inside(){
document.getElementById('myImage').src='YorkMinster.jpg';
}

function image_swop(link){
document.getElementById('myImage').src=link;
}

function validateText() {
  //store the values from the form text fields into named variables
  var fullName = document.forms.Quiz.fullName.value;
  var shortName = document.forms.Quiz.shortName.value;
 //if either variable contains an empty string show an alert in the browser:
  if (fullName === "") {
    alert("Full name must be filled out");
    return false;
    } else if (shortName === "") {
         alert("What shall we call you must be filled out");
         return false; 
    } 
     else {
    return true;
   }  
}


function validateRadio() {
  // Check a value is present for the groups of radio buttons:
  var radioQ1 = document.forms.Quiz.elements.D2Q1.value;
  var radioQ2 = document.forms.Quiz.elements.D2Q2.value;
  //if there is no value present an alert will appear in the browser:
  if (radioQ1 === "") {
    alert("One answer button must be selected for Question 1");
    return false;
  }
    else if (radioQ2 === "") {
    alert("One answer button must be selected for Question 2");
    return false;
  }
else{
    return true;
  }
}

function validateNumber() {
  var numQ3;
  var numQ4;
  numQ3 = document.getElementById("D2Q3").value;
  numQ4 = document.getElementById("D2Q4").value;  
  // If Q3 value is equal to zero show an alert
  if (numQ3 == 0) {
    alert("You must enter a number above 0 for Question 3");
    return false;
  } 
   else if (numQ4 == 0) {
    alert("You must enter a number above 0 for Question 4");
    return false;
  } 
  else {
    return true;
  }
}

function validateQuestions() {
//if any of the validation functions return `false` indicate the data is not valid.
    if (validateText() && validateRadio() && validateNumber()){
        return true;
     } else {
        return false;
    }
}
function checkAnswers(){
  //assign 0 to the score variable
  var score = 0
  //assign the quiz elements to the quiz variable:
  quiz = document.forms.Quiz.elements;
  //assign the answer to the question to variables and check:
  answerQ1 = quiz.D2Q1.value;
    // Check the answer to the first question:
    if (answerQ1 == "Q1Answer2"){
        //Add 1 to the score if the user was correct
      score = score + 1;
 }
  answerQ2 = quiz.D2Q2.value;
   if (answerQ2 == "Q2Answer3"){
       //Add 1 to the score if the user was correct
      score = score + 1;
    }
  answerQ3 = quiz.D2Q3.value;
   if (answerQ3 == "99"){
       //Add 1 to the score if the user was correct
      score = score + 1;
  }
  answerQ4 = quiz.D2Q4.value;
   if (answerQ4 == "11"){
       //Add 1 to the score if the user was correct
      score = score + 1;
  }
  //return the score value as part of an alert in the browser
 // alert("Your score is " + score);
  showFeedback(score);
}
function showFeedback(score){
  //assign the area of the form to the feedback variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
 feedback = document.getElementsByTagName("form")[0]
  //replace the HTML content inside the form tag with a heading displaying the score
  if (score === 0){
    feedback.innerHTML = '<h2>Sorry, your score was... 0 </h2>';
} else if (score < 4){
    feedback.innerHTML = '<h2>Getting there, your score was... ' + score + '</h2>';
} else {
    feedback.innerHTML = '<h2>Well done, full marks! Your score was... ' + score + '</h2>';
}
}


function quizCheck() {
  if (validateQuestions()) {
       alert("Thank you for completing the quiz.");
       checkAnswers()
      
  }
  else 
       alert("Please complete incomplete entries");

}