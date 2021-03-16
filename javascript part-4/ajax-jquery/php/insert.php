<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $dataPelanggan = json_decode($data, true);

    $Pelanggan = $dataPelanggan['Pelanggan'];
    $alamat = $dataPelanggan['alamat'];
    $telp = $dataPelanggan['telp'];

    if (!empty($Pelanggan) and !empty($alamat) and !empty($telp)) {
        $sql ="INSERT INTO tblPelanggan (idpelanggan, Pelanggan, alamat, telp) VALUES('','$Pelanggan','$alamat','$telp')";
        if ($result = mysqli_query($con, $sql)) {
            echo "Data sudah disimpan";
        } else {
            echo "Data gagal disimpan";
        }
}else {
        echo "DATA KOSONG!";
    }
?>
    
    
    
    
