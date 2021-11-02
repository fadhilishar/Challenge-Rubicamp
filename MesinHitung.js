class MesinHitung {
  constructor() {
    this.x = 1;
  }
  tambah(a) {
    this.x += a;
    return this;
  }
  kurang(a) {
    this.x -= a;
    return this;
  }
  kali(a) {
    this.x *= a;
    return this;
  }
  bagi(a) {
    this.x /= a;
    return this;
  }
  eksponen(a) {
    this.x = this.x ** a;
    return this;
  }
  akar2() {
    this.x = this.x ** 0.5;
    return this;
  }
  kuadrat() {
    this.x = this.x ** 2;
    return this;
  }
  hasil() {
    return this.x;
  }
}
var Pi = 22 / 7;

export { MesinHitung, Pi };

// var mh = new MesinHitung();

// mh.tambah(10).kurang(5).hasil();
// console.log(mh.hasil());
// mh.tambah(3).kali(4).bagi(6).hasil();
// console.log(mh.hasil());
// mh.x = 7;
// console.log(`nilai sekarang : ${mh.x}`);
// mh.kali(2).kali(Pi).hasil();
// console.log(mh.hasil());
// mh.x = 7;
// mh.kuadrat().kali(Pi).hasil();
// console.log(mh.hasil());
// mh.x = 4;
// mh.eksponen(3).hasil();
// console.log(mh.hasil());
// mh.akar2().hasil();
// console.log(mh.hasil());
// console.log(mh.tambah(5).kurang(10).hasil());

// console.log(Math.pow(7, 5));
// console.log(7 ** 5);
// mh.tambah(6).hasil();
// console.log(Math.ceil(Math.PI * 7));
