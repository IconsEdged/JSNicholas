function doAdd(num1, num2){
    if(arguments.length == 1){
        alert("Add +10 = " +(num1 +10));
    }else if(arguments.length == 2){
        alert("Vanilla Add = " +(num1 + arguments[1]));
    }
}

doAdd(10);
doAdd(10,12);
