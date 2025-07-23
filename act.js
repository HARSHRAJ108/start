let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let i=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=i.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    i.value=" ";
    

});
let delbtns=document.querySelectorAll(".delete");
//topic is how to delete an added element
let list=document.querySelector("ul");
list.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
})


// for(delbtn of delbtns){
//    delbtn.addEventListener("click",function(){
//     let par=this.parentElement;
//     par.remove();
//    })
// }