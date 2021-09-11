//Escrever o Array na tela usando o DOM
// Criar uma barra que represente o valor do array 



let repete = 1000;
let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let containerresults = document.getElementById('container')


function randomnumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
//criar o loop pra os dados 
//Escrever cada valor na tela
//EM frente a cada 

for(let i = 0; i <repete;i++){
let number = randomnumber(1,6) + randomnumber(1,6)
count[number] = count[number] + 1;
 
}
console.log(count)
//Pegar o valor de cada item do array e criar um paragrafo apra ele
//Criar a barra 
//criar uma div
//colocar ambos dentro da div
//colocar a div no container

for(let i = 0; i<count.length;i++){

let writeitem = document.createElement('p')
let sectionitems = document.createElement('section') // div par armazenar o valor do numero e a div da barra
let minhabarra  =document.createElement('div')
let larguraDaBarra = count[i]
minhabarra.style.width = `${larguraDaBarra}px`;

sectionitems.appendChild(writeitem)
containerresults.appendChild(sectionitems)
writeitem.innerText = count[i]
sectionitems.appendChild(minhabarra)
}







