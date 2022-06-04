document.getElementById("show_option").onclick = function(){
    var selectField = document.getElementById("options");
    var selectOption = selectField.options.selectedIndex;
    var selectValue = selectField.options[selectOption].innerHTML;
    document.getElementById("selected_option").innerHTML = selectValue;
}

document.getElementById("show_radio").onclick = function () {
    var radio = document.getElementsByName("gender");
    var radio_selected;
    for (var a = 0;  a < radio.length; a++) {
        if (radio[a].checked) {
            radio_selected = radio[a].value;
        }
    }
    document.getElementById("selected_radio").innerHTML = radio_selected;
};

document.getElementById("show_check").onclick = function () {
    var check = document.getElementsByName("interest");
    document.getElementById("selected_check").innerHTML = "";
    for (var b = 0;  b < check.length; b++) {
        if (check[b].checked) {
            document.getElementById("selected_check").innerHTML += '<li>' + check[b].value + '</li>';
        }
    }
};