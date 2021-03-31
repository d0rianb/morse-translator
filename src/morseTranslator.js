const morseToAlphabet = {
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z'
}

const alphabetToMorse = Object.assign({}, ...Object.entries(morseToAlphabet).map(([key, val]) => ({
    [val]: key
})))
const acceptableLetters = Object.values(morseToAlphabet)

class MorseTranslator {

    static sanitizeLetter(letter) {
        if (letter === ' ') return ''
        if (!acceptableLetters.includes(letter.toLowerCase())) return
        return alphabetToMorse[letter]
    }

    static translate(text) {
        return text
            .split('')
            .map(MorseTranslator.sanitizeLetter)
            // .filter(letter => letter !== '/')
            .join('/')
    }
}

export default MorseTranslator