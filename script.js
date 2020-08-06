//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var qCount = 0;
var blackMilkTea = 0;
var thaiMilkTea = 0;
var honeyDewMilkTea = 0;
var taroMilkTea = 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", blackMilkTea);
q1a2.addEventListener("click", thaiMilkTea);
q1a3.addEventListener("click", honeyDewMilkTea);
q1a4.addEventListener("click", taroMilkTea);










//#TODO: Define quiz functions here
function blackMilk(){
  blackMilkTea+=1;
  qCount+=1;
}
function thaiMilk(){
  thaiMilkTea+=1;
  qCount+=1
}
function honeyDewMilk(){
  honeyDewMilkTea+=1;
  qCount+=1
}
function taroMilk(){
  taroMilkTea+=1;
  qCount+=1
}
  
  
  
  
  
  
}