var num = 15;
switch(true){
    case num < 0:
        alert("Less than 0");
        break;
    case num >= 0 && num <= 10:
        alert("Between 0 and 10");
        break;
    case num > 10 && num <= 20:
        alert("Between 10 and 20");
        break;
    default:
        alert("More than 20");
}
