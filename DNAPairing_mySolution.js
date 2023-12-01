function pairElement(str) {
    let pairs = [];
    for(let i in str) {
      switch(str[i]) {
        case 'G':
          pairs.push(["G","C"]);
          break;
        case 'C':
          pairs.push(["C","G"]);
          break;
        case 'A':
          pairs.push(["A","T"]);
          break;
        case 'T':
          pairs.push(["T","A"]);
          break;
        default:
          break;
      }
    }
  
    return pairs;
  }
  
  pairElement("GCG");