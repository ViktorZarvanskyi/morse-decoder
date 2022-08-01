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
    // write your solution here
    let result = '';
    let subExpr = '';

    const keyTable = {
        '00': "",
        '10': ".",
        '11': "-",
        '**': "*",
    }

    for (let i = 0; i < expr.length; i = i + 10) {
        let subSymbol = ''
        subExpr = expr.substring(i, i + 10);
        for (let j = 0; j < subExpr.length; j = j + 2) {
            subSymbol = subSymbol + keyTable[subExpr.substring(j, j + 2)];
        }
        if (subSymbol !== "*****") {
            result = result + MORSE_TABLE[subSymbol];
        } else {
            result = result + " ";
        }
    }
return result;
}

module.exports = {
    decode
}