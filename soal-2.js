function pohon(tinggi) {
  for (let i = 1; i <= tinggi; i++) {
    let text = ``;

    // for space
    for (let j = 1; j <= tinggi - i; j++) {
      text += ` `;
    }

    if (i > 1) {
      text += `/ `;

      let tmpI = i;
      tmpI * 2;

      for (let k = 1; k <= tmpI; k++) {
        text += `* `;
      }

      text += `\\`;
    } else {
      text += `  *`;
    }

    console.log(text);
  }
}

pohon(10);
