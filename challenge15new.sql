-- challenge15new.sql
-- .headers on
-- .mode column

-- TASK 1
SELECT mahasiswa.*, jurusan.namajurusan from mahasiswa,jurusan WHERE mahasiswa.idjurusan=jurusan.idjurusan;

-- TASK 2
SELECT *,
CASE
    WHEN strftime('%m','now')>strftime('%m',tgllahir) THEN  (strftime('%Y', 'now')) - strftime('%Y', tgllahir) 
    WHEN strftime('%m','now')=strftime('%m',tgllahir) THEN
        CASE
            WHEN strftime('%d','now')>= strftime('%d',tgllahir) THEN strftime('%Y','now')-strftime('%Y',tgllahir)
            ELSE strftime('%Y','now')-strftime('%Y',tgllahir)-1
        END
    WHEN strftime('%m','now')<strftime('%m',tgllahir) THEN strftime('%Y','now')-strftime('%Y',tgllahir)-1  
END AS 'umur' FROM mahasiswa WHERE umur <20;

-- TASK 3
SELECT mahasiswa.*, kontrak.nilai from mahasiswa,kontrak WHERE mahasiswa.nim=kontrak.nim AND UPPER(kontrak.nilai)<='B';

-- TASK 4
SELECT kontrak.nim, mahasiswa.namamahasiswa, SUM(matakuliah.sks) as totalsks FROM kontrak, matakuliah, mahasiswa WHERE kontrak.kodematkul=matakuliah.kodematkul AND kontrak.nim = mahasiswa.nim GROUP BY kontrak.nim HAVING totalsks>10;

-- TASK 5
SELECT mahasiswa.nim, mahasiswa.namamahasiswa, kontrak.kodematkul, matakuliah.namamatkul FROM mahasiswa, kontrak, matakuliah WHERE mahasiswa.nim=kontrak.nim AND kontrak.kodematkul='TY17' AND matakuliah.kodematkul = kontrak.kodematkul;

-- TASK 6
SELECT kontrak.nip, dosen.namadosen, COUNT(DISTINCT kontrak.nim) as jumlahmahasiswa FROM kontrak, dosen, mahasiswa WHERE dosen.nip=kontrak.nip AND mahasiswa.nim = kontrak.nim GROUP BY kontrak.nip;

SELECT kontrak.nip, kontrak.kodematkul,namadosen, namamahasiswa FROM kontrak LEFT JOIN dosen ON dosen.nip=kontrak.nip LEFT JOIN mahasiswa ON mahasiswa.nim = kontrak.nim;

-- TASK 7
SELECT *,
CASE
    WHEN strftime('%m','now')>strftime('%m',tgllahir) THEN  (strftime('%Y', 'now')) - strftime('%Y', tgllahir) 
    WHEN strftime('%m','now')=strftime('%m',tgllahir) THEN
        CASE
            WHEN strftime('%d','now')>= strftime('%d',tgllahir) THEN strftime('%Y','now')-strftime('%Y',tgllahir)
            ELSE strftime('%Y','now')-strftime('%Y',tgllahir)-1
        END
    WHEN strftime('%m','now')<strftime('%m',tgllahir) THEN strftime('%Y','now')-strftime('%Y',tgllahir)-1  
END AS 'umur' FROM mahasiswa ORDER BY umur ASC;

-- TASK 8
SELECT mahasiswa.namamahasiswa, mahasiswa.nim, matakuliah.namamatkul, dosen.namadosen, dosen.nip, kontrak.nilai FROM kontrak LEFT JOIN matakuliah ON kontrak.kodematkul=matakuliah.kodematkul LEFT JOIN dosen ON kontrak.nip=dosen.nip LEFT JOIN mahasiswa ON mahasiswa.nim=kontrak.nim WHERE UPPER(kontrak.nilai)>'C'; 

SELECT mahasiswa.namamahasiswa, mahasiswa.nim, matakuliah.namamatkul, dosen.namadosen, dosen.nip, kontrak.nilai FROM matakuliah, mahasiswa, dosen, kontrak
WHERE UPPER(kontrak.nilai)>'C' AND mahasiswa.nim=kontrak.nim AND kontrak.kodematkul=matakuliah.kodematkul AND kontrak.nip=dosen.nip; 
