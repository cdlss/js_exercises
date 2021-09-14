/**
    Translate the provided string to pig latin.
    Pig Latin takes the first consonant (or consonant cluster) of an English word, 
    moves it to the end of the word and suffixes an "ay".

    If a word begins with a vowel you just add "way" to the end.

    Input strings are guaranteed to be English words in all lowercase.

    **Example**
    -   pigLatin("glove") should return "oveglay".
    -   pigLatin("eight") should return "eightway".

    **Hints**
    -   split()
    -   test()
    -   join()
    -   push()
*/

function pigLatin(str) {
  const letters = str.split('');
  const vowelRegex = /[aeiou]/g;

  if (vowelRegex.test(str[0])) {
    return `${str}way`;
  }

  while (true) {
    if (!vowelRegex.test(letters[0])) {
      letters.push(letters.splice(0, 1))[0];
    }
    else {
      break;
    }
  }

  str = letters.join('') + 'ay';
  return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
