import MorseTranslator from './morseTranslator.js'

const input = document.querySelector('#mainInput')
const result = document.querySelector('#result')

input.addEventListener('input', (val) => {
    const text = input.value
    const translatedText = MorseTranslator.translate(text)
    result.innerText = translatedText
})
