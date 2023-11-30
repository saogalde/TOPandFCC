function translatePigLatin(str) {
  if(/^[aeiou]/.test(str)) { // start with a vowel
    return str += "way";
  } 
  else { // starts with a consonant
    let matchedConsonants = str.match(/[^aeiou]+/)[0];
    console.log(matchedConsonants);
    if(matchedConsonants.length === str.length) return str+"ay"; // word is only consonants
    return str = str.slice(matchedConsonants.length) + matchedConsonants + "ay";
  }
  return str;
}

console.log(translatePigLatin("glove"));
