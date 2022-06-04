document.getElementById("click-me").onclick = function(){
    alert("Button clicked ! ");
}
document.getElementById("leave-me").onmouseover = function(){
    alert("Mouse hover the button !");
}

document.getElementById("hover-me").onmouseleave = function(){
    alert("Moved the cursor out of me ! ");
}
document.onkeydown = function(event) {
    alert('You pressed the following key: ' + event.keyCode);
};
