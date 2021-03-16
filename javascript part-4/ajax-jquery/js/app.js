$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) {
        e.preventDefault();

        id = $("#id").val();
        Pelanggan = $("#Pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val("");
        $("#Pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
    });

    $("#btn-tambah").click(function (e) {
        e.preventDefault();

        $("#titel").html("<p>Tambah Data</p>");

        $("#id").val("");
        $("#Pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
    });



    $("tbody").on("click", ".btn-del", function () {
        let id = $(this).attr("data-id");
        if (confirm("yakin akan menghapus ?")) {
            deleteData(id);
        }

    });

    $("tbody").on("click", ".btn-Ubah", function () {
        let id = $(this).attr("data-id");
        $("#titel").html("<p>Ubah Data</p>");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idPelanggan = {
            idPelanggan: id,

        };


        $.ajax({
            type: "post",
            url: "php/selectUpdate.php",
            cache: false,
            data: JSON.stringify(idPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response);

                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);




            }
        });
    }

    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            cache: false,
            dataType: "json",
            success: function (response) {
                let out = "";
                let No = 1;
                $.each(response, function (key, val) {
                    out += `<tr>
                    <td>${No++}</td>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button type='button' class="btn btn-danger btn-del " data-id=${val.idpelanggan}>DEL</button></td>
                    <td><button type='button' class="btn btn-warning btn-Ubah" data-id=${val.idpelanggan}>UBAH</button></td>
                    
                    </tr>`;
                });
                $("#isidata").html(out);
            }
        });
    }
    function insertData() {
        let dataPelanggan = {
            Pelanggan: Pelanggan,
            alamat: alamat,
            telp: telp
        }

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            data: JSON.stringify(dataPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();

    }
    function deleteData(id) {
        let idPelanggan = {
            idPelanggan: id,

        }

        $.ajax({
            type: "pos",
            url: "php/update.php",
            Cache: false,
            data: JSON.stringify(idPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();;
    }
    function updateData() {
        let dataPelanggan = {
            idPelanggan: id,
            Pelanggan: Pelanggan,
            alamat: alamat,
            telp: telp
        }

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            data: JSON.stringify(dataPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }

    selectData();
});