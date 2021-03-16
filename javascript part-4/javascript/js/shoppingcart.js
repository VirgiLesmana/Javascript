let tblmenu = [
    { idmenu: 9, idkategori: 29, menu: "Apel", gambar: "apel.webp", harga: 5000 },
    { idmenu: 10, idkategori: 29, menu: "Alpukat", gambar: "alpukat.webp", harga: 6000 },
    { idmenu: 11, idkategori: 29, menu: "Jeruk", gambar: "jeruk.jpg", harga: 5000 },
    { idmenu: 12, idkategori: 32, menu: "Ote-Ote", gambar: "Ote Ote.jpg", harga: 2000 },
    { idmenu: 13, idkategori: 32, menu: "Pisang goreng krispy", gambar: "pisang goreng krispy.jpg", harga: 2000 },
    { idmenu: 16, idkategori: 28, menu: "Tteokbokki", gambar: "tteokbokki.jpeg", harga: 8000 },

];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="img">
        <img src="images/${kolom.gambar}" alt="">
    </div>
    <div class="title">
        <h2>${kolom.menu}</h2>
    </div>
    
    <div class="harga">
        <h2>Rp. ${kolom.harga}</h2 >
    </div >

    <div class="btn-beli">
                <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>
</div > `;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli>button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };

}

// console.log(cart);


