sqlite3 university.db;

CREATE TABLE jurusan(
    idjurusan VARCHAR(20) PRIMARY KEY NOT NULL, 
    namajurusan VARCHAR(100) NOT NULL
    );
    insert into jurusan(idjurusan, namajurusan) values('3401','Teknik Mesin'),('3402','Teknik Material'),('3403','Teknik Pangan'),('3404','Teknik Telekomunikasi');

CREATE TABLE mahasiswa(
    nim VARCHAR(20) PRIMARY KEY NOT NULL, 
    nama VARCHAR(20) NOT NULL,
    alamat VARCHAR(20) NOT NULL,
    idjurusan VARCHAR(20) NOT NULL, FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan));
    INSERT INTO mahasiswa(nim, nama, alamat, idjurusan) VALUES('101','Krimi','Margahayu','3401'),('102','Maman','Buahbatu','3402'),('103','Dadan','Sukaluyu','3403'),('104','Yayat','Sukasenang','3404');  

CREATE TABLE dosen(
    nip VARCHAR(20) PRIMARY KEY NOT NULL,
    nama VARCHAR(20) NOT NULL,
    idjurusan VARCHAR(20) NOT NULL, FOREIGN KEY(idjurusan) REFERENCES jurusan(idjurusan)); INSERT INTO dosen(nama,nip,idjurusan) VALUES('Tatan','5601','3401'),('Yeyen','5602','3402'),('Rendi','5603','3403'),('Jajang','5604','3401');

CREATE TABLE matakuliah(
    kodematkul VARCHAR(20) PRIMARY KEY NOT NULL,
    nama VARCHAR(20) NOT NULL,
    sks INTEGER NOT NULL,
    idjurusan VARCHAR(20) NOT NULL, FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan));
    INSERT INTO matakuliah(kodematkul,nama,sks,idjurusan) VALUES('EF37','Sistem Analisis Tenaga Surya',3,'3401'),('WA56','Pengenalan Antarmuka',2,'3402'),('TY17','Rekayasa Trafik Jaringan',4,'3404'),('RW11','Manajemen Komunikasi',1,'3403'); 

CREATE TABLE kontrak(
   idkontrak VARCHAR(20) NOT NULL,
   nilai INTEGER NOT NULL,
   nim VARCHAR(20) NOT NULL, 
   kodematkul VARCHAR(20) NOT NULL,
   nip VARCHAR(20) NOT NULL,
   FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
   FOREIGN KEY (kodematkul) REFERENCES matakuliah(kodematkul),
   FOREIGN KEY (nip) REFERENCES dosen(nip)
   );
   INSERT INTO kontrak(nim,kodematkul,idkontrak,nilai,nip) VALUES('104','EF37','A01',80,'5604'),('101','RW11','A02',90,'5603'),('103','TY17','A03',60,'5602'),('101','WA56','A04',40,'5602');