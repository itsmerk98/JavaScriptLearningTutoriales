console.log("JavaScript file connected ");

var fiistName = "Ram";
var LastName = "kishor";
var Dob = 1998;
var currentyear = 2022;
var age = Dob - currentyear;

var message = "Hi, my name is "+ fiistName+" "+LastName+", I'm "+age.toString()+ " year old and I,m learning javascript";
document.getElementById("student_message").innerHTML = message;

var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);

var average = (num1 + num2)/2;
average = average.toFixed(2);
document.getElementById("result").innerHTML = average;

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString();
console.log(phone1.length==9);
console.log(phone2.length==9);
console.log(phone3.length==9);

console.log(Math.pow(32,6));

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity);  
console.log( (7+5) / number + 2 );  
console.log(pressure); 
console.log(temperature);  
console.log(typeof pressure); 
console.log(typeof temperature); 

var url1 = "https://"+document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = url1;

var url2 = document.getElementById("url_3").innerHTML;
document.getElementById("url_4").innerHTML = url1;

