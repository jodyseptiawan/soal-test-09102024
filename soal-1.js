function pertumbuhanPohon(tinggiAwal, lamaHari, pertumbuhan) {
  let pertumbuhanAkhir = tinggiAwal;

  for (let i = 1; i <= lamaHari; i++) {
    pertumbuhanAkhir += pertumbuhanAkhir * pertumbuhan;

    console.log(`${i}. ${pertumbuhanAkhir}`);
  }

  console.log(`tinggi akhir: ${pertumbuhanAkhir}`);
}

pertumbuhanPohon(200, 5, 0.05);
