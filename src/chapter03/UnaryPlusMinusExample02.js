var s1 = "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
            valueOf: function(){
                return -1;
            }
        };
s1 = -s1;
alert("s1 = " +s1);
s2 = -s2;
alert("s2 = " +s2);
s3 = -s3;
alert("s3 = " +s3);
b = -b;
alert("b = " +b);
f = -f;
alert("f = " +f);
o = -o;
alert("o = " +o);

