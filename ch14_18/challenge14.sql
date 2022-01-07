sqlite3 university.db;

CREATE TABLE jurusan(
    idjurusan VARCHAR(20) PRIMARY KEY NOT NULL, 
    namajurusan VARCHAR(100) NOT NULL
    );
    insert into jurusan(idjurusan, namajurusan) values('3401','Teknik Mesin'),('3402','Teknik Material'),('3403','Teknik Pangan'),('3404','Teknik Telekomunikasi');

CREATE TABLE  mahasiswa(
    nim VARCHAR(20) PRIMARY KEY NOT NULL, 
    nama VARCHAR(20) NOT NULL,
    alamat VARCHAR(20) NOT NULL,
    idjurusan VARCHAR(20) NOT NULL, FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan));
    INSERT INTO mahasiswa(nim, nama, alamat, idjurusan) VALUES('101','Krimi','Margahayu',3401),('102','Maman','Buahbatu',3402),('103','Dadan','Sukaluyu',3403),('104','Yayat','Sukasenang',3404);  

CREATE TABLE dosen(
    nip VARCHAR(20) PRIMARY KEY NOT NULL,
    nama VARCHAR(20) NOT NULL,
    usia INTEGER NOT NULL, 
    idjurusan VARCHAR(20) NOT NULL, FOREIGN KEY(idjurusan) REFERENCES jurusan(idjurusan)); INSERT INTO dosen(nama,nip,usia,idjurusan) VALUES('Tatan','5601',38,'3401'),('Yeyen','5602',41,'3402'),('Rendi','5603',50,'3403'),('Jajang','5604',34,'3401');

CREATE TABLE matakuliah(
    kodematkul VARCHAR(20) PRIMARY KEY NOT NULL,
    nama VARCHAR(20) NOT NULL,
    sks INTEGER NOT NULL,
    idjurusan VARCHAR(20) NOT NULL, FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan));
    INSERT INTO matakuliah(kodematkul,nama,sks,idjurusan) VALUES('EF37','Sistem Analisis Tenaga Surya',3,'3401'),('WA45','Pengenalan Antarmuka',2,'3402'),('TY17','Rekayasa Trafik Jaringan',4,'3404'),('RW11','Manajemen Komunikasi',1,'3403'); 

CREATE TABLE 