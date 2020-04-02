function initAnimaNumero() {
	function animaNumeros() {
		const numeros = document.querySelectorAll('[data-numero]')
	
		numeros.forEach((item) => {
			const total = +item.innerText
			const incremento = Math.floor(total / 100)
			let start = 0;
			const timer = setInterval(() => {
				start += incremento;
				item.innerText = start;
				if(start > total) {
					item.innerText = total;
					clearInterval(timer)
				}
			}, 25 * Math.random())
		})
	}
	
	//callback que vai ser ativada toda vez que o alvo sofrer mutação
		//Essa function recebe um parâmetro, que é a mutação ocorrida (tipo o event que recebemos do eventListener)
		//É um array-like, que contém todas as mutações que ocorreram. No nosso caso só estamos observando a mutação de ATTRIBUTES, e o único que muda nesse nosso caso é o 'class'
		//O que recebemos é uma lista de opções: O que mudou(class), target(ele tem O QUE sofre mutação)
		//E posso verificar se no meu ParamDaFunc[indexDoElemento].target.classList.contains('active')
	
		//Aí posso fazer para quando ocorrer do elemento target tiver a ativo a função que anima os números seja executada
		//E quando ocorrer a animação PARA de observar, para não ficar sempre animando a cada scroll já no elemento em tela
	function handleMutation(mutation) {
		if(mutation[0].target.classList.contains('ativo')) {
			observer.disconnect();
			animaNumeros();
		}
	}
	
	//criando a mudação e passando a calback
	const observer = new MutationObserver(handleMutation)
	
	//selecionando o elemendo que vou passar para o observer
	const observerTarget = document.querySelector('.numeros')
	
	//passando para o observer qual o alvo que ele tem que observar
		//parâmetro 1: elemento alvo
		//parâmetro 2: objeto é um objeto com O QUE ele tem que monitorar
	observer.observe(observerTarget, {attributes: true})
}

export default initAnimaNumero();
