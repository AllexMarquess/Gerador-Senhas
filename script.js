
let SliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let passoword = document.querySelector('#passoword');

let containerPassoword = document.querySelector('#container-passoword');

let charset = 'abcdefghijepqrstuvxzy123456789*!@#$%';
let novasenha = "";

sizePassword.innerHTML = SliderElement.Value;

Slider.oninput = function(){
    sizePassword.innerHTML = this.Value;
}    

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < SliderElement.Value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    console.log(pass);

}