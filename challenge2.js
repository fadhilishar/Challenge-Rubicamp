function deretKaskus(n) {
    let i = 0, a = 3;
    const hasil = [];
    while (i < n) {
        if (a % 30 == 0) {
            hasil.push("KASKUS");
        } else if (a % 5 == 0) {
            hasil.push("KAS");
        } else if (a % 6 == 0) {
            hasil.push("KUS");
        } else {
            hasil.push(a)
        }
        i++;
        a += 3;

    }
    console.log(hasil);
}
deretKaskus(10);
