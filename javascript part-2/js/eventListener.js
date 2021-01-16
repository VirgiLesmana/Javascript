function coba() {
    d = document.querySelector(".isi").innerHTML = "Belajar eventlistener";
    console.log("coba eventlistener");
}

//judul.addEventListener("click", coba);

//judul.onmouseover = coba;

judul.onmouseover = function () {
    console.log("coba function anonymous");
};