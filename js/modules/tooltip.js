//Vou add a tooltip no Mapa, para ao passar o mouse ser mostrada uma informação adicional
//Vai ser criado uma nova <div> e no corpo dessa div estará o conteúdo do 'aria-label'. Farei uma função que cria essa div.
function initTooltip() {
	const tooltips = document.querySelectorAll('[data-tooltip]');
	tooltips.forEach((tooltip) => {
		tooltip.addEventListener('mouseover', onMouseOver)
	})

	function onMouseOver() {
		const tooltipBox = criarTooltipBox(this) //retornei e armazenei para poder remover o conteúdo depois

		onMouseMove.tooltipBox = tooltipBox
		this.addEventListener('mousemove', onMouseMove)

		onMouseLeave.tooltipBox = tooltipBox;
		onMouseLeave.element = this;

		this.addEventListener('mouseleave', onMouseLeave)
	}

	const onMouseMove = {
		handleEvent(e) { //aqui vou precisar pois quero as coordenadas do meu mouse
			this.tooltipBox.style.top = e.pageY + 20 + 'px'//mudei para cá para att os valores sempre que mover o mouse (tirei do onMouseOver())
			this.tooltipBox.style.left = e.pageX + 20 + 'px'//mudei para cá para att os valores sempre que mover o mouse (tirei do onMouseOver())
		}
	}


	//PS: A função onMouseLeave não vai achar o tooltipBox porque ela está dentro de outra função, outro escopo.
	//PS: Para resolver passamos um objeto no lugar da callback dentro da função que tem o acesso à tooltipBox, assim ela acessa o objeto
	//PS: Nesse objeto TEM QUE TER um método chamado 'handleEvent', e neste tendo um this.tooltipBox.remove(), pois o this vai ser a função que queremos acesso
	const onMouseLeave = {
		tooltipBox: '',
		element: '',
		handleEvent() {
			this.tooltipBox.remove();
			this.element.removeEventListener('mouseleave', onMouseLeave)
			this.element.removeEventListener('mousemove', onMouseMove)
		}
	}

	function criarTooltipBox(elemento) {
		const tooltipBox = document.createElement('div')
		const text = elemento.getAttribute('aria-label')
		tooltipBox.classList.add('tooltip')
		tooltipBox.innerText = text
		document.body.appendChild(tooltipBox)
		return tooltipBox //retornei e armazenei para poder remover o conteúdo depois
	}
}

export default initTooltip()