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
  let result = [];
  let k = [
    '0', '0', '1', '0',
    '1', '1', '1', '0',
    '1', '0'
  ];
  let a = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
  // returns array of arrays by ten from input code
  const getArrayOfArraysByTen = (arg) => {
    let z = [];
    for (i=0;i<arg.length; i)
      z.push(arg.splice(i,10));
    return z;
  }

  // returns cleared array from input arrayByTen
  const clear = (arg) => {
    for (i=0;i<arg.length;i){
      let o = 0;
      if (arg[i]==='*'){
        arg.splice(0,10,' ');
      } 
      if (arg[i]!=='1') {
        // o+=1 ;
        arg.shift();
      }
      else break; 
      console.log(o);
    }
    return arg;
  }

 // returns array Morse code from cleared array
  const getMorse = (arg) => {
    let oper = '';
    let temp = [];
    for (i=0;i<arg.length;i+=2){
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
      result.push(oper);
      temp.splice(0,2);
    }
    return result;
  }

  // returns decoded Letter  from Morse code
  const getDecoding = (arg) => {
    let letter = '';
    for (let value in MORSE_TABLE){
      if(value === arg.join('')){
        letter = MORSE_TABLE[value];
      }
    }
    return letter;
  }
  const getSentence = (arg) => {
    for (i=0;i<2;i++){
      console.log(clear(arg[i]), i);
    }
  }
  // console.log(getDecoding(getMorse(clear(k))));
  console.log(getSentence(getArrayOfArraysByTen(a.split(''))));
}

module.exports = {
  decode
}