/*if we are not sure if the value is NULL or Undefined, we can use String(), casting function
 * because it return null or undefined string for those property
 */
var valueNumeric = 10;
var valueBoolean = true;
var valueNull = null;
var valueUndefined;

alert("String(valueNumeric) is = " +String(valueNumeric));
alert("String(valueBoolean) is = " +String(valueBoolean));
alert("String(valueNull) is = " +String(valueNull));
alert("String(valueUndefined) is = " +String(valueUndefined));
