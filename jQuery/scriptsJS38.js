$("#hide-button").click(function(){
    $("#hide-button").hide(4000,function(){
        $("#hidden-text").show();
    })
})

$("#toggle-tab").click(function(){
    $("#tab-content").slideToggle();
    $("#toggle-tab").toggleClass("flip");
})