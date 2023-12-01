function telephoneCheck(str) {
    // check for non-matching parentheses
    let parenthesesCounter = 0;
    for(let i = 0; i < str.length; i++){
      if(str[i]==='(') parenthesesCounter++;
      if(str[i]===')') parenthesesCounter--;
      if(parenthesesCounter<0) return false;
    }
    if(parenthesesCounter!=0) return false;
  
    // exclude non-US prefix
    const numberMatches = str.match(/[0-9]/g);
    console.log(numberMatches);
    if(numberMatches.length === 11 && numberMatches[0] != 1) return false;
  
    // finalise with prefix
    const phoneRegex = /^1?[\s(]*\d{3}[-\s)]*\d{3}[-\s]?\d{4}$/;
    console.log(str.match(phoneRegex));
    return phoneRegex.test(str);
  }
  
  console.log(telephoneCheck("(6054756961)"));
  
  console.log(telephoneCheck("1 (555) 555-5555"));
  
  console.log(telephoneCheck("(555-555-5555"));