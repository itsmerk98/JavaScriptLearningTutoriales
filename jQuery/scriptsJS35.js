var contentInput = $("#name_field").val();
console.log(contentInput);

$("#options").change(function(){
    var selectFiled = $("#options option:selected").text();
    console.log(selectFiled);
})

$("input[name='gender']").change(function(){
    var selectedValue = $("input[name='gender']:checked").parent().text();
    console.log(selectedValue);
})

$("input[name='interest']").change(function(){
    var selectedCheckBoxs = $("input[name='interest']:checked");
    $.each(selectedCheckBoxs, function(index,value){
        console.log($(value).parent().text());
    })
})