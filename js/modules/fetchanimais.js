function initFetchAnimais() {
	
}
//Função que vai fazer o fetch dos dados
async function fetchAnimais(url) {
   const animaisResponse = await fetch(url);
   const animaisResponseJson = await animaisResponse.json();
   const numerosGrid = document.querySelector('.numeros-grid')

   //percorrendo o array retornado e a cada iteração chamo a função que de fato cria o animal
   animaisResponseJson.forEach((animal) => {
      const divAnimal = createAnimal(animal) //essa createAnimal retorna uma div montada pronta pro HTML (como ela retorna algo, eu guardo em uma variável)
      numerosGrid.appendChild(divAnimal) //a cada iteração eu add a div no html
   })
}

fetchAnimais('./animaisapi.json')

//função que vai criar o elemento animal a partir do array capturado na fetchAnimais
function createAnimal(animal) {
   const div = document.createElement('div')
   div.classList.add('numero-animal')

   div.innerHTML = `
      <h3>${animal.especie}</h3>
      <span data-numero>${animal.total}</span>
      `
   return div
}

export default initFetchAnimais()


//PS: Tinha vezes em que atualizava a tela e os números não animavam
//Isso acontecia pq o initAnimaNumeros() estava sendo invocado ANTES do fetch ter os números pra ele colocar.

//Ao invés de invocar a initAnimaNumeros na script.js, como todos os módulos, vamos invocar ela somente após o fetch ter dado certo
//PS: Antes de invocar no fetch eu tenho que import ela pra usar.