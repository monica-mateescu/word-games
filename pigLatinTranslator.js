console.log("Welcome to Pig Latin Translator Game!");

const vowels = ["a", "e", "i", "o", "u", "y"];
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("❌ Please enter your phrase to be translated.");
  console.error(
    "Example: node pigLatinTranslator.js 'Pig Latin is hard to speak'"
  );
  process.exit(2);
}

const words = args.length === 1 ? args[0].split(" ") : args;

const output = words
  .map((word) => {
    const [first, second] = [...word.slice(0, 2)];
    const isUpperCase = first === first.toUpperCase();
    let phrase = "";

    if (vowels.includes(first)) {
      return word + "way";
    }

    if (!vowels.includes(first) && vowels.includes(second)) {
      phrase = word.slice(1) + word.slice(0, 1) + "ay";
    } else {
      phrase = word.slice(2) + word.slice(0, 2) + "ay";
    }

    return isUpperCase
      ? phrase.slice(0, 1).toUpperCase() + phrase.slice(1).toLowerCase()
      : phrase.toLowerCase();
  })
  .join(" ");

console.log(output);
process.exit(0);
