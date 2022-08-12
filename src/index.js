const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  let x = expr.split('');
  // returns array of arrays by ten from input code
  const getArrayOfArraysByTen = (arg) => {
    let z = [];
    for (i=0;i<arg.length; i)
      z.push(arg.splice(i,10));
    return z;
  }

  // returns cleared array from input arrayByTen
  const clear = (arg) => {
    // for (i=0;i<arg.length;i){
    //   if (arg[i]==='*') return arg; 
    // }
    for (i=0;i<arg.length;i){
      if (arg[i]==='*') return arg; 
      if (arg[i]!=='1') {
        arg.shift();
      }
      else break; 
    }
    return arg;
  }

 // returns array Morse code from cleared array
  const getMorse = (arg) => {
    let oper = '';
    let temp = [];
    for (i=0;i<arg.length;i+=2){
      if (arg[i] === '*'){
        arg.splice(0,arg.length,' ')
        break
      }
      while (temp.length<2){
        temp.push(arg[i]);
        temp.push(arg[i+1]);
      }
      if (temp.join('')==='11'){
        oper = '-';
      }
      if (temp.join('')==='10'){
        oper = '.';
      }
      arg.splice(i,2,oper,'');
      temp.splice(0,2);
    }
    return arg.filter(Boolean);
  }

  // returns decoded Letter  from Morse code
  const getDecoding = (arg) => {
    for (let value in MORSE_TABLE){
      let letter = '';
      if(value === arg.join('')){
        letter = MORSE_TABLE[value];
        arg.splice(0,arg.length,letter);
      }
    }
    return arg;
  }
  // form sentense from decoded letters
  const getSentence = (arg) => {
    let result = []
    for (let g of arg){
      result.push(getDecoding(getMorse(clear(g))));
    }
    return result.join('');
  }
return getSentence(getArrayOfArraysByTen(x));
}


module.exports = {
  decode
}