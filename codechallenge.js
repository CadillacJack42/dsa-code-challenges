const titleCase = (wordsArray) => {
  const mungedWords = wordsArray
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  console.log(mungedWords);
};

titleCase('this is a sentence');
