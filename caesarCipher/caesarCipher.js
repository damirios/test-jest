function caesarCipher(string, shift) {
  const stringArray = Array.from(string);
  let newArray = [];
  if (stringArray.length > 0) {
    for (let i = 0; i < stringArray.length; i++) {
      const character = stringArray[i];
      const newCharacter = getCipherCharacter(character, shift);
      newArray.push(newCharacter);  
    }
    return newArray.join('');
  } else {
    return '';
  }
}

function getCipherCharacter(char, shift) {
  const lowerChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  if ( char.toLowerCase() != char.toUpperCase() ) {
    if (char.toLowerCase() == char) {
      const charIndex = lowerChars.indexOf(char);
      return lowerChars[(charIndex + shift) % 26];
    } else if (char.toUpperCase() == char) {
      const charIndex = upperChars.indexOf(char);
      return upperChars[(charIndex + shift) % 26];
    }
  } else {
    return char;
  }
}

module.exports = caesarCipher;