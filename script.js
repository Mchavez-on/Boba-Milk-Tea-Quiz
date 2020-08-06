//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var qCount = 0;
var blackMilkTeaS = 0;
var thaiMilkTeaS = 0;
var honeyDewMilkTeaS = 0;
var taroMilkTeaS = 0;
var result = document.getElementById("result");





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q1a1");
var q2a2 = document.getElementById("q1a2");
var q2a3 = document.getElementById("q1a3");
var q2a4 = document.getElementById("q1a4");

var q3a1 = document.getElementById("q1a1");
var q3a2 = document.getElementById("q1a2");
var q3a3 = document.getElementById("q1a3");
var q3a4 = document.getElementById("q1a4");








//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", blackMilkTea);
q1a2.addEventListener("click", thaiMilkTea);
q1a3.addEventListener("click", honeyDewMilkTea);
q1a4.addEventListener("click", taroMilkTea);

q2a1.addEventListener("click", blackMilkTea);
q2a2.addEventListener("click", thaiMilkTea);
q2a3.addEventListener("click", honeyDewMilkTea);
q2a4.addEventListener("click", taroMilkTea);

q3a1.addEventListener("click", blackMilkTea);
q3a2.addEventListener("click", thaiMilkTea);
q3a3.addEventListener("click", honeyDewMilkTea);
q3a4.addEventListener("click", taroMilkTea);












//#TODO: Define quiz functions here
function blackMilkTea(){
  blackMilkTeaS+=1;
  qCount+=1;
  alert("One point to Black Milk Tea!");
  if (qCount>= 3){
    updateResult();
  }
}
function thaiMilkTea(){
  thaiMilkTeaS+=1;
  qCount+=1
  alert("One point to Thai Milk Tea!");
   if (qCount>= 3){
    updateResult();
  }
}
function honeyDewMilkTea(){
  honeyDewMilkTeaS+=1;
  qCount+=1
  alert("One point to Honey Dew Milk Tea!");
   if (qCount>= 3){
    updateResult();
  }
}
function taroMilkTea(){
  taroMilkTeaS+=1;
  qCount+=1
  alert("One point to Taro Milk Tea!");
   if (qCount>= 3){
    updateResult();
  }
}
function updateResult(){
  if (blackMilkTeaS >= 2){
    result.innerHTML = "Black Milk Tea!";
  }
  else if (thaiMilkTeaS >=2){
    result.innerHTML = "Thai Milk Tea!";
  }
  else if (honeyDewMilkTeaS >=2){
    result.innerHTML = "Honey Dew Milk Tea!";
  }
  else if (taroMilkTeaS >=2){
    result.innerHTML = "Taro Milk Tea!";
  }
  else{
    result.innerHTML = "Whoops! The Boba making machine broke.";
  }
}
  
  
  
  
  
