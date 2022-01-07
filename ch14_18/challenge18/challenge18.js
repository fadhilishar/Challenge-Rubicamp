// USERNAME : fadhil
// PASSWORD : 12345

console.log(
  `============================================================================`
);
console.log(
  "Welcome to Universitas Pendidikan Indonesia\nJl Setiabudhi No. 255"
);
console.log(
  `============================================================================`
);
var Table = require("cli-table");

const sqlite3 = require("sqlite3").verbose();
const dbFile = __dirname + "/university.db";
let db = new sqlite3.Database(dbFile, sqlite3.OPEN_READWRITE, (err) => {
  if (err) throw err;
});
module.exports = db;

var sql11 = "SELECT * FROM mahasiswa";
var sql21 = "SELECT * FROM jurusan";
var sql31 = "SELECT * FROM dosen";
var sql41 = "SELECT * FROM matakuliah";
var sql51 = "SELECT * FROM kontrak";

var sql12 = "SELECT * FROM mahasiswa WHERE nim=?";
var sql22 = "SELECT * FROM jurusan WHERE idjurusan=?";
var sql32 = "SELECT * FROM dosen WHERE nip=?";
var sql42 = "SELECT * FROM matakuliah WHERE kodematkul=?";
var sql52 = "SELECT * FROM kontrak WHERE idkontrak=?";

var sql13 =
  "INSERT INTO mahasiswa(nim,namamahasiswa,idjurusan,alamat) VALUES(?,?,?,?)";
var sql23 = "INSERT INTO jurusan(idjurusan,namajurusan) VALUES(?,?)";
var sql33 = "INSERT INTO dosen(nip,namadosen,idjurusan) VALUES(?,?,?)";
var sql43 =
  "INSERT INTO matakuliah(kodematkul,namamatkul,sks,idjurusan) VALUES(?,?,?,?)";
var sql53 =
  "INSERT INTO kontrak(idkontrak,nilai,nim,kodematkul,nip) VALUES(?,?,?,?,?)";

var sql14 = "DELETE FROM mahasiswa WHERE nim=?";
var sql24 = "DELETE FROM jurusan WHERE idjurusan=?";
var sql34 = "DELETE FROM dosen WHERE nip=?";
var sql44 = "DELETE FROM matakuliah WHERE kodematkul=?";
var sql54 = "DELETE FROM kontrak WHERE idkontrak=?";

