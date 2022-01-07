CREATE TABLE jurusan(
    idjurusan VARCHAR(20) PRIMARY KEY NOT NULL, 
    namajurusan VARCHAR(100) NOT NULL
    );
    INSERT INTO jurusan(idjurusan, namajurusan) VALUES('3401','Teknik Mesin'),('3402','Teknik Material'),('3403','Teknik Pangan'),('3404','Teknik Telekomunikasi'),('3405','Teknik Kimia');

CREATE TABLE mahasiswa(
    nim VARCHAR(20) PRIMARY KEY NOT NULL, 
    namamahasiswa VARCHAR(20) NOT NULL,
    tgllahir DATE,
    alamat VARCHAR(20) NOT NULL,
    idjurusan VARCHAR(20) NOT NULL,
    FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan));
    INSERT INTO mahasiswa(nim, namamahasiswa, alamat, idjurusan, tgllahir) VALUES('101','Krimi','Margahayu','3401','1997-08-23'),('102','Maman','Buahbatu','3402','1999-04-18'),('103','Dadan','Sukaluyu','3403','2002-05-09'),('104','Yayat','Sukasenang','3404','2004-07-19'),('105','Nanang','Cibiru','3405','2003-08-01'),('106','Kiki','Cijerah','3401','2003-03-19');  

CREATE TABLE dosen(
    nip VARCHAR(20) PRIMARY KEY NOT NULL,
    namadosen VARCHAR(20) NOT NULL,
    idjurusan VARCHAR(20) NOT NULL, 
    FOREIGN KEY(idjurusan) REFERENCES jurusan(idjurusan)); INSERT INTO dosen(namadosen,nip,idjurusan) VALUES('Tatan','5601','3401'),('Yeyen','5602','3402'),('Rendi','5603','3403'),('Jajang','5604','3401'),('Farid','5605','3405'),('Dani','5606','3404');

CREATE TABLE matakuliah(
    kodematkul VARCHAR(20) PRIMARY KEY NOT NULL,
    namamatkul VARCHAR(20) NOT NULL,
    sks INTEGER NOT NULL,
    idjurusan VARCHAR(20) NOT NULL, FOREIGN KEY (idjurusan) REFERENCES jurusan(idjurusan));
    INSERT INTO matakuliah(kodematkul,namamatkul,sks,idjurusan) VALUES('EF37','Sistem Analisis Tenaga Surya',3,'3401'),('WA56','Pengenalan Antarmuka',2,'3402'),('TY17','Data Mining',4,'3404'),('RW11','Manajemen Komunikasi',1,'3403'),('EF35','Sistem Pembangkit Tenaga Surya',4,'3401'),('WA58','Antarmuka Lanjutan',3,'3402'),('TY15','Rekayasa Jaringan Komunikasi',4,'3404'),('RW13','Manajemen Proyek Lanjutan',2,'3403'); 

CREATE TABLE kontrak(
   idkontrak VARCHAR(20) NOT NULL,
   nilai VARCHAR(20),
   nim VARCHAR(20) NOT NULL, 
   kodematkul VARCHAR(20) NOT NULL,
   nip VARCHAR(20) NOT NULL,
   FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
   FOREIGN KEY (kodematkul) REFERENCES matakuliah(kodematkul),
   FOREIGN KEY (nip) REFERENCES dosen(nip)
   FOREIGN KEY (nip) REFERENCES dosen(nip)
   );
   INSERT INTO kontrak(nim,kodematkul,idkontrak,nilai,nip) VALUES('104','EF37','A01','A','5604'),('101','RW11','A02','A','5603'),('103','TY17','A03','C','5602'),('101','WA56','A04','D','5602'),('102','EF35','A05','B','5604'),('105','RW13','A06','B','5603'),('106','TY15','A07','A','5602'),('105','WA58','A08','C','5602'),('104','EF35','A09','E','5604'),('103','RW13','A10','D','5603'),('101','TY15','A11','E','5602'),('106','WA58','A12','A','5602'),('101','EF37','A13','B','5604'),('103','RW11','A14','D','5603'),('105','TY17','A15','C','5602'),('102','WA56','A16','E','5602'),('105','EF37','A17','B','5605'),('101','WA58','A18','A','5606');


