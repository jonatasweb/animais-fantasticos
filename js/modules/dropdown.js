import clickOut from './click-outside.js';

function initModal() {
	//Vou usar JS para fazer com que quando abra o dropdown o menu fique ativo, e quando clicar fora ele fecha
	const dropdownMenus = document.querySelectorAll('[data-dropdown]')
	dropdownMenus.forEach((menu) => {
		//vou colocar em um array para não ficar repetindo código.
		//Então vou ter uma lista de eventos, ao acontecer e for um DESSES que tenho no array é disparado a callback
		['touchstart', 'click'].forEach((userEvent) => {
			menu.addEventListener(userEvent, handleClick)
		})
	})

	function handleClick(e) {
		e.preventDefault()
		this.classList.add('active')
		clickOut(this, () => {
			this.classList.remove('active')
		})
	}


	//VAMOS ADD A FUNÇÃO QUE FECHA O DROPDOWN QUANDO CLICA DO LADO DE FORA
	//MAS ANTES VAMOS VER NA PRÓXIMA AULA SOBRE "EVENT BUBBLE"
}

export default initModal();
