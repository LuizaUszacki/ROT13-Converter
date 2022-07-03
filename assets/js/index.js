const $ = (x) => document.querySelector(x)


//Input Texts
const fistInputText =$("#first-text")
const secondInputText =$("#second-text")
//Error Container
const errorContainer = $('.error-container')
//Buttons
const copyButton = $("#copy-btn")
const resetButton = $('#reset-btn')
const okButton = $('#ok-btn')



//EventListeners
fistInputText.addEventListener('input', changeTextInput)
copyButton.addEventListener('click', copyText)
window.addEventListener('load', () => window.scrollTo(0, 0))
resetButton.addEventListener('click', startTyping)




//Functions
function changeTextInput() {
    let text = fistInputText.value
    secondInputText.value = changeTexttoRot13(text)
}


function copyText() {
    let text = secondInputText.value
    try {
        if (!text) throw new Error('Valor vazio.')
        if (!text.trim()) throw new Error('Valor vazio.')
        navigator.clipboard.writeText(text)
    }
    catch(e) {
        $('#error-text').textContent = (e.message === 'Valor vazio.') ? e.message + ' Adicione texto ao campo e tente novamente.' : e.message
        errorContainer.showModal()

        okButton.addEventListener('click', () => {
            errorContainer.close()
            startTyping()
        })
    }
}


function startTyping() {
    window.scrollTo(0, 0)
    fistInputText.focus()
}


function changeTexttoRot13(message){
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