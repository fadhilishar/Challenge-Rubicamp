var argV = process.argv;
if (!argV[2]) {
  console.log("Tolong sertakan nama file sebagai inputan soalnya");
  console.log("Misalnya 'node solution.js data.json");
  process.exit(1);
} else {
  var fs = require("fs");
  var data = fs.readFileSync(argV[2], "utf8");
}
console.log(
  "Selamat datang di permainan Tebak-tebakan, kamu akan diberikan pertanyaan dari file ini 'data.json'."
);
console.log("Untuk bermain, jawablah dengan jawaban yang sesuai.");
console.log(
  "Gunakan 'skip' untuk menangguhkan pertanyaannya, dan di akhir pertanyaan akan ditanyakan lagi."
);
console.log("");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Jawaban: ",
});
const obj = JSON.parse(data);
var i = 0;
var a = obj.length;
var b = 0;
var pertanyaanSkip = [];
while (i < a) {
  pertanyaanSkip[i] = 0;
  i++;
}
i = 0;
var countSalah = 0;
var countSkip = 0;
console.log("Pertanyaan: " + obj[i].definition);
rl.prompt();
rl.on("line", (line) => {
  if (i < a) {
    if (line.toLowerCase() == obj[i].term.toLowerCase()) {
      countSalah = 0;
      console.log("");
      console.log("Anda Beruntung!");
      if (i == a - 1 && countSkip == 0) {
        console.log("");
        console.log("Anda Berhasil");
        console.log("");
        process.exit(0);
      } else {
        if (i == a - 1) {
          b = 0;
          while (pertanyaanSkip[b] == 0) {
            b++;
          }
          i++;
          console.log("");
          console.log("Pertanyaan: " + obj[b].definition);
          rl.prompt();
        } else {
          i++;
          console.log("");
          console.log("Pertanyaan: " + obj[i].definition);
          rl.prompt();
        }
      }
    } else if (line.toLowerCase() == "skip") {
      pertanyaanSkip[i] = 1;
      countSalah = 0;
      countSkip++;
      i++;
      if (i > a - 1) {
        b = 0;
        while (pertanyaanSkip[b] == 0) {
          b++;
        }
        console.log("");
        console.log("Pertanyaan: " + obj[b].definition);
        rl.prompt();
      } else {
        console.log("");
        console.log("Pertanyaan: " + obj[i].definition);
        rl.prompt();
      }
    } else if (countSkip == 0) {
      countSalah++;
      console.log("");
      console.log(
        "Anda kurang Beruntung! anda telah salah " +
          countSalah +
          " kali, silahkan coba lagi."
      );
      rl.prompt();
    } else {
      countSalah++;
      console.log("");
      console.log(
        "Anda kurang Beruntung! anda telah salah " +
          countSalah +
          " kali, silahkan coba lagi."
      );
      rl.prompt();
    }
  } else {
    if (line.toLowerCase() == obj[b % a].term.toLowerCase()) {
      countSalah = 0;
      console.log("");
      console.log("Anda Beruntung!");
      console.log("");
      countSkip--;
      pertanyaanSkip[b % a] = 0;
      if (countSkip !== 0) {
        while (pertanyaanSkip[b % a] == 0) {
          b++;
        }
      }
      if (countSkip == 0) {
        console.log("Anda Berhasil!");
        process.exit(0);
      } else {
        console.log("Pertanyaan: " + obj[b % a].definition);
        rl.prompt();
      }
    } else if (line.toLowerCase() == "skip") {
      if (countSkip == a) {
        b++;
        console.log("");
        console.log("Pertanyaan: " + obj[b % a].definition);
        rl.prompt();
      } else {
        while (pertanyaanSkip[b] == 0) {
          b++;
        }
        console.log("");
        console.log("Pertanyaan: " + obj[b % a].definition);
        rl.prompt();
      }
    } else {
      countSalah++;
      console.log("");
      console.log(
        "Anda kurang Beruntung! anda telah salah " +
          countSalah +
          " kali, silahkan coba lagi."
      );
      rl.prompt();
    }
  }
});
