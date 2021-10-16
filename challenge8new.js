//Abil Makrifat, [15.10.21 12:50]
function jadiArray(wordnumber) {
  let a = 0,
    i = 0,
    pecahBilangan = "",
    tabelBilangan = [],
    hasilUbah = [];
  while (i < 10) {
    while (a < wordnumber.length) {
      if (wordnumber.charAt(a) == "#") {
        tabelBilangan[a] = i;
        pecahBilangan += tabelBilangan[a];
        a++;
      } else {
        tabelBilangan[a] = wordnumber.charAt(a);
        pecahBilangan += tabelBilangan[a];
        a++;
      }
    }
    hasilUbah[i] = pecahBilangan * "1";
    pecahBilangan = "";
    i++;
    a = 0;
  }
  return hasilUbah;
}

function pola(str) {
  let i = 0;
  let j = 0;
  const b = str.split(" ");
  let temp1 = b[0];
  let arrTemp1 = jadiArray(temp1);
  let pengali = b[2] * "1";
  let temp2 = b[4];
  let arrTemp2 = jadiArray(temp2);
  let arrHasil = [];
  let arr = [];
  for (i = 0; i < 10; i++) {
    arrHasil[i] = [];
    for (j = 0; j < 10; j++) {
      arrHasil[i][j] = i + "," + j;
      if (arrTemp1[i] * pengali == arrTemp2[j]) {
        arr = arrHasil[i][j].split(",");
        arr[0] = Number(arr[0]);
        arr[1] = Number(arr[1]);
        return arr;
      }
    }
  }
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));
