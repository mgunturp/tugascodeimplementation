const palindrome = (word) => {
  const kata = word.toLowerCase();

  const kataReverse = kata.split("").reverse().join("");

  return kata === kataReverse;
};

const cekPalindrome = (text) => {
  if (palindrome(text)) {
    return console.log(`${text} adalah palindrom.`);
  } else {
    return console.log(`${text} bukan palindrom.`);
  }
};

cekPalindrome("malam");
