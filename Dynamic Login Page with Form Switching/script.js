let singupBtn =document.getElementById('singupBtn');
let singinBtn =document.getElementById('singinBtn');
let nameField =document.getElementById('nameField');
let title =document.getElementById('title');
let submitBtn =document.getElementById('submitBtn');
let formBox =document.getElementById('formBox');



submitBtn.onclick =function(){
    formBox.style.visibility= 'visible';
}

function closeIcon(){
    formBox.style.visibility='hidden';
}


singinBtn.onclick = function(){
    nameField.style.maxHeight= "0";     
    title.innerHTML = "sing in ";         
    singupBtn.classList.add("disable");    
    singinBtn.classList.remove("disable");   
}

singupBtn.onclick = function(){
    nameField.style.maxHeight= "68px";     
    title.innerHTML = "sing up "; 
    singupBtn.classList.remove("disable");    
    singinBtn.classList.add("disable");   
}