//Soal 3.
// mendapatkan input nilai metode prompt dari user
let bahasaIndonesia = prompt("Masukkan nilai UN Bahasa Indonesia: ");
let bahasaInggris = prompt("Masukkan nilai UN Bahasa Inggris: ");
let matematika = prompt("Masukkan nilai UN Matematika: ");
let ipa = prompt("Masukkan nilai UN IPA: ");

// cek apakah ada nilai yang kosong
if (bahasaIndonesia === "" || bahasaInggris === "" || matematika === "" || ipa === "") {
  console.log("Nilai tidak boleh kosong !");
} else {
  // mengkonversikan string nilai ke number
  bahasaIndonesia = Number(bahasaIndonesia);
  bahasaInggris = Number(bahasaInggris);
  matematika = Number(matematika);
  ipa = Number(ipa);

  // menghitung rata-rata
  const average = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4;

  // menentukan grade berdasarkan rata-rata
  let grade;
  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80 && average <= 89) {
    grade = "B";
  } else if (average >= 70 && average <= 79) {
    grade = "C";
  } else if (average >= 60 && average <= 69) {
    grade = "D";
  } else {
    grade = "E";
  }

  // print result
  // console.log("Nilai rata-rata UN Anda adalah " + average + ", dengan grade " + grade);
  console.log(`Nilai rata-rata UN Anda adalah ${average}, dengan grade ${grade} `);
}