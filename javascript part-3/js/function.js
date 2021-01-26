function coba() {
    let belajar = "saya belajar js";
    console.log(belajar);
    console.log("Belajar js itu mudah");
}

console.log("_________________________________________________________________________________");

for (let i = 0; i < 4; i++) {
    coba();
}

console.log("_________________________________________________________________________________");


function persegi(lebar, panjang) {
    luas = panjang * lebar;
    console.log(luas);
}
persegi(7, 8);

console.log("_________________________________________________________________________________");

function out() {
    return console.log("output function");
}
out();

console.log("_________________________________________________________________________________");

function lingkaran(r) {
    luas = 3.14 * r * r;
    return luas;
}
const tinggi = 5;
let tabung = lingkaran(10) * tinggi;
console.log(tabung);

console.log("_________________________________________________________________________________");

function lewat(a) {
    return a;
}
console.log(lewat(9));
