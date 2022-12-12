let companyname=document.querySelector("#company")
let contactname=document.querySelector("#contact")
let contactTitle=document.querySelector("#title")
let createbtn=document.querySelector("#create")
let goback=document.querySelector("#back")



createbtn.addEventListener("click",function(){
    let obj={
        companyName:companyname.value,
            contactName:contactname.value,
            contactTitle:contactTitle.value,
    }
    axios.post("https://northwind.vercel.app/api/suppliers",obj)
    .then(res=> console.log(res))
    alert("Data Created!")
    setTimeout()

    localStorage.setItem("user",JSON.stringify(obj))
    let userapi=JSON.parse(localStorage.getItem("user"))
    console.log(userapi);



})





