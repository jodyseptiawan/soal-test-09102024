function removeDuplication(kata) {
  let lowerKata = kata.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  let isDuplicate = true; // Flag for checking duplicates
  let duplikat = 1; // Counter for the number of duplicates removed

  while (isDuplicate) {
    let splitKata = lowerKata.split(""); // Split the string into an array of characters
    isDuplicate = false; // Assume no duplicates initially

    for (let i = 0; i < splitKata.length; i++) {
      let countDuplicate = 0;

      for (let j = 0; j < splitKata.length; j++) {
        if (splitKata[i] === splitKata[j]) {
          countDuplicate++;
        }
      }

      if (countDuplicate > 1) {
        isDuplicate = true; // If duplicates are found, set flag to true
        const oldKata = lowerKata;
        lowerKata = lowerKata.replaceAll(splitKata[i], ""); // Remove all occurrences of the duplicate character

        console.log(`Hapus Duplikat ke ${duplikat} = ${splitKata[i]}`);
        console.log(`${oldKata} => ${lowerKata}`);
        duplikat++;
        break; // Restart the loop after removing a duplicate
      }
    }

    console.log("");
  }

  return lowerKata; // Return the final string without duplicates
}

removeDuplication("Association");
