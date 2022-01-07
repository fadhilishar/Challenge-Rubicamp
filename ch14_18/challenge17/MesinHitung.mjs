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
