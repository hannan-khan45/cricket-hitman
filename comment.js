function addComment(){

let input=document.getElementById("commentInput");

let list=document.getElementById("commentList");

if(input.value==="") return;

let li=document.createElement("li");

li.textContent=input.value;

list.appendChild(li);

input.value="";

}