
const text = "Hvis jeg skulle beskrive min bil, sÃ¥ ville det vÃ¦re ...";
let newText = [];

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
      case ",":
        newText.push("ø");
        break;
    }
  };
}

finalString = newText.join(" ");

console.log(finalString);

//if text[i] !== ã.uppercase push new array
//else text[i] = ã.uppercase --> switch case: text[i] +1 --> zweites Zeichen löschen
// array zusammenfügen
