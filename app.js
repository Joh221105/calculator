const button = document.querySelectorAll('span')

let display = ""

button.forEach((jack) => {
    jack.addEventListener('click', (e)=>{
        display+= e.target.innerHTML
        display = display.replace(/\s+/g, '');
        document.querySelector('#numInput').innerHTML = display
    })

})

document.querySelector("#clear").addEventListener('click', (e) => {
    display = ""
    document.querySelector('#numInput').innerHTML = display
})


document.querySelector('#equal').addEventListener('click', (e) => {
    display = Function("return " + display)()
    document.querySelector('#numInput').innerHTML = display
    })


