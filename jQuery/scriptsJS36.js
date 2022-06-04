$("#add_class").click(function(){
    $("#example-paragraph").addClass("styling");
})

$("#remove_class").click(function(){
    $("#example-paragraph").removeClass("normal");
})

$("#toggle_class").click(function(){
    $("#example-paragraph").toggleClass("styling");
})