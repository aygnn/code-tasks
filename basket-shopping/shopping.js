// const products=[
//     {
//         name:"Greenwich Medium Logo Shoulder Bag | Michael Kors",
//         price:298.99,

//     },
//     {
//         name:"GUESS BAG",
//         price:68.99,
//     },
//     {
//         name:"Tommy Hilfiger",
//         price:138.99,
//     },
// ]
// localStorage.setItem("products",JSON.stringify(products))
// let body=document.querySelector("body")
// let maindiv=document.createElement("div")
// let card1=document.createElement("div")
// let card2=document.createElement("div")
// let card3=document.createElement("div")
// let img1=document.createElement("img")
// let img2=document.createElement("img")
// let img3=document.createElement("img")
// let span=document.createElement("span")
// span.style.backgroundColor="green"
// span.style.width="63px"
// span.style.height="37px"
// span.style.display="flex"
// span.style.alignItems="center"
// span.style.alignItems="center"
// span.style.justifyContent="center"
// span.style.borderRadius="9px"
// span.style.position="absolute"
// span.style.backgroundColor="green"


// let basket=document.createElement("i")
// basket.setAttribute("class","bi bi-cart3")
// basket.style.fontSize="30px"
// basket.style.color="white"



// img1.setAttribute("src","https://michaelkors.scene7.com/is/image/MichaelKors/30H1GGRL6B-7988_1?$productMain$")
// img2.setAttribute("src","https://d010204.bibloo.cz/_galerie/varianty/182/1821585-z.jpg")
// img2.style.width="458px"
// img2.style.height="617px"
// img3.style.width="458px"
// img3.style.height="617px"
// img1.style.display="block"
// img2.style.display="block"
// img3.style.display="block"
// maindiv.style.display="flex"
// img3.setAttribute("src","https://www.brandfield.com/media/catalog/product/cache/small_image/400x/c96a280f94e22e3ee3823dd0a1a87606/s/w/swvb85-410-olv.jpg")
// let button1=document.createElement("button")
// let button2=document.createElement("button")
// let button3=document.createElement("button")

// button1.innerText="Add to Card"
// button2.innerText="Add to Card"
// button3.innerText="Add to Card"
// body.appendChild(maindiv)
// maindiv.appendChild(span)
// span.appendChild(basket)


// maindiv.appendChild(card1)
// maindiv.appendChild(card2)
// maindiv.appendChild(card3)

// card1.appendChild(img1)
// card2.appendChild(img2)
// card3.appendChild(img3)
// card1.appendChild(button1)
// card2.appendChild(button2)
// card3.appendChild(button3)

// let count=0;
// const mainbasket=[]


// let bag1={
//     name:"Michael Kors",
//     price:298,
//     count:count.value,

// }
// let bag2={
//     name:"GUESS BAG",
//     price:68,
//     count:count.value
// }
// let bag3={
//     name:"Tommy Hilfiger",
//     price:138.99,
//     count:count.value
// }



// button1.addEventListener("click",function(){
//     // count++
//     // span.innerText=count
//     // localStorage.setItem("bag1",JSON.stringify(bag1))

//     if(mainbasket.some(x=> x.product.name == bag1.name)){
//         mainbasket.forEach(elem=> {
//             if(elem.product.name == bag1.name){
//                 elem.count+=1
//             }
//         })

//     }else{
//         let newItem = {
//             product: bag1,
//             count: 1
//         }
//         mainbasket.push(newItem)
//     }


//     localStorage.setItem("basket", JSON.stringify(mainbasket))

// })
// button2.addEventListener("click",function(){
//     count++
//     span.innerText=count
//     localStorage.setItem("bag2",JSON.stringify(bag2))

// })
// button3.addEventListener("click",function(){
//     count++
//     span.innerText=count
//     localStorage.setItem("bag3",JSON.stringify(bag3))

// })
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    dots:false,
});
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
let nav=document.querySelector("nav")


let span=document.createElement("span")
span.setAttribute("href","shoppingbasket.html")
let a=document.querySelector(".basket")






Creat();



img1.setAttribute("src","https://michaelkors.scene7.com/is/image/MichaelKors/30H1GGRL6B-7988_1?$productMain$")
img2.setAttribute("src","https://d010204.bibloo.cz/_galerie/varianty/182/1821585-z.jpg")
img3.setAttribute("src","https://michaelkors.scene7.com/is/image/MichaelKors/30F2G7PC2L-0001_1?$productMain$")



let basket=document.createElement("i")
basket.setAttribute("class","bi bi-cart-fill")
basket.style.fontSize="30px"
basket.style.color="black"


body.appendChild(maindiv)
nav.appendChild(span)
span.appendChild(a)
a.appendChild(basket)


Append();



let bag1={
    name:"Greenwich Medium Logo Shoulder Bag | Michael Kors",
    price:298.99,
    img:"https://michaelkors.scene7.com/is/image/MichaelKors/30H1GGRL6B-7988_1?$productMain$"

    
}
let bag2={
    name:"Tommy Hilfiger",
    price:68.99,
    img:"https://d010204.bibloo.cz/_galerie/varianty/182/1821585-z.jpg"

}
let bag3={
    name:"Michael Kors",
    price:373.99,
    img:"https://michaelkors.scene7.com/is/image/MichaelKors/30F2G7PC2L-0001_1?$productMain$"
    
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
        maindiv.style.justifyContent="center"
        
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


let count=0;
const mainbasket=[]


function AddLIsten(button,bag)
{
    button.addEventListener("click",function(){
        let spancount=document.querySelector(".count")
        count++
        spancount.innerText=count
        spancount.style.color="white"
        spancount.style.fontSize="13px"
        
        
        
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







