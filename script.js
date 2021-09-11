//script para adicionar o paragrafos com os valores do array e a barra 

let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]
let containerresults = document.getElementById('container')

//Função que gera um numero aleatório
function randomnumber(min, max) {
 min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  //Loop para gerar  o array
for(let i = 0; i <1000;i++){
  let number = randomnumber(1,6) + randomnumber(1,6)
  count[number] = count[number] + 1;
 }

//Loop para escrver os resultados na tela
for(let i = 0; i<count.length;i++){

  let writeitem = document.createElement('p')
  let sectionitems = document.createElement('section') // div par armazenar o valor do numero e a div da barra
  let minhabarra  =document.createElement('div')
  minhabarra.style.width = `${count[i]}px`;

  sectionitems.appendChild(writeitem)
  containerresults.appendChild(sectionitems)
  writeitem.innerText = count[i]
  sectionitems.appendChild(minhabarra)
}







