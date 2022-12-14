let button =document.querySelector(".fi-rs-apps")
let fbdiv=document.querySelector(".fb")
let check=document.querySelector(".checkbtn")
let bar=document.querySelector(".esas")
button.addEventListener("click",function(){
    fbdiv.classList.toggle("visible")


})

check.addEventListener("click",function(){
    bar.classList.toggle("seen")
})