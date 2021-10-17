console.log(
  "Selamat datang di permainan Tebak Kata, silahkan isi dengan jawaban yang benar ya!"
);
console.log("");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Tebakan: ",
});
var fs = require("fs");
var data = fs.readFileSync("data.json", "utf8");
const obj = JSON.parse(data);
var i = 0;
console.log("Pertanyaan : " + obj[i].definition);
rl.prompt();
rl.on("line", (line) => {
  if (line == obj[i].term) {
    console.log("Selamat Anda benar");
    i++;
    if (i < 3) {
      console.log("Pertanyaan : " + obj[i].definition);
      rl.prompt();
    } else {
      console.log("Hore Anda Menang");
      process.exit(0);
    }
  } else {
    console.log("Wkwkwkwk Anda kurang beruntung");
    rl.prompt();
  }
});
