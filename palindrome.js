let words = ``;
let myFunction = (words) => {
  let Palindrome = [];
  let splittedWords = words.split('\n');
  // console.log(splittedWords);
  for (let index = 0; index < splittedWords.length; index++) {
    const element = splittedWords[index];
    // console.log(element);
    let try1 = [];
    for (let i = 0; i < element.length; i++) {
      const element2 = element[i];
      // console.log(element2);
      try1.push(element2);
    }
    let reversedWord = try1.reverse().join('');
    // console.log(reversedWord);
    if (element == reversedWord) {
      Palindrome.push(element);
    }
  }
  console.log(Palindrome);
  for (x in Palindrome) {
    console.log(Palindrome[x]);
  }
};
myFunction(words);