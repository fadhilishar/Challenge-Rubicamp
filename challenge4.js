/*
function isPrime(num) {
  if (num == 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
*/
function indexPrime(param1) {
  var bilPrima = 0;
  if (param1 == 1) {
    let bilPrima = 2;
    console.log(bilPrima);
  } else {
    var countPrima = 1;
    while (countPrima < param1) {
      var bilangan = 3;
      let i = bilangan -1;
      var cekPrima = false;
      while ((i > 1) && (cekPrima ==false)) {
        if (bilangan % i ==0) {
          cekPrima ==false;
        } 
        else if (bilPrima % i !== 0) {
            i -= 1;
            cekPrima = true;
            countPrima += 1;
          
            bilPrima += 1;
          }
        } else if (bilPrima % i == 0) {
          cekPrima = 1;
        } else if (cekPrima == 0) {
          countPrima += 1;
          console.log(bilPrima);
        } else {
          bilPrima += 1;
          cekPrima = 0;
        }
      } if  (cekPrima=true){
      console.log(bilPrima)
    }
      else{
        bilangan +=1;}
    }
    if (cekPrima == true) {
      console.log(bilPrima);
    } else {bilPrima +=1}
    }
  }
}
/*if (i == bilPrima - 1) {
          if (bilPrima % i !== 0) {
            countPrima += 1;
            console.log(countPrima);
            return bilPrima;
          } else {
            bilPrima += 1;
            countPrima += 1;
          }
        } else if (bilPrima % i !== 0) {
          bilPrima += 1;
          countPrima += 1;
        }
      }
    }
  }
}
*/
indexPrime(3);
