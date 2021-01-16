//array bisa berisi - String - Number - Objek - Function - Campuran.

let nilai = [
    { nama: "Thor", ipa: 90, bahasa: 85, matematika: 90 },
    { nama: "Spydi", ipa: 85, bahasa: 80, matematika: 75 },
    { nama: "Tony Stark", ipa: 70, bahasa: 95, matematika: 85 },
    { nama: "Brush", ipa: 95, bahasa: 75, matematika: 90 },

];

let nama = ["Thor", "Spydi", "Toni Stark", "Brush"];
// nama.push("Tiara", "Alex");

// console.log(nama.shift());

// nama.unshift("Garry", "Jimmy");

// console.log(nama.slice(0, 3));

let mapel = ["Ipa", "Bahasa", "Matematika"];

// console.log(nama.concat(mapel));
// console.log(nama.concat(["Ips", "Pkn", "Sejarah"]));

// console.log(nama.splice(3, 4));

// console.log(nama.pop());

// nama.splice(0, 3);

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);

// }

// nama.forEach(function (a) {
//     console.log(a);
// })

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 80) {
//         console.log(a.nama);
//     }
// });

// console.log(nilai);

nilai.filter(a => (a.ipa > 80 && a.matematika > 80 ? console.log(a.nama) : null))