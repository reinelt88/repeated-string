'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {

    if (s.length !== 1) {
        const qtyOccurrencesOfA = countString(s, 'a')
        const stringLength = s.length
        if (qtyOccurrencesOfA > 0) {

            const qtyStringsInsideChain = n/stringLength

                const integerNumber = Math.floor(qtyStringsInsideChain)
                const qty = integerNumber * qtyOccurrencesOfA
                const rest = n % stringLength
                const newChain = s.slice(0, rest)
                const restQty = countString(newChain, 'a')

                return restQty + qty
        } 

    } else {
        if (s === 'a')
            return n;
    }

    return 0
}

function countString(chain, letter){
    const re = new RegExp(letter, 'g');
    if (chain.match(re)!==null) {
        return chain.match(re).length;
    } else {
        return 0;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
