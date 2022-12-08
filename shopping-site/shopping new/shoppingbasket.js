localStorage.getItem("basket")
console.log(localStorage.getItem("basket"));
let getbasket = JSON.parse(localStorage.getItem("basket"))
console.log(getbasket);

let table=document.querySelector("table")



getbasket.forEach(elem => {
    let i=1
    table.innerHTML+=`<tr>
    <td style="width:0"><img src="${elem.product.img}" alt=""></td>
    <td style="width:400px">${elem.product.name}</td>
    <td>${elem.product.price}</td>
    <td><i id=this["minus"+i] class="bi bi-dash-square-fill"></i>${elem.count}<i id=this[plus+i] class="bi bi-plus-square-fill"></i></td>
    <td>${elem.product.price * elem.count}</td>
  </tr>
  `
  i++
  
  
})

PlusorMinus(plus1,minus1,bag1)

// let plus=document.querySelector("#plus")

//   plus.addEventListener("click",function(){
//     if(getbasket.some(x=> x.product.name == bag.name)){
//       getbasket.forEach(elem=> {
//           if(elem.product.name == bag.name){
//               elem.count+=1
//           }
//       })
//        }
//     })

function  PlusorMinus(plus,minus,bag){
  plus.addEventListener("click",function(){
  if(getbasket.some(x=> x.product.name == bag.name)){
    getbasket.forEach(elem=> {
        if(elem.product.name == bag.name){
            elem.count+=1
        }
    })
  
  }})}


    // let body = document.querySelector("body")
    // let maindiv = document.createElement("div")
    // maindiv.classList.add("row")


    // let col3 = document.createElement("div")
    // col3.classList.add("col-3")
    // col3.style.backgroundColor = "#ccc"
    // col3.innerHTML= `<img src="${elem.img} alt="" >`


    // let col6 = document.createElement("div")
    // col6.classList.add("col-6")
    // col6.style.backgroundColor = "#aaa"
    // col6.innerText = "aaaa"


    // let col33 = document.createElement("div")
    // col33.classList.add("col-3")
    // col33.style.backgroundColor = "#bbb"
    // col33.innerText = "aa"


    // body.appendChild(maindiv)
    // maindiv.appendChild(col3)
    // maindiv.appendChild(col6)
    // maindiv.appendChild(col33)


