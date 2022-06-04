function addZero(number){
    if(number<10){
        return "0" + number;
    }else{
        return number;
    }
}
window.setInterval(function(){
    var currentTime = new Date();
    var seconds = currentTime.getSeconds();
    var minutes = currentTime.getMinutes();
    var hours = currentTime.getHours();
    
    document.getElementById("seconds").innerHTML = addZero(seconds);
    document.getElementById("minutes").innerHTML = addZero(minutes);
    document.getElementById("hours").innerHTML = addZero(hours);
},1000)