function tampil(b) {
    a = document.querySelector("p").innerText = "Sedang mempelajari materi event JavaScript " + b;
    //a.innerText="Sedang mempelajari materi event JS";
    console.log("Sedang mempelajari materi event JavaScript");
}

judul.onclick = function () {
    console.log("Sedang mempelajari materi event JavaScript menggunakan id");

    document.querySelector(".isi").innerHTML = "gudnite";
}