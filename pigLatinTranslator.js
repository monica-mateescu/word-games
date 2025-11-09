console.log("Welcome to Pig Latin Translator Game!");

const vowels = ["a", "e", "i", "o", "u"];
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("❌ Please enter your phrase to be translated.");
  console.error(
    "Example: node pigLatinTranslator.js 'Pig Latin is hard to speak'"
  );
  process.exit(2);
}

const words = args.length === 1 ? args[0].split(" ") : args;
const pigLatin = (word) => {
  const [first, second] = word;
  const isUpper = first === first.toUpperCase();

  let transletedWord;

  if (vowels.includes(first.toLowerCase())) {
    return word + "way";
  }

  if (vowels.includes(second.toLowerCase())) {
    transletedWord = word.slice(1) + word.slice(0, 1) + "ay";
  } else {
    transletedWord = word.slice(2) + word.slice(0, 2) + "ay";
  }

  return isUpper
    ? transletedWord.slice(0, 1).toUpperCase() +
        transletedWord.slice(1).toLowerCase().toLowerCase()
    : transletedWord.toLowerCase();
};

const output = words.map(pigLatin).join(" ");

console.log(output);
process.exit(0);
