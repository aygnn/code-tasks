
axios.get("https://northwind.vercel.app/api/suppliers")
.then((response)=>
response.data.forEach(element => {

   let tr = document.createElement("tr")
      let companyName=document.createElement("td")
      companyName.innerHTML=element.companyName

      let contactName=document.createElement("td")
       contactName.innerHTML=element.contactName;

      let country=document.createElement("td")
      country.innerHTML=element.contactName;

       tr.append(companyName)
       tr.append(contactName)
       tr.append(contactName)
      
       document.getElementById("tbody").append(tr)
  
  
      }))