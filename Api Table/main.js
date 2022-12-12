let suppliers=[]
axios.get("https://northwind.vercel.app/api/suppliers")
.then(response=>{
    response.data.forEach(element => {
        let tr = document.createElement("tr")
      let companyName=document.createElement("td")
      companyName.innerHTML=element.companyName
      let contactName=document.createElement("td")
       contactName.innerHTML=element.contactName;
       let contactTitle=document.createElement("td")
      contactTitle.innerHTML=element.contactTitle;
      let Settings=document.createElement("td")
      let deleteBtn = document.createElement("button")
      let deleteIcon = document.createElement("i") 
      deleteIcon.classList.add("bi")
      deleteIcon.classList.add("bi-trash-fill")
      deleteIcon.setAttribute("deleteatt", element.id)
      deleteBtn.style.width="40px"
      deleteBtn.style.height="40px"
      deleteBtn.style.borderRadius="5px"
      deleteBtn.style.borderColor="#bc1919"
      deleteBtn.style.backgroundColor="#bc1919"
      deleteIcon.style.fontSize="20px"
      deleteIcon.style.color="white"
      deleteBtn.appendChild(deleteIcon)
      Settings.appendChild(deleteBtn)


      let editBtn = document.createElement("button")
      let editlink=document.createElement("a")
      editlink.setAttribute("href","edit.html")
      let editIcon = document.createElement("i") 
      editIcon.classList.add("bi")
      editIcon.classList.add("bi-pencil-fill")
      editIcon.setAttribute("editatt", element.id)
      editBtn.style.width="40px"
      editBtn.style.height="40px"
      editBtn.style.borderRadius="5px"
      editBtn.style.borderColor="#dddbd4"
      editBtn.style.backgroundColor="#dddbd4"
      editlink.style.Color="#ffffff"


      editBtn.style.fontSize="20px"
      editlink.appendChild(editIcon)
      editBtn.appendChild(editlink)
      Settings.appendChild(editBtn)


      let viewBtn = document.createElement("button")
      let viewlink=document.createElement("a")
      viewlink.setAttribute("href","view.html")

      let viewIcon = document.createElement("i") 
      viewIcon.classList.add("bi")
      viewIcon.classList.add("bi-eye-fill")
      viewIcon.setAttribute("viewatt", element.id)
      viewBtn.style.width="40px"
      viewBtn.style.height="40px"
      viewBtn.style.borderRadius="5px"
      viewBtn.style.borderColor="#ffc107"
      viewBtn.style.backgroundColor="#ffc107"
      viewBtn.style.fontSize="20px"
      viewBtn.style.color="white"
      viewlink.style.Color="#ffffff"

      viewlink.appendChild(viewIcon)
        viewBtn.appendChild(viewlink)
      Settings.appendChild(viewBtn)



      tr.append(companyName)
       tr.append(contactName)
       tr.append(contactTitle)
       tr.append(Settings)
       document.getElementById("tbody").append(tr)
    

            
       
       let deletebtns=document.querySelectorAll(".bi-trash-fill")
            deletebtns.forEach(ele=>{

                ele.addEventListener("click", function(e){
                       let deleteattr = e.target.getAttribute("deleteatt")

                       
                        try {
                            if(deleteattr==element.id){
                                
                                axios.delete(`https://northwind.vercel.app/api/suppliers/${element.id}`)
                            
                       .then(response=>console.log(response))
                       e.target.parentElement.parentElement.parentElement.remove()
           
                        }
                            
                        } catch (error) {
                            console.log(error)
                        }
                        
                    })
                 })


        let editbtns=document.querySelectorAll(".bi-pencil-fill")
        editbtns.forEach(btn=>{
            btn.addEventListener("click",function(e){
                let editattr = e.target.getAttribute("editatt")
                
                    if( editattr==element.id){
                        console.log(element);
                        
                    // suppliers.push(element)
                     
                    localStorage.setItem("editApi", JSON.stringify(element))
                 }
                

            // const suppliers=JSON.parse(localStorage.getItem("suppliers"))
        
            })
        })
        let viewbtns=document.querySelectorAll(".bi-eye-fill")
        viewbtns.forEach(btn=>{
            btn.addEventListener("click",function(e){
                let viewattr = e.target.getAttribute("viewatt")
                
                    if( viewattr==element.id){
                        console.log(element);
                        
                    // suppliers.push(element)
                     
                    localStorage.setItem("viewApi", JSON.stringify(element))
                 }
                

            // const suppliers=JSON.parse(localStorage.getItem("suppliers"))
        
            })
        })




         })
    })
        
        
        



   
// let table=document.querySelector("table")
      
//         table.innerHTML+=`<tr>
//         <td style="width:0">${elem.companyName}</td>
//         <td style="width:400px">${elem.contactName}</td>
//         <td><i id=this["minus"+i] class="bi bi-dash-square-fill"></i>${elem.contactTitle}</td>
       
//       </tr>
//       `





// }));


// const obj={
    //   companyName:""
    // }
    // const user = localStorage.getItem("user")
    // let userapi = JSON.parse(localStorage.getItem("user"))
    // console.log(userapi);
    
    
    // let table=document.querySelector("table")
    
    
    
    // userapi.forEach(elem => {
        
    //     table.innerHTML+=`<tr>
    //     <td style="width:0">${elem.companyName}</td>
    //     <td style="width:400px">${elem.contactName}</td>
    //     <td>${elem.contactTitle}</td>
    //   </tr>
    //   `
      
      
      
    // })
    //     createTableElem(elem)
    
    
    
    // function createTableElem(tableItem) {
        
//     let row = document.createElement("tr")

//     let companyName = document.createElement("td")
//     companyName.innerText = tableItem.companyName
//     row.appendChild(companyname)

//     let contactName = document.createElement("td")
//     contactName.innerText = tableItem.contactName
//     row.appendChild(contactName)

//     let contactTitle = document.createElement("td")
//     contactTitle.innerText = tableItem.contactTitle
//     row.appendChild(contactTitle)

   
// }
