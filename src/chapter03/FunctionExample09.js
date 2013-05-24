function doAdd(num1, num2){
    arguments[0] = 10;
    alert("doAdd: " +(arguments[1] +num1));
}

doAdd(30, 40);
