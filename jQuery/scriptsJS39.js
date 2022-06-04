$("#animate").click(function(){
    $("#square").animate({
        width: '+=20px',
        height: '+=20px'
    });
}); 

$("#animate").click(function(){

    $("#square").animate({
        width: '+=20px'
    },500);

    $("#square").animate({
        height: '+=20px'
    }),500;

});
