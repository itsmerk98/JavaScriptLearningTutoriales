function celsiusToFahrenheit(celsius){
  var fahrenheit = (9 * celsius / 5) + 32;
  return fahrenheit;
}

document.getElementById("convert").onclick = function () {
  var tempereCelsius = document.getElementById("temp_celsius").value;
  if (tempereCelsius == "") {
    alert("The temperature informed is invalid !");
  } else {
    document.getElementById("temp_fahr").innerHTML = celsiusToFahrenheit(tempereCelsius); 
  }
}

var currentYear = 2022;
while (currentYear <= 2050) {
  document.getElementById("anos_copa").innerHTML += '<li>' + currentYear + '<li>';
  currentYear += 4;
}

//for (var i=1; i<=4; i++) {(function (j) { setTimeout(function () { console.log(j); }, j * 1000); })(i) }

document.getElementById("calculate").onclick = function () {
  var grade1 = document.getElementById("grade1").value;
  var grade2 = document.getElementById("grade2").value;
  var absences = document.getElementById("absences").value;
  var totalclass = 20;
  if (grade1 == "" || grade2 == "" || absences == "") {
    alert("all fields must be filled !");
  }else {
    var average = (grade1 + grade2) / 2;
    var presence =(totalclass - absences) / totalclass;
    var result;
    if (average <= 6.5 && presence <= 0.7) {
      result = "The student has failed because of insufficient grade and too many absences.";
    } else if (average <= 6.5) {
      result="The student has failed because of insufficient grade."
    } else if (presence <= 0.7) {
      result = "The student has failed because of too many absences.";
    } else {
      result = "The student has been approved !";
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
var totalSales = 0;
for (var a = 0; a < sales.length; a++){
  var sale = sales[a];
  if (!sale.refundRequested) {    
    var line = "<tr>";
    line += "<td>" + sale.student + "</td>";
    line += "<td>" + sale.date + "</td>";
    line += "<td>" + sale.amount.toString() + "</td>";
    line += "</tr>";
    document.getElementById("course_sales").innerHTML += line;
    totalSales += sale.amount;
  }
}
document.getElementById("total_sold").innerHTML = totalSales;
window.onmousemove = function (e) {
  console.log(e.pageY);

}

var orderDate = new Date("2020-03-26");
var deliveryDate = new Date("2020-04-02");
var loeadTime = math.floor((deliveryDate - orderDate) / 86400000);
document.getElementById("delivery_time").innerHTML = loeadTime;