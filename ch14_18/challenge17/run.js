import { Pi, MesinHitung } from "./MesinHitung.js";

var mh = new MesinHitung();

mh.tambah(10).kurang(5).hasil();
console.log(mh.hasil());
mh.tambah(3).kali(4).bagi(6).hasil();
console.log(mh.hasil());
mh.x = 7;
console.log(`nilai sekarang : ${mh.x}`);
mh.kali(2).kali(Pi).hasil();
console.log(mh.hasil());
mh.x = 7;
mh.kuadrat().kali(Pi).hasil();
console.log(mh.hasil());
mh.x = 4;
mh.eksponen(3).hasil();
console.log(mh.hasil());
mh.akar2().hasil();
console.log(mh.hasil());
