var employees = [
        
    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']
        
    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']
        
    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
    }

];
document.getElementById("children").innerHTML= "";

for(var a=0; a<employees.length; a++){
    var childrenList = employees[a].children;
    for(var b=0; b<childrenList.length; b++){
        var child = childrenList[b];
        document.getElementById("children").innerHTML+= "<li>"+child+"</li>";
    }
}