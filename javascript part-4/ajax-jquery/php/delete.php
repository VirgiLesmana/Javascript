<?php 

    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $idPelanggan = json_decode($data, true);

    $idPelanggan = $idPelanggan['idPelanggan'];

    if (!empty($idPelanggan) ) {
        $sql ="DELETE FROM tblPelanggan WHERE idPelanggan = $idPelanggan";
        if ($result = mysqli_query($con, $sql)) {
            echo "Data sudah dihapus";
        } else {
            echo "Data gagal dihapus";
        }
}else {
        echo "DATA BELOM DIPILIH!";
    }
?>
    
    
    
    
