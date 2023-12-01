function myReplace(str, before, after) {
    // check if first character is uppercase
    if(/[A-Z]/.test(before[0]))
    {
      var after = after[0].toUpperCase() + after.slice(1);
    } else {
      var after = after[0].toLowerCase() + after.slice(1);
    }
    return str
            .replace(before, after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));