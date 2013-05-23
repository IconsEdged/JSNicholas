var result1 = 5 > 3;    //true
alert("5 > 3 = " +result1);
var result2 = 5 < 3;    //false
alert("5 < 3 = " +result2);
var result3 = "Brick" < "alphabet";     //true, because "B"'s ASCII code is 66 where as "a"'s ASCII code is 97
alert("'Brick' < 'alphabet' = " +result3);
var result4 = "Brick".toLowerCase() < "alphabet".toLowerCase(); //false, "B" is converted to "b"
alert("'Brick'.toLowerCase() < 'alphabet'.toLowerCase() = " +result4);
var result5 = "23" < "3";   //true, "2" ASCII is 50 and "3" is 51
alert("'23' < '3' = " +result5);
var result6 = "23" < 3;     //false, because "23" is converted to numeric 23;
alert("'23' < 3 = " +result6);
var result7 = "a" < 3;      //false, because "a" is converted to NaN
alert("'a' < 3 = " +result7);

