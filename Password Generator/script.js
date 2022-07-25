function generate(){
    var nothing = "";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var special = "!@#$%&*?";

    var isLower = document.getElementById("lowerCheck").checked;
    var isUpper = document.getElementById("upperCheck").checked;
    var isNumber = document.getElementById("numberCheck").checked;
    var isSpecial = document.getElementById("specialCheck").checked;

    var pass = "";

    var all = "";

    if(isLower){
        all += lower
    }
    if(isUpper){
        all += upper
    }
    if(isNumber){
        all += numbers
    }
    if(isSpecial){
        all += special
    }

    var lenght = document.getElementById("lenghtInput").value;

    for (var i = 0, n = all.length; i < lenght; ++i){
        pass += all.charAt(Math.floor(Math.random() * n))
    }
    console.log(pass)
    document.getElementById("text").innerHTML = "Your password: " + pass
}