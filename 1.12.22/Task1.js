

let input=document.createElement('input')
let create=document.createElement("button")
create.setAttribute("class","btn btn-success")
let deleteAll=document.createElement("button");
deleteAll.setAttribute("class","btn btn-danger")
input.setAttribute("class","form-control")
input.setAttribute("placeholder","Enter list element");
create.innerHTML="Create";
deleteAll.innerHTML="Delete All";

let div=document.createElement('div');
div.setAttribute('class',"container pt-3")

let ol=document.createElement("ol");
ol.setAttribute('class',"pt-2")


let body= document.querySelector('body');
body.append(div);
div.append(input);
div.append(create);
div.append(deleteAll);

div.append(ol);

let count=0;

create.addEventListener('click',function(){

    if(input.value.trim()!=''){
    let li = document.createElement('li');
    li.innerText=input.value;
    ol.appendChild(li);
    count++;
    }
    else{
        alert("List element can not be empty !");
    }
    input.value='';


})
deleteAll.addEventListener('click',function(){
    if(count>0){
        ol.innerHTML=""
        count=0;
    }
    else{
        alert("List is empty.")
    }
})









