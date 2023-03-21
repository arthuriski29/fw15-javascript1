// soal B

let input = "Surabaya";
if (typeof input === "string") {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") {
      output += "o";
    } else {
      output += input[i];
    }
  }
  console.log(output);
} else {
  console.log("Input must be a string.");
}



// algoritma deskriptif soal B
// 1. Mulai
// 2. Masukkan input string = Jakarta
// 3. Inisiasi variabel hasil
// 4. Proses x = input.length