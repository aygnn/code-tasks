const viewApi = localStorage.getItem("viewApi")
let views = JSON.parse(localStorage.getItem("editApi")) ?? []


let div=document.querySelector("div")
div.classList.add("card")
let ul=document.querySelector("#ul")
ul.classList.add("list-group")
ul.classList.add("list-group-flush")
let li1=document.querySelectorAll("#li1")
let li2=document.querySelectorAll("#li2")
let li3=document.querySelectorAll("#li3")
li1.value=views.companyName
li2.value=views.contactName
li3.value=views.contactTitle





