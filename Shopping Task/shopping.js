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


let span=document.createElement("span")
span.style.Color="white"
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


Creat();



img1.setAttribute("src","https://michaelkors.scene7.com/is/image/MichaelKors/30H1GGRL6B-7988_1?$productMain$")
img2.setAttribute("src","https://d010204.bibloo.cz/_galerie/varianty/182/1821585-z.jpg")
img3.setAttribute("src","https://michaelkors.scene7.com/is/image/MichaelKors/30F2G7PC2L-0001_1?$productMain$")



let basket=document.createElement("i")
basket.setAttribute("class","bi bi-cart3")
basket.style.fontSize="30px"
basket.style.color="white"


body.appendChild(maindiv)
maindiv.appendChild(span)
span.appendChild(basket)


Append();


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


AddLIsten(button1,bag1)
AddLIsten(button2,bag2)
AddLIsten(button3,bag3)


function Creat()
{
    for(let i=1; i<4 ; i++)
    {
        
        this["card"+i] = document.createElement("div")
        this ["img"+i] =document.createElement("img")
        this["card"+i].style.boxShadow=" 0px 4px 32px 0px #f1ecde"
        this ["img"+i].style.padding="10px"
        this ["img"+i].style.display="block"
        if(i>1)
        {
            this ["img"+i].style.width="458px"
            this ["img"+i].style.height="636px"
        }
        maindiv.style.display="flex"
        maindiv.style.margin="58px"

        
        this["button"+i]=document.createElement("button")
        this["button"+i].innerText="Add to Card"
        this["button"+i].style.width="290px"
        this["button"+i].style.marginLeft="89px"
        this["button"+i].style.marginBottom="16px"
        this["button"+i].style.boxShadow=" rgb(74 64 55) 0px 2px 19px -5px"
        this["button"+i].classList.add("btn")
        this["button"+i].classList.add("btn-primary")
    }
}




function AddLIsten(button,bag)
{
    button.addEventListener("click",function(){
        count++
        span.innerText=count
        if(mainbasket.some(x=> x.product.name == bag.name)){
            mainbasket.forEach(elem=> {
                if(elem.product.name == bag.name){
                    elem.count+=1
                }
            })
    
        }else{
            let newItem = {
                product: bag,
                count: 1
            }
            mainbasket.push(newItem)
        }
    
    
        localStorage.setItem("basket", JSON.stringify(mainbasket))
    
    })
}

function Append()
{
    for(let i=1;i<4;i++)
    {
        maindiv.appendChild((this["card"+i]))
        this["card"+i].appendChild((this["img"+i]))
        this["card"+i].appendChild((this["button"+i]))
    }
}