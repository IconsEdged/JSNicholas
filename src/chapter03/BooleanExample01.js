var message = "hello";
var meesageAsBoolean = Boolean(message);
alert("Boolean of " +message +" is: " +meesageAsBoolean);
var emptyString = "";
alert("Boolean of empty String is " +Boolean(emptyString));
var nonZeronumber = 100;
alert("Boolean of " +nonZeronumber +" is " +Boolean(nonZeronumber));
var zeroNumber = 0;
alert("Boolean of " +zeroNumber+" is " +Boolean(zeroNumber));
var nullObject = null;
alert("Boolean of " +nullObject +" is " +Boolean(nullObject));
var validObject = {
                    name : "Animesh"
                    };
alert ("Boolean of " +validObject.toString() +" is " +Boolean(validObject));
alert("Boolean of undefined is " +Boolean(undefined));

