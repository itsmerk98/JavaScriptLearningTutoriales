function get_user(){
    var u = {
        'name': 'john'
    }
    return u;
}

function greet_user(user) {
    console.log("hey " + user.name + ", welcome bro. !")
    
}
function name(num1, num2) {
    return num1 + num2;
}

var user = get_user();
greet_user(user);

const userName = "ram";
console.log(userName);