console.log("Welcome to Caesar Cipher Game!");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("❌ Please enter a phrase and a shift number.");
  console.error("Example: node caesarCipher.js 'hello wordl', 3");
  process.exit(2);
}

const phrase = args.slice(0, args.length - 1).join(" ");
const shift = Number(args[args.length - 1]);

const regex = /^[a-zA-Z\s]+$/;

if (!regex.test(phrase) || isNaN(shift)) {
  console.error(
    "❌ Invalid input! Phrase must be letters and shift must be a number."
  );
  process.exit(2);
}

const letters = phrase.split("");
const encrypted = letters
  .map((char) => {
    if (char.match(/[a-zA-Z]/)) {
      return String.fromCharCode(char.charCodeAt(0) + shift);
    }

    return char;
  })
  .join("");

console.log(encrypted);
