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
                       alert("Deleted successfully!")
           
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
                       
                     
                    localStorage.setItem("editApi", JSON.stringify(element))
                 }
                

   
        
            })
        })
        let viewbtns=document.querySelectorAll(".bi-eye-fill")
        viewbtns.forEach(btn=>{
            btn.addEventListener("click",function(e){
                let viewattr = e.target.getAttribute("viewatt")
                
                    if( viewattr==element.id){
                        console.log(element);
                        
        
                     
                    localStorage.setItem("viewApi", JSON.stringify(element))
                 }
                

        
            })
        })




         })
    })
        
