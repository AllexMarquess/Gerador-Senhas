let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefgksa[jsfçljçldsçlkdsglçkçgssd155458785552!@#$%¨¨&&***256555jf";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.Value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.Value;
}


function generatePassword(){

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.Value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }


    containerPassword.classList.remove("hide");
    Password.innerHTML = pass;
    novaSenha = pass;
    
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}