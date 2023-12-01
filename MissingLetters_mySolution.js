function fearNotLetter(str) {
    for(let i = 0; i<str.length-1; i++)
    {
      console.log(i + " " + str[i] + " " + str[i+1]);
      if(str.charCodeAt(i+1)-str.charCodeAt(i)>1) {      
        return String.fromCharCode(str.charCodeAt(i)+1);
      }
    }
  }
  
console.log(fearNotLetter("abce"));  