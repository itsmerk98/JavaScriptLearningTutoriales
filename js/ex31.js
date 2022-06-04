var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
}

document.getElementById("shipments").onchange = function(){
    var selectFlied = document.getElementById("shipments").value;
    var leadTime = shipments[selectFlied].leadTime;
    var fee = shipments[selectFlied].fee;

    var orderDate = new Date();
    var deliveryDate = new Date(orderDate.getTime() + (86400000 * leadTime));

    document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0,10);
    document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0,10);
    document.getElementById("delivery_fee").innerHTML = fee;
    console.log(orderDate.toISOString().slice(0,10));
    console.log(deliveryDate.toISOString().slice(0,10));
}


var phones = 
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144763"
        
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-purple-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566960958082"
    }
};
var selectRedio = document.getElementsByName("product");

for(var a=0; a < selectRedio.length; a++){
    selectRedio[a].onchange = function(){
        for(var b=0; b < selectRedio.length; b++){
            if(selectRedio[b].checked){
                var radioItem = selectRedio[b].value;
                document.getElementById("phone_name").innerHTML = phones[radioItem].name;
                document.getElementById("phone_price").innerHTML = phones[radioItem].currency + " " + phones[radioItem].price.toString();
                document.getElementById("phone_image").src = phones[radioItem].imageUrl;

            }
        }
    }
}

var isRunning = false;
var startTime;
var currentTime;
var elapsedTime = 0;
var remainder;
var hours;
var minutes;
var seconds;
var clockInterval;
var formattedTime;
function addLeadingZeto(number){
    if(number < 10){
        return "0" + number.toString();
    }else{
        return number.toString();
    }
}
document.getElementById("start_stop").onclick = function(){
    if(!isRunning){
        isRunning= true;
        if(elapsedTime==0){
            startTime = new Date().getTime();
        }else{
            startTime = new Date().getTime() - elapsedTime;
        }
        clockInterval = window.setInterval(function(){
            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;
            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hours * 3600000);
            minutes = Math.floor(remainder / 60000);
            remainder -= (minutes * 60000);
            seconds = Math.floor(remainder / 1000);
            remainder -= (seconds * 1000);
            formattedTime = addLeadingZeto(hours) + ":" + addLeadingZeto(minutes) + ":" + addLeadingZeto(seconds) + ":" + addLeadingZeto(remainder);
            document.getElementById("stopwatch").innerHTML = formattedTime;
        },100)

    }else{
        window.clearInterval(clockInterval)
        isRunning = false;
    }
}

document.getElementById("reset").onclick = function(){
    startTime = new Date().getTime();
    if(!isRunning){
        elapsedTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00:000";

    }
}