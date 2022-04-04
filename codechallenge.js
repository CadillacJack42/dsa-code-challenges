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

const oddishEvenish = (number) => {
  const check = number.toString().split('');
  const checked = check.reduce((acc, curr) => acc + Number(curr), 0);
  const isEven = checked % 2 ? 'Oddish' : 'Evenish';
  console.log(isEven);
  return isEven;
};

oddishEvenish(141);
oddishEvenish(142);

const at = (arr, index) => {
  const verifyIndex = index > -1 ? true : false;
  const verifyIndexExists = arr.length > index ? true : false;

  const indexed = verifyIndex && verifyIndexExists && arr[index];
  const negativeIndexed = arr[arr.length + index];
  const returnValue = verifyIndex ? indexed : negativeIndexed;
  console.log(returnValue);
  return returnValue;
};

at(['1', 2, 'four', 9, 'eleven'], 3);
at(['1', 2, 'four', 9, 'eleven'], -3);

const fizzbuzz = (num) => {
  const newArray = [];
  for (let i = 1; i < num; i++) {
    if (i % 15 === 0) {
      newArray.push('fizzbuzz');
    } else if (i % 5 === 0) {
      newArray.push('buzz');
    } else if (i % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push(i);
    }
  }
  console.log(newArray);
  return newArray;
};

fizzbuzz(22);
