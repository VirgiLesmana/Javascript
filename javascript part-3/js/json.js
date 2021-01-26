document.querySelector("#klik").addEventListener("click", tampil)

function tampil(params) {
    let url = "js/tblmenu.json";
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let output = "<h1>DATA MENU</h1> <table><th>Menu</th> <th>Harga</th> <th>Warna</th>";
            data.forEach(element => {
                output += `<tr>
                    <td>${element.menu}</td>
                    <td>${element.harga}</td>
                    <td>${element.warna[0]}</td>
                </tr>`;
            });
            output += "</table>";
            document.querySelector("#isi").innerHTML = output;
        })


}


// let tblmenu = [
//     {

//         "idmenu": 9,
//         "idkategori": 29,
//         "menu": "apel",
//         "harga": 5000,
//         "warna": ["merah", "kuning", "hijau"],
//         "stop": true,
//         "keterangan": null

//     },
//     {

//         "idmenu": 10,
//         "idkategori": 29,
//         "menu": "alpukat",
//         "harga": 6000,
//         "warna": ["merah", "kuning"],
//         "stop": false,
//         "keterangan": null

//     }
// ]

// console.log(tblmenu[0].menu);