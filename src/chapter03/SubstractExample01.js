var result1 = 5 - true; //4 because true is converted to 1
alert(result1);
var result2 = NaN - 1;  //NaN
alert(result2);
var result3 = 5 - 3;    //2
alert(result3);
var result4 = 5 - '';   //5 '' is converted to 0
alert(result4);
var result5 = 5 - '2';  //3 '2' is converted to 2
alert(result5);
var result6 = 5 - null; //5 null is converted to 0
alert(result6);
