function doAdd(){
    if(arguments.length == 1){
        alert("Add +10 = " +(arguments[0] +10));
    }else if(arguments.length == 2){
        alert("Vanilla Add = " +(arguments[0] + arguments[1]));
    }
}

doAdd(10);
doAdd(10,12);
