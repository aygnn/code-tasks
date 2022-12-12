let body=document.querySelector("body")
let maindiv=document.querySelector(".main")
let body1=document.querySelector(".body1")
let body2=document.querySelector(".body2")
let buttons=document.querySelector(".button")
let card=document.querySelector(".card")
let span1=document.querySelector(".span1")
let span2=document.querySelector(".span2")
let span3=document.querySelector(".span3")

let box=document.querySelector("blockquote")
let p=document.querySelector("p")


span1.addEventListener("click",function(){
    p.innerHTML="salam"
})

body.appendChild(maindiv)
maindiv.appendChild(body1)
maindiv.appendChild(body2)
body1.appendChild(buttons)
body2.appendChild(buttons)

buttons.appendChild(span1)
buttons.appendChild(span2)
buttons.appendChild(span3)
maindiv.appendChild(card)

card.appendChild(box)
box.appendChild(p)



