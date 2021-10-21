var i = 0;
var j = 0;
var k = 0;
var x = 1;
var arrStr = [];
var jsonString = "";
var strJob = "";
var jobTag = 0;
var arrJob = [];
var countJob = 0;
var sortJob = [];
var fs = require("fs");
const { argv } = require("process");
var bacaJson = fs.readFileSync("listKerja.json", "utf8");
var bacaJson2 = fs.readFileSync("dataTag.json", "utf8");
var arrObj = JSON.parse(bacaJson);
var arrObj2 = JSON.parse(bacaJson2);
var argV = process.argv;
// console.log(bacaJson);
// console.log(argv);
// console.log(arrObj[0].complete);
if (argV.length < 3 || argV[2] == "help") {
  console.log(">>> JS TODO <<<");
  console.log("$ node todo.js <command>");
  console.log("$ node todo.js list");
  console.log("$ node todo.js task <task_id>");
  console.log("$ node todo.js add <task_content>");
  console.log("$ node todo.js delete <task_id>");
  console.log("$ node todo.js complete <task_id>");
  console.log("$ node todo.js uncomplete <task_id>");
  console.log("$ node todo.js list:outstanding asc|desc");
  console.log("$ node todo.js list:completed asc|desc");
  console.log(
    "$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>"
  );
  console.log("$ node todo.js filter:<tag_name>");
  process.exit(0);
  //console.log(argV);
  // rl.prompt();
  // rl.on("line", (line) => {
  //   process.exit(0);
  // });
} else if (argV[2] == "add") {
  i = 3;
  while (i < argV.length) {
    arrStr[j] = argV[i];
    i++;
    j++;
    // console.log("halow");
    // console.log(arrJob);
  }
  if (argV.length > 3) {
    strJob = arrStr.join(" ");

    arrObj.push({ Job: strJob, complete: false });

    console.log(`"${strJob}" telah ditambahkan`);

    jsonString = JSON.stringify(arrObj);
    // console.log(typeof jsonString);

    fs.writeFile("listKerja.json", jsonString, function (err) {
      if (err) throw err;
      // console.log("Saved!");
    });
  }
} else if (argV[2] == "list") {
  console.log("Daftar Pekerjaan");
  for (i = 0; i < arrObj.length; i++) {
    if (arrObj[i].complete == false) {
      console.log(`${i + 1}. [ ] ${arrObj[i].Job}`);
    } else {
      console.log(`${i + 1}. [x] ${arrObj[i].Job}`);
    }
  }
  process.exit(0);
} else if (argV[2] == "task") {
  if (arrObj[argV[3] - 1].complete == false) {
    console.log(`${argV[3]}. [ ] ${arrObj[argV[3] - 1].Job}`);
  } else {
    console.log(`${argV[3]}. [x] ${arrObj[argV[3] - 1].Job}`);
  }
} else if (argV[2] == "delete") {
  arrObj.splice(argV[3] - 1, 1);
  console.log(arrObj);
  jsonString = JSON.stringify(arrObj);
  console.log(`${jsonString} telah dihapus dari daftar`);
  fs.writeFile("listKerja.json", jsonString, function (err) {
    if (err) throw err;
  });
} else if (argV[2] == "complete") {
  arrObj[argV[3] - 1].complete = true;
  jsonString = JSON.stringify(arrObj);
  fs.writeFile("listKerja.json", jsonString, function (err) {
    if (err) throw err;
    console.log(`${arrObj[argV[3] - 1].Job} telah selesai`);
  });
} else if (argV[2] == "uncomplete") {
  arrObj[argV[3] - 1].complete = false;
  jsonString = JSON.stringify(arrObj);
  fs.writeFile("listKerja.json", jsonString, function (err) {
    if (err) throw err;
    console.log(`${arrObj[argV[3] - 1].Job} status selesai dibatalkan`);
  });
} else if (argV[2] == "list:outstanding") {
  k = 1;
  if (argV[3] == "ascending") {
    for (i = 0; i < arrObj.length; i++) {
      if (arrObj[i].complete == false) {
        console.log(`${k}. [ ] ${arrObj[i].Job}`);
        k++;
      }
    }
  } else if (argV[3] == "descending") {
    for (i = arrObj.length - 1; i > -1; i--) {
      if (arrObj[i].complete == false) {
        console.log(`${k}. [ ] ${arrObj[i].Job}`);
        k++;
      }
    }
  }
} else if (argV[2] == "list:completed") {
  k = 1;
  if (argV[3] == "ascending") {
    for (i = 0; i < arrObj.length; i++) {
      if (arrObj[i].complete == true) {
        console.log(`${k}. [x] ${arrObj[i].Job}`);
        k++;
      }
    }
  } else if (argV[3] == "descending") {
    // console.log(arrObj.length + 579);
    // console.log(arrObj);
    for (i = arrObj.length - 1; i > -1; i--) {
      // console.log(i);
      if (arrObj[i].complete == true) {
        console.log(`${k}. [x] ${arrObj[i].Job}`);
        k++;
      }
    }
  }
} else if (argV[2] == "tag") {
  i = 4;
  j = 0;
  while (i < argV.length) {
    strJob = argV[i];
    arrObj2.push({ tag: strJob, inJob: argV[3] - 1 });
    i++;
  }
  jsonString = JSON.stringify(arrObj2);
  fs.writeFile("dataTag.json", jsonString, function (err) {
    if (err) throw err;
  });
} else {
  i = 0;
  while (i < argV[2].length) {
    i++;
  } //dia yg slice di bawah ini mau ngambil kata setelah kata filter
  strJob = argV[2].slice(7, i);
  j = 0;
  // console.log(arrObj2[j].tag);
  // console.log(strJob);
  while (strJob !== arrObj2[j].tag) {
    j++;
  }
  // console.log(arrObj2[j].tag);
  if (strJob == arrObj2[j].tag) {
    jobTag = arrObj2[j].inJob;
    if (arrObj[jobTag].complete == false) {
      console.log(`${i + 1}. [ ] ${arrObj[jobTag].Job}`);
    } else {
      console.log(`${i + 1}. [x] ${arrObj[jobTag].Job}`);
    }
    // console.log("");
  }
}
