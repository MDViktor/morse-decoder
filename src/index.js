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
  let z = [];
  let k = [
    '0', '0', '1', '1',
    '1', '0', '1', '1',
    '1', '0'
  ];
  const clear = (arg) =>{
    for (i=0;i<arg.length;i){
      if (arg[i]!=='1') arg.shift();
      else break; 
    }
    return arg;
  }

  const check = (arg) => {
    if (arg.join('') === '10'){
      arg.splice(0,2,'.');
    }
    else if(arg.join('')=== '11'){
      arg.splice(0,2,'-');
    }
    return arg;
  }
  const reorg = (arg) =>{
    for (i=0;i<arg.length;i+=2){
      var t = arg.slice(i, (i+2));
      console.log(t);
      t = check(t);
      console.log(t);
      arg.splice(i,2,t);
    }
    return arg;
  }  
  // for (i=0;i<x.length; i+=10)
  //   z.push(x.splice(i,10));
  
  console.log(reorg(clear(k)));

    
}

module.exports = {
  decode
}