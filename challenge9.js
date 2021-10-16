function square(param1) {
  let i = 0,
    j = 0,
    k = 0,
    arrSquare = [],
  for (i = 0; i < param1; i++) {
    arrSquare[i] = [];
    for (j = 0; j < param1; j++) {
      arrSquare[i][j] = k;
      k++;
    }
  }
  return arrSquare;
}
function spiral(param1) {
  let i = 0,
    j = 0,
    k = 0,
    x = 0,
    y = 1,
    arrHasil = [],
    arrTemp = square(param1),
    count = param1 * param1,
    param2 = 0;
  if (param1 % 2 == 0) {
    param2 = param1 / 2 + 1;
  } else {
    param2 = (param1 + 1) / 2;
  }
  for (k = 1; k < param2; k++) {
    for (j = y - 1; j < param1 - y; j++) {
      arrHasil[x] = arrTemp[i][j];
      x++;
    }
    for (i = y - 1; i < param1 - y; i++) {
      arrHasil[x] = arrTemp[i][j];
      x++;
    }
    for (j = param1 - y; j > y - 1; j--) {
      arrHasil[x] = arrTemp[i][j];
      x++;
    }
    for (i = param1 - y; i > y - 1; i--) {
      arrHasil[x] = arrTemp[i][j];
      x++;
    }
    y++;
    i++;
  }
  if (param1 % 2 == 1) {
    arrHasil[x] = (count - 1) / 2;
  }
  console.log(arrHasil);
}
spiral(5);
spiral(6);
spiral(7);
