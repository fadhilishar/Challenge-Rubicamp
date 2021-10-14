//Bilangan Prima
function isPrime(m) {
  if (m == 2) {
    return true;
  } else {
    let i = 2,
      count = 0;
    while (i < m) {
      if (m % i == 0) {
        if (i == m - 1 && count == 0) {
          return true;
        } else {
          i++;
          count += 1;
          return false;
        }
      } else if (i == m - 1 && count == 0) {
        i++;
        return true;
      } else {
        i++;
      }
    }
  }
}
function indexPrime(param1) {
  let bilPrima = 2;
  if (param1 == 1) {
    console.log(bilPrima);
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
    console.log(bilPrima);
  }
}

indexPrime(4);
indexPrime(500);
indexPrime(37786);

//console.log(isPrime(71));
/*
function indexPrime(param1) {
  let bilPrima = 2;
  if ((param1 = 1)) {
    return 2;
  } else i = 2;
  if (i < param1) {
    if (isPrime(bilPrima) == true) {
    }
  }
}
*/
