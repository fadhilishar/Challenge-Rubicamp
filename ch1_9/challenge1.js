function sum() {
    let i = 0, x = 0;
    while (i < arguments.length) {
        x = x + arguments[i]
        i++
    }
    console.log(x)
}

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);