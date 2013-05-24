var num = 0;
for (var i = 1; i < 10; i++) {
    if (i % 5 == 0) {
        break;
    }
    num++;
};

alert("Num = " +num);