function mauApa(n) {
  db.serialize(function () {
    switch (n) {
      case 11:
        db.all(sql11, (err, rows) => {
          if (err) throw err;
          if (rows) {
            var table1 = new Table({
              head: ["NIM", "Nama", "Alamat", "Jurusan"],
            });
            rows.forEach((mahasiswa) => {
              table1.push([
                mahasiswa.nim,
                mahasiswa.namamahasiswa,
                mahasiswa.alamat,
                mahasiswa.idjurusan,
              ]);
            });
            console.log(table1.toString());
            pilihOpsi(1);
          } else {
            console.log(`tidak ada data/hasil`);
            pilihOpsi(1);
          }
        });
        break;
      case 12:
        rl.question("Masukkan NIM :", (answer) => {
          mahasiswanim = answer.toUpperCase();
          db.get(sql12, [mahasiswanim], (err, row) => {
            if (err) throw err;
            if (row) {
              console.log(
                `============================================================================`
              );
              console.log("student details");
              console.log(
                `============================================================================`
              );
              console.log(`id        : ${row.nim}`);
              console.log(`nama      : ${row.namamahasiswa}`);
              console.log(`alamat    : ${row.alamat}`);
              console.log(`jurusan   : ${row.idjurusan}`);
              pilihOpsi(1);
            } else {
              console.log(`mahasiswa dengan nim ${answer} tidak terdaftar`);
              console.log(
                `============================================================================`
              );
              mauApa(12);
            }
          });
        });
        break;
      case 13:
        console.log(`lengkapi data di bawah ini:`);
        rl.question("NIM:", (answer1) => {
          rl.question("nama:", (answer2) => {
            rl.question("jurusan:", (answer3) => {
              rl.question("alamat:", (answer4) => {
                let lengkapi = [answer1, answer2, answer3, answer4];
                db.run(sql13, lengkapi, (err) => {
                  if (err) throw err;
                  mauApa(11);
                });
              });
            });
          });
        });
        break;
      case 14:
        rl.question("Masukkan NIM mahasiswa yang akan dihapus:", (answer) => {
          let nimanswer = answer;
          db.run(sql14, [nimanswer], (err, row) => {
            if (!err) {
              console.log(`mahasiswa dengan NIM: ${answer} telah dihapus`);
              console.log(
                `============================================================================`
              );
            }
          });
          mauApa(11);
        });
        break;
      case 21:
        db.all(sql21, (err, rows) => {
          if (err) throw err;
          if (rows) {
            var table2 = new Table({ head: ["ID", "Nama"] });
            rows.forEach((jurusan) => {
              table2.push([jurusan.idjurusan, jurusan.namajurusan]);
            });
            console.log(table2.toString());
            pilihOpsi(2);
          } else {
            console.log(`tidak ada data/hasil`);
            pilihOpsi(2);
          }
        });
        break;
      case 22:
        rl.question("Masukkan ID Jurusan :", (answer) => {
          let jurusanid = answer.toUpperCase();
          db.get(sql22, [jurusanid], (err, row) => {
            if (err) throw err;
            if (row) {
              console.log(
                `============================================================================`
              );
              console.log("major details");
              console.log(
                `============================================================================`
              );
              console.log(`id      : ${row.idjurusan}`);
              console.log(`nama    : ${row.namajurusan}`);
              pilihOpsi(2);
            } else {
              console.log(`jurusan dengan id ${answer} tidak terdaftar`);
              console.log(
                `============================================================================`
              );
              mauApa(22);
            }
          });
        });
        break;
      case 23:
        console.log(`lengkapi data di bawah ini:`);
        rl.question("ID Jurusan:", (answer1) => {
          rl.question("nama jurusan:", (answer2) => {
            let lengkapi = [answer1, answer2];
            db.run(sql23, lengkapi, (err) => {
              if (err) throw err;
              mauApa(21);
            });
          });
        });
        break;
      case 24:
        rl.question("Masukkan ID jurusan yang akan dihapus:", (answer) => {
          let idjurusananswer = answer;
          db.run(sql24, [idjurusananswer], (err) => {
            if (!err) {
              console.log(`jurusan dengan ID Jurusan: ${answer} telah dihapus`);
              console.log(
                `============================================================================`
              );
            }
          });
          mauApa(21);
        });
        break;
      case 31:
        db.all(sql31, (err, rows) => {
          if (err) throw err;
          if (rows) {
            var table3 = new Table({ head: ["ID", "Nama"] });
            rows.forEach((dosen) => {
              table3.push([dosen.nip, dosen.namadosen]);
            });
            console.log(table3.toString());
            pilihOpsi(3);
          } else {
            console.log(`tidak ada data/hasil`);
            pilihOpsi(3);
          }
        });
        break;
      case 32:
        rl.question("Masukkan NIP :", (answer) => {
          dosennip = answer.toUpperCase();
          db.get(sql32, [dosennip], (err, row) => {
            if (err) throw err;
            if (row) {
              console.log(
                `============================================================================`
              );
              console.log("lecturer details");
              console.log(
                `============================================================================`
              );
              console.log(`id        : ${row.nip}`);
              console.log(`nama      : ${row.namadosen}`);
              console.log(`jurusan   : ${row.idjurusan}`);
              pilihOpsi(3);
            } else {
              console.log(`dosen dengan nip ${answer} tidak terdaftar`);
              console.log(
                `============================================================================`
              );
              mauApa(32);
            }
          });
        });
        break;
      case 33:
        console.log(`lengkapi data di bawah ini:`);
        rl.question("NIP:", (answer1) => {
          rl.question("nama dosen:", (answer2) => {
            rl.question("jurusan:", (answer3) => {
              let lengkapi = [answer1, answer2, answer3];
              db.run(sql33, lengkapi, (err) => {
                if (err) throw err;
                mauApa(31);
              });
            });
          });
        });
        break;
      case 34:
        rl.question("Masukkan NIP dosen yang akan dihapus:", (answer) => {
          let nipanswer = answer;
          db.run(sql34, [nipanswer], (err) => {
            if (!err) {
              console.log(`dosen dengan NIP: ${answer} telah dihapus`);
              console.log(
                `============================================================================`
              );
            }
          });
          mauApa(31);
        });
        break;
      case 41:
        db.all(sql41, (err, rows) => {
          if (err) throw err;
          if (rows) {
            var table4 = new Table({
              head: ["Kode", "Nama Matakuliah", "SKS", "Jurusan"],
            });
            rows.forEach((matakuliah) => {
              table4.push([
                matakuliah.kodematkul,
                matakuliah.namamatkul,
                matakuliah.sks,
                matakuliah.idjurusan,
              ]);
            });
            console.log(table4.toString());
            pilihOpsi(4);
          } else {
            console.log(`tidak ada data/hasil`);
            pilihOpsi(4);
          }
        });
        break;
      case 42:
        rl.question("Masukkan Kode Matakuliah :", (answer) => {
          matkulkode = answer.toUpperCase();
          db.get(sql42, [matkulkode], (err, row) => {
            if (err) throw err;
            if (row) {
              console.log(
                `============================================================================`
              );
              console.log("subject details");
              console.log(
                `============================================================================`
              );
              console.log(`id        : ${row.kodematkul}`);
              console.log(`nama      : ${row.namamatkul}`);
              console.log(`sks       : ${row.sks}`);
              console.log(`jurusan   : ${row.idjurusan}`);
              pilihOpsi(4);
            } else {
              console.log(`Matakuliah dengan kode ${answer} tidak terdaftar`);
              console.log(
                `============================================================================`
              );
              mauApa(42);
            }
          });
        });
        break;
      case 43:
        console.log(`lengkapi data di bawah ini:`);
        rl.question("Kode Matakuliah:", (answer1) => {
          rl.question("nama matakuliah:", (answer2) => {
            rl.question("sks:", (answer3) => {
              rl.question("jurusan:", (answer4) => {
                let lengkapi = [
                  answer1.toUpperCase(),
                  answer2,
                  answer3,
                  answer4,
                ];
                db.run(sql43, lengkapi, (err) => {
                  if (err) throw err;
                  mauApa(41);
                });
              });
            });
          });
        });
        break;
      case 44:
        rl.question("Masukkan Kode Matakuliah yang akan dihapus:", (answer) => {
          let kodematkulanswer = answer.toUpperCase();
          db.run(sql44, [kodematkulanswer], (err) => {
            if (!err) {
              console.log(
                `matakuliah dengan Kode Matakuliah: ${answer} telah dihapus`
              );
              console.log(
                `============================================================================`
              );
            }
          });
          mauApa(41);
        });
        break;
      case 51:
        db.all(sql51, (err, rows) => {
          if (err) throw err;
          if (rows) {
            var table5 = new Table({
              head: ["ID Kontrak", "Nilai", "NIM", "ID Matkul", "NIP"],
            });
            rows.forEach((kontrak) => {
              table5.push([
                kontrak.idkontrak,
                kontrak.nilai,
                kontrak.nim,
                kontrak.kodematkul,
                kontrak.nip,
              ]);
            });
            console.log(table5.toString());
            pilihOpsi(5);
          } else {
            console.log(`tidak ada data/hasil`);
            pilihOpsi(5);
          }
        });
        break;
      case 52:
        rl.question("Masukkan ID Kontrak :", (answer) => {
          kontrakid = answer.toUpperCase();
          db.get(sql52, [kontrakid], (err, row) => {
            if (err) throw err;
            if (row) {
              console.log("contract details");
              console.log(`id           : ${row.idkontrak}`);
              console.log(`nilai        : ${row.nilai}`);
              console.log(`nim          : ${row.nim}`);
              console.log(`kodematkul   : ${row.kodematkul}`);
              console.log(`nip          : ${row.nip}`);
              pilihOpsi(5);
            } else {
              console.log(`kontrak dengan id ${answer} tidak terdaftar`);
              pilihOpsi(5);
            }
          });
        });
        break;
      case 53:
        console.log(`lengkapi data di bawah ini:`);
        rl.question("ID Kontrak:", (answer1) => {
          rl.question("nilai:", (answer2) => {
            rl.question("nim:", (answer3) => {
              rl.question("ID Matkul:", (answer4) => {
                rl.question("nip:", (answer5) => {
                  let lengkapi = [
                    answer1.toUpperCase(),
                    answer2.toUpperCase(),
                    answer3,
                    answer4,
                    answer5,
                  ];
                  db.run(sql53, lengkapi, (err) => {
                    if (err) throw err;
                    mauApa(51);
                  });
                });
              });
            });
          });
        });
        break;
      case 54:
        rl.question("Masukkan ID kontrak yang akan dihapus:", (answer) => {
          let idkontrakanswer = answer.toUpperCase();
          db.run(sql54, [idkontrakanswer], (err) => {
            if (!err) {
              console.log(`kontrak dengan ID kontrak: ${answer} telah dihapus`);
              console.log(
                `============================================================================`
              );
            }
          });
          mauApa(51);
        });
        break;
    }
  });
}
function pilihOpsi(n) {
  switch (n) {
    case 1:
      console.log(
        `============================================================================`
      );
      console.log("silahkan pilih opsi di bawah ini");
      console.log(
        `[1] daftar murid\n[2] cari murid\n[3] tambah murid\n[4] hapus murid\n[5] kembali`
      );
      console.log(
        `============================================================================`
      );
      rl.question("masukkan salah satu no. dari opsi diatas:", (answer) => {
        console.log(
          `============================================================================`
        );
        if (Number(answer) > 5 || Number(answer) < 1) {
          console.log(`input salah, silakan pilih opsi dari 1-5`);
          pilihOpsi(1);
        } else {
          switch (Number(answer)) {
            case 1:
              mauApa(11);
              break;
            case 2:
              mauApa(12);
              break;
            case 3:
              mauApa(13);
              break;
            case 4:
              mauApa(14);
              break;
            case 5:
              tampilOpsi();
              break;
          }
        }
      });
      break;
    case 2:
      console.log(
        `============================================================================`
      );
      console.log("silahkan pilih opsi di bawah ini");
      console.log(
        `[1] daftar jurusan\n[2] cari jurusan\n[3] tambah jurusan\n[4] hapus jurusan\n[5] kembali`
      );
      console.log(
        `============================================================================`
      );
      rl.question("masukkan salah satu no. dari opsi diatas:", (answer) => {
        console.log(
          `============================================================================`
        );
        if (Number(answer) > 5 || Number(answer) < 1) {
          console.log(`input salah, silakan pilih opsi dari 1-5`);
          pilihOpsi(2);
        } else {
          switch (Number(answer)) {
            case 1:
              mauApa(21);
              break;
            case 2:
              mauApa(22);
              break;
            case 3:
              mauApa(23);
              break;
            case 4:
              mauApa(24);
              break;
            case 5:
              tampilOpsi();
              break;
          }
        }
      });

      break;
    case 3:
      console.log(
        `============================================================================`
      );
      console.log("silahkan pilih opsi di bawah ini");
      console.log(
        `[1] daftar dosen\n[2] cari dosen\n[3] tambah dosen\n[4] hapus dosen\n[5] kembali`
      );
      console.log(
        `============================================================================`
      );
      rl.question("masukkan salah satu no. dari opsi diatas:", (answer) => {
        console.log(
          `============================================================================`
        );
        if (Number(answer) > 5 || Number(answer) < 1) {
          console.log(`input salah, silakan pilih opsi dari 1-5`);
          pilihOpsi(3);
        } else {
          switch (Number(answer)) {
            case 1:
              mauApa(31);
              break;
            case 2:
              mauApa(32);
              break;
            case 3:
              mauApa(33);
              break;
            case 4:
              mauApa(34);
              break;
            case 5:
              tampilOpsi();
              break;
          }
        }
      });
      break;
    case 4:
      console.log(
        `============================================================================`
      );
      console.log("silahkan pilih opsi di bawah ini");
      console.log(
        `[1] daftar mata kuliah\n[2] cari mata kuliah\n[3] tambah mata kuliah\n[4] hapus mata kuliah\n[5] kembali`
      );
      console.log(
        `============================================================================`
      );
      rl.question("masukkan salah satu no. dari opsi diatas:", (answer) => {
        console.log(
          `============================================================================`
        );
        if (Number(answer) > 5 || Number(answer) < 1) {
          console.log(`input salah, silakan pilih opsi dari 1-5`);
          pilihOpsi(4);
        } else {
          switch (Number(answer)) {
            case 1:
              mauApa(41);
              break;
            case 2:
              mauApa(42);
              break;
            case 3:
              mauApa(43);
              break;
            case 4:
              mauApa(44);
              break;
            case 5:
              tampilOpsi();
              break;
          }
        }
      });
      break;
    case 5:
      console.log(
        `============================================================================`
      );
      console.log("silahkan pilih opsi di bawah ini");
      console.log(
        `[1] daftar kontrak\n[2] cari kontrak\n[3] tambah kontrak\n[4] hapus kontrak\n[5] kembali`
      );
      console.log(
        `============================================================================`
      );
      rl.question("masukkan salah satu no. dari opsi diatas:", (answer) => {
        console.log(
          `============================================================================`
        );
        if (Number(answer) > 5 || Number(answer) < 1) {
          console.log(`input salah, silakan pilih opsi dari 1-5`);
          pilihOpsi(5);
        } else {
          switch (Number(answer)) {
            case 1:
              mauApa(51);
              break;
            case 2:
              mauApa(52);
              break;
            case 3:
              mauApa(53);
              break;
            case 4:
              mauApa(54);
              break;
            case 5:
              tampilOpsi();
              break;
          }
        }
      });
      break;
  }
}
function tampilOpsi() {
  console.log("silahkan pilih opsi di bawah ini");
  console.log(
    "[1] Mahasiswa\n[2] Jurusan\n[3] dosen\n[4] mata kuliah\n[5] kontrak\n[6] keluar"
  );
  console.log(
    `============================================================================`
  );
  rl.question("masukkan salah satu no. dari opsi diatas:", (answer) => {
    if (Number(answer) > 6 || Number(answer) < 1) {
      console.log(
        `============================================================================`
      );
      console.log(`input salah, silakan pilih opsi dari 1-6`);
      console.log(
        `============================================================================`
      );
      tampilOpsi();
    } else if (Number(answer) == 6) rl.close();
    else pilihOpsi(Number(answer));
  });
}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "password: ",
});

function cekLogin() {
  rl.question("username : ", (answer1) => {
    console.log(
      `============================================================================`
    );
    rl.question("password : ", (answer2) => {
      console.log(
        `============================================================================`
      );
      if (answer1 == "fadhil" && answer2 == "12345") {
        console.log(`Welcome, ${answer1}. Your access level is: ADMIN `);
        console.log(
          `============================================================================`
        );
        tampilOpsi();
      } else {
        console.log("username atau password anda salah, silakan ulangi lagi.");
        console.log(
          `============================================================================`
        );
        cekLogin();
      }
    });
  });
}

cekLogin();
