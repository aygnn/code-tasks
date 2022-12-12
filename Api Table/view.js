const viewApi = localStorage.getItem("viewApi")
let views = JSON.parse(localStorage.getItem("viewApi")) ?? []
console.log(views);


let div=document.querySelector("div")
div.classList.add("card")
let ul=document.querySelector("#ul")
let li1=document.querySelector("#li1")
let li2=document.querySelector("#li2")
let li3=document.querySelector("#li3")
li1.innerHTML="<b>Company Name</b>-"+views.companyName
li2.innerHTML="<b>Contact Name</b>-"+views.contactName
li3.innerHTML="<b>Contact Title</b>-"+views.contactTitle





