if (true) {
    console.log("dijalankan jika benar");
} else {
    console.log("dijalankan jika salah");
}

let nilai = 100;
let standart = 70;
let baik = "LULUS";
let gagal = "TDK LULUS";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "NILAI SALAH"

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standart) {
        console.log(baik);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan)
}
