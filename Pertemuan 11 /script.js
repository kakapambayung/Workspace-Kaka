function formatRupiah(angka) {
    return angka.toLocaleString("id-ID");
}

function animasiHasil() {
    let hasilBox = document.getElementById("hasilBox");

    hasilBox.style.transform = "scale(1.03)";

    setTimeout(function () {
        hasilBox.style.transform = "scale(1)";
    }, 200);
}

function hitungBelanja() {
    let harga = Number(document.getElementById("harga").value);
    let jumlah = Number(document.getElementById("jumlah").value);
    let hasilBox = document.getElementById("hasilBox");

    if (harga <= 0 || jumlah <= 0) {
        hasilBox.classList.remove("success");

        document.getElementById("hasil").innerHTML =
            "⚠️ Masukkan harga dan jumlah barang dengan benar!";

        animasiHasil();
        return;
    }

    let total = harga * jumlah;
    let diskon = 0;
    let badgeDiskon = "";
    let pesanDiskon = "Tidak mendapatkan diskon";

    if (total >= 100000) {
        diskon = total * 0.1;
        badgeDiskon = "🏷️ DISKON AKTIF<br><br>";
        pesanDiskon = "🎉 Anda mendapatkan diskon 10%!";
        hasilBox.classList.add("success");
    } else {
        hasilBox.classList.remove("success");
    }

    let totalBayar = total - diskon;

    document.getElementById("hasil").innerHTML =
        badgeDiskon +
        pesanDiskon + "<br><br>" +
        "Harga Barang: Rp " + formatRupiah(harga) + "<br>" +
        "Total Item: " + jumlah + " barang<br>" +
        "Total Belanja: Rp " + formatRupiah(total) + "<br>" +
        "Diskon: Rp " + formatRupiah(diskon) + "<br>" +
        "Total Bayar: Rp " + formatRupiah(totalBayar);

    animasiHasil();
}

function resetForm() {
    document.getElementById("harga").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("hasil").innerHTML = "🧾 Menunggu perhitungan...";
    document.getElementById("hasilBox").classList.remove("success");
}

document.getElementById("jumlah").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        hitungBelanja();
    }
});
