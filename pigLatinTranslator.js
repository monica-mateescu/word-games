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

    if (vowels.includes(first)) {
      return word + "way";
    }

    if (!vowels.includes(first) && vowels.includes(second)) {
      return word.slice(1) + word.slice(0, 1).toLowerCase() + "ay";
    }

    return word.slice(2) + word.slice(0, 2) + "ay";
  })
  .join(" ");

console.log(output);
