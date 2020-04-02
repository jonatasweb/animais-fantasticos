function initTabNav() {
	const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
	const tabContent = document.querySelectorAll('[data-tab="content"] section');

	//função que ao ser acionada vai limpar as classes e add a .ativo
	function activeTab(index) {
		tabContent.forEach((section) => {
			section.classList.remove('ativo')
		});
		const direcao = tabContent[index].dataset.anime;			
		tabContent[index].classList.add('ativo', direcao)
	}

	if(tabMenu.length && tabContent.length) {
		// tabContent[0].classList.add('ativo');

		//Agora vou fazer com que de acordo com o número que eu passar seja adicionada uma classe ao conteúdo (EX: 0 add class no Raposa(1º item))

		//loop para adicionar o evento de click que ao ser disparado aciona a função passando o index do item clicado
		tabMenu.forEach((item, index) => {
			item.addEventListener('click', () => {
				activeTab(index)
			})
		});
	}
}

export default initTabNav()