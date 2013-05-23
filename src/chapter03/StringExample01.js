/* the toString() is available for all the value which are boolean, object, number
 * strings, but it is not available for value will null and undefined.
 * *?
var age = 11;
var ageAsString = age.toString();
alert("The String of " +age +" is " +ageAsString);
var found = true;
var foundAsString = found.toString();
alert("The String of " +found +" is " +foundAsString);
