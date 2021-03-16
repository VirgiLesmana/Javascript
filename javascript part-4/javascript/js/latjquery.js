$(document).ready(function () {
    console.log("INTEL");
});

$(function () {
    $("#isi").html("<h1>Belajar Jquery</h1>");

    $("#klik").click(function (e) {
        e.preventDefault();
        alert("Belajar JavaScript");
    });

    $("#isi").mouseleave(function () {
        alert("MouseLeave");
        console.log("MouseLeave");
    });

})
