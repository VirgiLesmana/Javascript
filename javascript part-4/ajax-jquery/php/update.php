<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $dataPelanggan = json_decode($data, true);

    $idPelanggan = $dataPelanggan['idPelanggan'];
    $Pelanggan = $dataPelanggan['Pelanggan'];
    $alamat = $dataPelanggan['alamat'];
    $telp = $dataPelanggan['telp'];

    if (!empty($Pelanggan) and !empty($alamat) and !empty($telp)) {
        $sql ="UPDATE tblPelanggan
        SET pelanggan = '$Pelanggan',
        pelanggan = '$alamat',
        telp = '$telp'
        WHERE idpelanggan=$idPelanggan";

        if ($result = mysqli_query($con, $sql)) {
            echo "Data sudah diubah";
        } else {
            echo "Data gagal diubah";
        }
}else {
        echo "DATA KOSONG!";
    }
?>
    
    
    
    
