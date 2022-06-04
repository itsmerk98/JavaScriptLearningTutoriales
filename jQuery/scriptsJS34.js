var content = $("#sample_text").html();
console.log(content);
 $("#sample_text").html("New content ");

 var text_content = $("#sample-text-only").text();
 console.log(text_content);


 $("#change_image").click(function(){
     $("#imagem_js").attr("src","https://pluspng.com/img-png/logo-javascript-png-file-unofficial-javascript-logo-svg-1024.png")
     $("#change_image").hide();
 })