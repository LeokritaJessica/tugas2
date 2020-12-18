function sortCharacters(sentence) {
  //split the word
  let splitWords = sentence.split(" ");
  //foreach to sort the word
  let newWords = splitWords.map((words) => {
    //sort alphabet in word
    return words.split("") //split the word into character
        .sort() // sorts an array alphabetically
        .join(""); // returns the array as a string
  });

  return newWords.join(" ");
}

console.log(sortCharacters("hello")); // 'ehllo'
console.log(sortCharacters("truncate")); // 'acenrttu'
console.log(sortCharacters("developer")); // 'deeeloprv'
console.log(sortCharacters("developer saya")); // 'deeeloprv'
