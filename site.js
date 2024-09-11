
//console.log('hi')+
//console.log(document.querySelector('h1'))

// Change h1: style, timer, words

const nav = document.querySelector('nav')
nav.addEventListener('mouseenter', () => { 

    const h1 = document.querySelector('h1')
    h1.textContent = 'Pass All of your Classes'
    h1.style.textDecoration = "underline"
    h1.style.fontWeight = "bold"
})

setTimeout(() =>{

    const h1 = document.querySelector('h1')
    h1.textContent = 'Pay Attention to School'
    h1.style.textDecoration = "underline"
    h1.style.fontWeight = "bold"

}, 5000 )


const h2 = document.querySelector('h2')  //  declare h2 as a variable h2
h2.textContent = 'Turn Main Content Section red'
h2.style.color = 'maroon'
h2.style.fontFamily = 'cursive'

const three = document.querySelector('h3')  //  declare h3 as variable three
three.style.color = 'navy'
three.style.fontFamily = 'lobster'

const aboutA = document.getElementById('about')
aboutA.style.color = 'orange'

const fly = document.querySelector('section .pigs')  // querySelecror can grab class with .
fly.style.color = 'skyblue' 
fly.style.fontFamily = 'cursive'


//  to shorten the search within the document 
const section = document.querySelector('section') 

const active = section.querySelector(' .active')  //  section. replaces document.
active.style.color = 'gold'

const p = section.querySelector('section p')  // combining selectors
p.style.color = "green"

const span = section.querySelector('section span')
span.style.color = 'purple'


//  selecting multiple elements 
const activeElements = document.querySelectorAll('.active')

//activeElements.forEach(el => el.style.border = '1px solid red')

for (let i = 0; i < activeElements.length; i++)
{
    activeElements[i].style.border = '1px dashed white'
}
