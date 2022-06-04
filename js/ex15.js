function fahrenheit(c){
    var fahr = (9*c/5)+32;
    return fahr;
}
var celius1 = parseFloat(document.getElementById("celsius_1").innerHTML);
document.getElementById("fahr_1").innerHTML = fahrenheit(celius1);
var celius2 = parseFloat(document.getElementById("celsius_2").innerHTML);
document.getElementById("fahr_2").innerHTML = fahrenheit(celius2);
var celius3 = parseFloat(document.getElementById("celsius_3").innerHTML);
document.getElementById("fahr_3").innerHTML = fahrenheit(celius3);


var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills","Helen Hall", "Paul Green" ]; 

var studentName = classification.slice(3,6);
document.getElementById("best_students").innerHTML = studentName;


var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
   
document.getElementById("course_title").innerHTML = course["title"];
document.getElementById("main_category").innerHTML = course.categories[0];

var total = course["5_stars_reviews"] + course["4_stars_reviews"]+ course["3_stars_reviews"]+ course["2_stars_reviews"]+course["1_stars_reviews"];

function per(star){
    return parseInt((star/total)*100)+"%";
}
document.getElementById("reviews_5_stars").innerHTML = per(course["5_stars_reviews"]);

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 

var LastElement = shoppingList[shoppingList.length-1]
shoppingList.pop();
shoppingList.unshift(LastElement);
shoppingList.push("cheese");
shoppingList.push("eggs");
var firstItem = shoppingList.pop();

var lastItem = shoppingList.pop();

shoppingList.unshift(lastItem);

console.log(shoppingList);
