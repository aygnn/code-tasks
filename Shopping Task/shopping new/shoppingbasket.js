let countSpan = document.querySelector("#count")
let tbody = document.querySelector("tbody")
localStorage.getItem("basket")
console.log(localStorage.getItem("basket"));
      let deleteBtn = document.createElement("a")
let getbasket = JSON.parse(localStorage.getItem("basket"))
console.log(getbasket);

let count = 0;
let table=document.querySelector("table")


getbasket.forEach(elem => {
  count += elem.count
  createTableElem(elem)
})

countSpan.innerText = count

function createTableElem(basketItem) {

  let row = document.createElement("tr")
  let img = document.createElement("td")
  let imgFile= document.createElement("img")
  imgFile.src = basketItem.product.img
  imgFile.classList.add("basket-img")
  img.appendChild(imgFile)
  row.appendChild(img)

  let name = document.createElement("td")
  name.innerText = basketItem.product.name
  row.appendChild(name)


  let price = document.createElement("td")
  price.innerText = basketItem.product.price
  row.appendChild(price)

  // let totalprice = document.createElement("td")
  // totalprice.innerText = basketItem.count
  // row.appendChild(totalprice)


  let counttd = document.createElement("td")

  let decrease = document.createElement("span")
  decrease.innerText = "-"
  decrease.classList.add("remove")
  decrease.setAttribute("prodId", basketItem.product.id)
  counttd.appendChild(decrease)

  let countspan = document.createElement("span")
  countspan.innerText = basketItem.count
  counttd.appendChild(countspan)

  let increase = document.createElement("span")
  increase.innerText = "+"
  increase.classList.add("add")
  increase.setAttribute("prodId", basketItem.product.id)
  counttd.appendChild(increase)

  row.appendChild(counttd)

  tbody.appendChild(row)

  increase.addEventListener("click", function (e) {
      getbasket.forEach(elem => {
          if (elem.product.id == e.target.getAttribute("prodId")) {
              console.log("here");
              elem.count += 1;
              return;
          }
      })
      count += 1;
      countSpan.innerText = count;
      this.previousElementSibling.innerText++

      localStorage.setItem("basket", JSON.stringify(getbasket))
  })

  decrease.addEventListener("click", function (e) {
      getbasket.forEach(elem => {
          if (elem.product.id == this.getAttribute("prodId")) {
              if (elem.count == 1) {
                  getbasket = getbasket.filter(x=> x.product.id !=elem.product.id)
                  e.target.parentElement.parentElement.remove()
                  return;
              } else {
                  elem.count -= 1
                  this.nextElementSibling.innerText--
                  return;
              }
          }
      })
      count -= 1;
      countSpan.innerText = count;
      localStorage.setItem("basket", JSON.stringify(getbasket))
  })
}


// getbasket.forEach(elem => {
//     let i=1
//     table.innerHTML+=`<tr>
//     <td style="width:0"><img src="${elem.product.img}" alt=""></td>
//     <td style="width:400px">${elem.product.name}</td>
//     <td>${elem.product.price}</td>
//     <td><i id=this["minus"+i] class="bi bi-dash-square-fill"></i>${elem.count}<i id=this[plus+i] class="bi bi-plus-square-fill"></i></td>
//     <td>${elem.product.price * elem.count}</td>
//   </tr>
//   `
//   i++
  
  
// })

// PlusorMinus(plus1,minus1,bag1)

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





// function  PlusorMinus(plus,minus,bag){
//   plus.addEventListener("click",function(){
//   if(getbasket.some(x=> x.product.name == bag.name)){
//     getbasket.forEach(elem=> {
//         if(elem.product.name == bag.name){
//             elem.count+=1
//         }
//     })
  
//   }})}


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


