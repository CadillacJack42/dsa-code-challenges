const titleCase = (wordsArray) => {
  const mungedWords = wordsArray
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  console.log(mungedWords);
  return mungedWords;
};

titleCase('this is a sentence');

const reverseWords = (sentence) => {
  const reversed = sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''));
  console.log(reversed.join(' '));
  return reversed.join(' ');
};

reverseWords('This is another sentence');
