function stringManipulation(word) {
  let saveWord = "";
  let cutWord = "";
  let lowerWord = word.toLowerCase();
  if (
    lowerWord.charAt(0) == "a" ||
    lowerWord.charAt(0) == "e" ||
    lowerWord.charAt(0) == "i" ||
    lowerWord.charAt(0) == "o" ||
    lowerWord.charAt(0) == "u"
  ) {
    console.log(word);
  } else {
    saveWord = word.slice(0, 1);
    cutWord = word.slice(1);
    word = cutWord + saveWord + "nyo";
    console.log(word);
  }
}
stringManipulation("ayam");
stringManipulation("bebek");
