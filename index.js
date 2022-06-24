export const $ = (x) => document.querySelector(x)

$("#submit-btn").addEventListener('click', () => {
    let text = $("#first-text").value
    try {
        if (!text) throw new Error('Empty value')
        if (!text.trim()) throw new Error('Empty value')
        $("#second-text").value = rot13(text)
    }
    catch(e) {
        console.log(e)
    }
})

function rot13(message){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const letters = message.split('')

    return letters.map(substitution).join('')

    function substitution(letter) {
        let index
        if (alphabet.toUpperCase().includes(letter)) {
            index = alphabet.toUpperCase().indexOf(letter)
            index > 12 ? index = index - 13 : index = index + 13
            return alphabet.toUpperCase()[index]
        }
        if (alphabet.toLowerCase().includes(letter)) {
            index = alphabet.toLowerCase().indexOf(letter)
            index > 12 ? index = index - 13 : index = index + 13
            return alphabet.toLowerCase()[index]
        }
        return letter
    }
}