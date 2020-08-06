//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var qCount = 0;
var blackMilkTea = 0;
var thaiMilkTea = 0;
var honeyDewMilkTea = 0;
var taroMilkTea = 0;
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
function blackMilk(){
  blackMilkTea+=1;
  qCount+=1;
  alert("One point to Black Milk Tea!");
  if (qCount>= 3){
    updateResult();
  }
}
function thaiMilk(){
  thaiMilkTea+=1;
  qCount+=1
  alert("One point to Thai Milk Tea!");
   if (qCount>= 3){
    updateResult();
  }
}
function honeyDewMilk(){
  honeyDewMilkTea+=1;
  qCount+=1
  alert("One point to Honey Dew Milk Tea!");
   if (qCount>= 3){
    updateResult();
  }
}
function taroMilk(){
  taroMilkTea+=1;
  qCount+=1
  alert("One point to Taro Milk Tea!");
   if (qCount>= 3){
    updateResult();
  }
}
function updateResult(){
  if (blackMilkTea >= 2){
    
  }
  else if (thaiMilkTea >=2){
    
  }
  else if (honeyDewMilkTea >=2){
    
  }
  else if (taroMilkTea >=2){
    
  }
}
  
  
  
  
  
}