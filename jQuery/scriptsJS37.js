$("#fullName").keyup(function(){
    $("#fullName").val() == "" ? $("#submit").css("display", "none") : $("#submit").css("display", "inline-block");
})