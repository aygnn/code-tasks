const editApi = localStorage.getItem("editApi")
let suppliers = JSON.parse(localStorage.getItem("editApi")) ?? []



let companyname=document.querySelector("#company")
let contactname=document.querySelector("#contact")
let contactTitle=document.querySelector("#title")
let savebtn=document.querySelector("#create")
let goback=document.querySelector("#back")
companyname.value=suppliers.companyName,
    contactname.value=suppliers.contactName,
    contactTitle.value=suppliers.contactTitle,

savebtn.addEventListener("click",function(){
    
  suppliers.companyName=companyname.value
   suppliers.contactName=contactname.value,
    suppliers.contactTitle=contactTitle.value,
    
    
    
    axios.put(`https://northwind.vercel.app/api/suppliers/${suppliers.id}`)
    // .then(res=>console.log(res));
})





