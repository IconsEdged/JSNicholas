/*In most cases, toString() doesnot take any arguments, but when uses with a number value
 * toString() accepts a number which is the radix, in which to outpot the number*/
var number = 10;
alert("number.toString() is = " +number.toString());
alert("number.toString(2) is = " +number.toString(2));
alert("number.toString(8) is = " +number.toString(8));
alert("number.toString(10) is = " +number.toString(10));
alert("number.toString(16) is = " +number.toString(16));

var myString = "hello";
alert("myString.toString() is = " +myString.toString());
/*the below does not produce any error, it just returns the string Hello*/
alert("myString.toString(2) is = " +myString.toString(2));
