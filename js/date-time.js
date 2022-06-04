var obj = new Date();

var orderDate = new Date("2020-03-26").getTime();
var deliverDate = new Date("2020-04-02").getTime();
var oneDay = 86400000;
var deliveredInDay = Math.floor((deliverDate - orderDate) / oneDay);

document.getElementById("delivery_time").innerHTML = deliveredInDay + " Day";

