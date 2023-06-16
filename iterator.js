
const text = " Det gÃ¸r nÃ¦ppe noget godt for ens selvforstÃ¥else, nÃ¥r man er 13 Ã¥r.";
let newText = [];
let finalText = [];
console.log(text)

for (let i = 0; i < text.length; i++) {
  if(text[i] !== "Ã") {
    newText.push(text[i]);
  } else {
    switch(text[i + 1]){
      case "¦":
        newText.push("æ");
        break;
      case "¥":
        newText.push("å");
        break;
      case "¸":
        newText.push("ø");
        break;
    }
  };
}

for (let i = 0; i < newText.length; i++) {
  if(newText[i] !== "¦" && newText[i] !== "¥" && newText[i] !== "¸") {
    finalText.push(newText[i]);
  }
}

finalString = finalText.join(" ");

console.log(finalString);

//if text[i] !== ã.uppercase push new array
//else text[i] = ã.uppercase --> switch case: text[i] +1 --> zweites Zeichen löschen
// array zusammenfügen
