function hitungparkir(){
    // Tangkap angka yang user input
    let masuk = document.getElementById('masuk').value
    let keluar = document.getElementById('keluar').value

    // Tangkap span untuk hasil
    let hasilDurasi = document.getElementById("hasilDurasi")
    let totalBiaya = document.getElementById("totalBiaya")

    // hitung durasi pakir
    let durasi = keluar - masuk

    let biaya = 3000

    // hitung biaya parkir
    for(let i = 2; i <= durasi; i++) {
        biaya = biaya + 1000
    }

    //  menampilkan hasil perhitungan
    hasilDurasi.innerHTML = durasi
    totalBiaya.innerHTML = biaya

}