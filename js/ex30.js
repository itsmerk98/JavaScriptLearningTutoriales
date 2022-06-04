document.getElementById("education_level").onchange = function(){
    var selectField = document.getElementById("education_level");
    var selectOption = selectField.options.selectedIndex;
    var selectValue = selectField.options[selectOption].innerHTML;
    document.getElementById("selected_level").innerHTML = selectValue;
}
var check = document.getElementsByName("meal");
    for (var a = 0;  a < check.length; a++) {
        check[a].onchange = function () {
            document.getElementById("selected_check").innerHTML = "";
            for (var b = 0;  b < check.length; b++) {
                if (check[b].checked) {
                    document.getElementById("selected_check").innerHTML += '<li>' + check[b].value + '</li>';
                }
            }
        }  
    }