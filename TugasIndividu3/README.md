# Tugas Individu 3

Membuat geometri yang digenerate secara terus-menerus dimana terdapat waktu percepatan dalam generate geometri. Warna dari geometri digenerate secara random. Geometri berhenti di generate ketika telah mencapai batas tertentu. Jika 2 `Mesh` dengan geometri dan warna yang sama di klik, maka kedua `Mesh` tersebut dihapus dan skor akan ditambah.

## Instalasi

1. Jadikan folder `TugasIndividu3` sebagai root folder.
2. Jalankan `npm install`.
3. Jalankan `npm run dev`.

## Fitur

- Geometri akan digenerate sebanyak 140 pada saat dibuka. Masing-masing terdapat 70 Cube dan 70 Sphere dengan warna yang diacak sebanyak 10 warna.
- Geometri akan digenerate sebanyak 4 Cube dan 4 Sphere dengan warna berbeda sebanyak 2 secara otomatis ketika mencapai waktu tertentu. Waktu generate akan semakin cepat seiring berjalannya waktu.
- Objek dibatasi sebanyak 200. Jika objek telah melewati 200 dan berhasil dihapus dan objek kurang dari 200 maka objek akan digenerate lagi.
- Skor akan bertambah sebanyak 250 jika berhasil memilih objek yang sama dengan warna yang sama pula
- Jika memilih objek yang salah maka skor akan berkurang 10 poin.

## Hasil

![depan](https://github.com/cg2021d/tugas-1-yanzkosim/blob/main/img/hasil.gif)