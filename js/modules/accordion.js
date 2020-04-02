function initAccordion() {
	const accordionList = document.querySelectorAll('.js-accordion dt');

	//Então vou fazer com que ao clicar eu adicione .ativo ao próximo elemento (cliquei no DT, add no próximo (DD))
	function activeAccordion() {
		this.classList.toggle('ativo'); //Nesse eu quero pq vou deixar ele diferente
		this.nextElementSibling.classList.toggle('ativo')
	}

	if(accordionList.length){
		accordionList[0].classList.add('ativo')
		accordionList[0].nextElementSibling.classList.add('ativo')

		//Aqui vou criar a função. Posso receber o event nela (o evento sempre passa ele como parâmetro pra função callback)
		//E a partir do event eu consigo o currentTarget. Vou usar o 'this', e assim não preciso receber o 'event' como parâmetro.

		accordionList.forEach((item) => {
			item.addEventListener('click', activeAccordion); //Ñ vou precisar passar index
		});
	}
}

export default initAccordion()