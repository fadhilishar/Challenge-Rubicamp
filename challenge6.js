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
    return word;
  } else {
    saveWord = word.slice(0, 1);
    cutWord = word.slice(1);
    word = cutWord + saveWord + "nyo";
    return word;
  }
}
function sentenceManipulation(sentence) {
  let i = 0;
  let splitSentence = sentence.split(" ");
  let theWord = "";
  while (i < splitSentence.length) {
    theWord += stringManipulation(splitSentence[i]) + " ";
    i++;
  }
  console.log(theWord);
}
sentenceManipulation("ibu pergi ke pasar bersama aku");
