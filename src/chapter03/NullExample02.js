/* Though NULL and Undefined are related, but they have different use, a variable should never set an explicit value
 * to undefined, but when a variable has to behave like a object it should be intilized with NULL
 * */
alert("NULL and Undefined are equal when used with == in js: = " +(null == undefined));
alert("NULL and Undefined are not equal when used === in js: = " +(null === undefined));
