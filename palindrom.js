const isPalindrome = (word) => {

    const cleanedWord = word.toLowerCase();
  
    const reversedWord = cleanedWord.split('').reverse().join('');
  
    return cleanedWord === reversedWord;
  };
  
  const text = "tidur";
  if (isPalindrome(text)) {
    console.log(`${text} adalah palindrom.`);
  } else {
    console.log(`${text} bukan palindrom.`);
  }
  