function fahrenheit(c){
    var fahr = (9*c/5)+32;
    return fahr;
}

document.getElementById("convert").onclick = function(){
    var celsius = document.getElementById("temp_celsius").value;
    if(celsius){
        document.getElementById("temp_fahr").innerHTML = fahrenheit(celsius);
    }
    else{
        alert("The temperature informed is invalid !");
    }
}


document.getElementById("anos_copa").innerHTML = "";
var startYear = 2022;

while(startYear <= 2050){
    document.getElementById("anos_copa").innerHTML += "<li>"+startYear+"</li>";
    startYear = startYear+4;
}


document.getElementById("calculate").onclick = function(){
    var grade1 = document.getElementById("grade1").value;
    var grade2 = document.getElementById("grade2").value;
    var absense = document.getElementById("absences").value;

    var totalClasses = 20;
    if(grade1 > 10 || grade2 > 10 || absense > 10){
        alert("Enter value between 1 TO 10 ! ")
    }else if(grade1=="" || grade2=="" || absense==""){
        if(grade1==""){
            alert("Enter Grade1 ");
        }else if(grade2==""){
            alert("Enter grade2 !");
        }else{
            alert("Enter number of absences");
        }
    }else{
        var average = (grade1 + grade2)/2;
        var presence = (totalClasses-absense)/totalClasses;

        var result;

        if(average < 6.5 && presence < 0.7){
            result = "The student has failed because of insufficient grade and too many absences";
        }else if(average < 6.5){
            result = "The student has failed because of insufficient grade !";
        }else if(presence < 0.7){
            result = "The student has failed because of too many Absences !";
        }else{
            result = "You are Approved !";
        }
        document.getElementById("result").innerHTML = result;
    }
}


var sales = [
    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }
];

document.getElementById("course_sales").innerHTML = "";
var totalSales = 0;
for(var a = 0; a < sales.length; a++){
    var sale = sales[a];
    if(!sale.refundRequested){
        var line = "<tr>"
        line += "<td>" + sale.student + "/td";
        line += "<td>"+ sale.date + "/td";
        line += "<td>"+ sale.amount + "/td";
        line += "</tr>";
        document.getElementById("course_sales").innerHTML += line;
        totalSales += sale.amount;
    }
}
document.getElementById("total_sold").innerHTML = totalSales;