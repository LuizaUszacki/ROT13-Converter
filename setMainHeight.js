import { $ } from './index.js'

const header = $('header').offsetHeight
const footer = $('footer').offsetHeight
const viewHeight = window.innerHeight
const main = $('main').offsetHeight

console.log(main)

if (viewHeight > (main + header + footer) ) {
    $('main').style.height = `${(viewHeight - (header + footer))}px`
}

console.log($('main').offsetHeight)