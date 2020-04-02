function initScrollAnimacao() {
	function animaScroll() {
		const sections = document.querySelectorAll('[data-anime="scroll"]');
		const window60 = window.innerHeight * 0.75;
	
		sections.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			if(sectionTop < window60) {
				section.classList.add('ativo')
			}else if(section.classList.contains('ativo')) { //para remover e a animação ficar repetindo no site
				section.classList.remove('ativo')
			}
		});
	}
	window.addEventListener('scroll', animaScroll)
	
	
	
	
	
	// outra maneira
	/*
	function animaScroll() {
		sections.forEach((section) => {
			const sectionTop = section.getBoundingClientRect().top;
			const sectionVisible = (sectionTop - window60) < 0
			if(sectionVisible) {
				section.classList.add('ativo')
			}
		});
	}
	*/
}

export default initScrollAnimacao();