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
  return theWord;
}
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "tulis kalimatmu disini> ",
});

rl.prompt();

rl.on("line", (line) => {
  console.log("hasil konversi : " + sentenceManipulation(line));
  rl.prompt();
});
rl.on("close", () => {
  console.log("Good bye!");
  process.exit(0);
});
