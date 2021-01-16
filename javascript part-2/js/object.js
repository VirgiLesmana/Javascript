const objek = {

    Nama: "Arghost",
    Telp: 6729173526,
    buah: ["apel", "jeruk", "mangga"],
    coba: function () {
        return "coba function dlm objek";
    },
    boleh: true,
    "Tulis aja": 1234,
};
console.log(objek.Nama);
console.log(objek.Telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.buah[2]);
console.log(objek["Tulis aja"]);