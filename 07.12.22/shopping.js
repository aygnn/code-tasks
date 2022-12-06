const products=[
    {
        name:"Greenwich Medium Logo Shoulder Bag | Michael Kors",
        price:298.99,

    },
    {
        name:"Tommy Hilfiger",
        price:138.99,
    },
    {
        name:"Michael Kors",
        price:373.99,
    },
]
localStorage.setItem("products",JSON.stringify(products))
let body=document.querySelector("body")
let maindiv=document.createElement("div")
let card1=document.createElement("div")
let card2=document.createElement("div")
let card3=document.createElement("div")
let img1=document.createElement("img")
let img2=document.createElement("img")
let img3=document.createElement("img")
let span=document.createElement("span")
span.style.backgroundColor="green"
span.style.width="63px"
span.style.height="37px"
span.style.display="flex"
span.style.alignItems="center"
span.style.alignItems="center"
span.style.justifyContent="center"
span.style.borderRadius="9px"
span.style.position="absolute"
span.style.backgroundColor="green"



card1.style.boxShadow=" 0px 4px 32px 0px #f1ecde"
card2.style.boxShadow=" 0px 4px 32px 0px #f1ecde"
card3.style.boxShadow=" 0px 4px 32px 0px #f1ecde"



let basket=document.createElement("i")
basket.setAttribute("class","bi bi-cart3")
basket.style.fontSize="30px"
basket.style.color="white"



img1.setAttribute("src","https://michaelkors.scene7.com/is/image/MichaelKors/30H1GGRL6B-7988_1?$productMain$")
img2.setAttribute("src","https://d010204.bibloo.cz/_galerie/varianty/182/1821585-z.jpg")
img1.style.padding="10px"
img2.style.padding="10px"

img3.style.padding="10px"

img2.style.width="458px"
img2.style.height="636px"
img3.style.width="458px"
img3.style.height="636px"
img1.style.display="block"
img2.style.display="block"
img3.style.display="block"
maindiv.style.display="flex"
maindiv.style.margin="58px"
img3.setAttribute("src","https://michaelkors.scene7.com/is/image/MichaelKors/30F2G7PC2L-0001_1?$productMain$")
let button1=document.createElement("button")
let button2=document.createElement("button")
let button3=document.createElement("button")

button1.innerText="Add to Card"
button1.style.width="290px"
button1.style.marginLeft="89px"
button1.style.marginBottom="16px"
button1.style.boxShadow=" rgb(74 64 55) 0px 2px 19px -5px"
button1.classList.add("btn")
button1.classList.add("btn-primary")



button2.innerText="Add to Card"
button2.style.width="290px"
button2.style.marginLeft="89px"
button2.style.marginBottom="16px"
button2.style.boxShadow=" rgb(74 64 55) 0px 2px 19px -5px"
button2.classList.add("btn")
button2.classList.add("btn-primary")

button3.style.width="290px"
button3.style.marginLeft="89px"
button3.style.marginBottom="16px"
button3.style.boxShadow=" rgb(74 64 55) 0px 2px 19px -5px"
button3.innerText="Add to Card"
button3.classList.add("btn")
button3.classList.add("btn-primary")
body.appendChild(maindiv)
maindiv.appendChild(span)
span.appendChild(basket)


maindiv.appendChild(card1)
maindiv.appendChild(card2)
maindiv.appendChild(card3)

card1.appendChild(img1)
card2.appendChild(img2)
card3.appendChild(img3)
card1.appendChild(button1)
card2.appendChild(button2)
card3.appendChild(button3)

let count=0;
const mainbasket=[]


let bag1={
    name:"Greenwich Medium Logo Shoulder Bag | Michael Kors",
    price:298.99,  
   
    
}
let bag2={
    name:"Tommy Hilfiger",
    price:68.99,  
   
}
let bag3={
    name:"Michael Kors",
    price:373.99,  
   
}
button1.addEventListener("click",function(){
    count++
    span.innerText=count
  span.style.color="white"
   

    if(mainbasket.some(x=> x.product.name == bag1.name)){
        mainbasket.forEach(elem=> {
            if(elem.product.name == bag1.name){
                elem.count+=1
            }
        })

    }else{
        let newItem = {
            product: bag1,
            count: 1
        } 
        mainbasket.push(newItem)
    }


    localStorage.setItem("basket", JSON.stringify(mainbasket))

})
button2.addEventListener("click",function(){
    count++
    span.innerText=count
   
    if(mainbasket.some(x=> x.product.name == bag2.name)){
        mainbasket.forEach(elem=> {
            if(elem.product.name == bag2.name){
                elem.count+=1
            }
        })

    }else{
        let newItem = {
            product: bag2,
            count: 1
        }
        mainbasket.push(newItem)
    }


    localStorage.setItem("basket", JSON.stringify(mainbasket))

})
button3.addEventListener("click",function(){
    count++
    span.innerText=count
    
    if(mainbasket.some(x=> x.product.name == bag3.name)){
        mainbasket.forEach(elem=> {
            if(elem.product.name == bag3.name){
                elem.count+=1
            }
        })

    }else{
        let newItem = {
            product: bag3,
            count: 1
        }
        mainbasket.push(newItem)
    }


    localStorage.setItem("basket", JSON.stringify(mainbasket))

})







