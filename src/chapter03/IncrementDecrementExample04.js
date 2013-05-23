var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
            valueOf : function(){
                return -1;
                }
            };
s1++;
alert("increment of s1 " +s1 +" is = " +(s1));
s2++;
alert("increment of s2 " +s2 +" is = " +(s2));
b++;
alert("increment of b" +b +" is = " +(b));
f++;
alert("increment of f" +b +" is = " +(f));
o++;
alert("increment of o" +o +" is = " +(o));
