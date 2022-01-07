function isPrime(n) {
  if (n < 0) {
    console.log("Input salah, masukkan bilangan bulat positif");
  }
  if (n === 2 || n % 2 === 0) return false;
  for (let index = 3; index <= Math.sqrt(n); index += 2) {
    if (n % index == 0) return false;
  }
  return n > 2;
}

function indexPrime(param1) {
  let bilPrima = 2;
  if (param1 == 1) {
    return bilPrima;
  } else {
    let bilangan = 3,
      countPrime = 1;
    while (countPrime < param1) {
      if (isPrime(bilangan) == true && countPrime == param1 - 1) {
        countPrime += 1;
        bilPrima = bilangan;
      } else if (isPrime(bilangan) == true && countPrime < param1 - 1) {
        bilangan += 2;
        countPrime += 1;
      } else {
        bilangan += 2;
      }
    }
    return bilPrima;
  }
}

console.time();

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));

console.timeEnd();
