function initScrollSuave() {
   function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute('href')
      const section = document.querySelector(href)

      section.scrollIntoView({
         behavior: "smooth",
         block: 'start'

      });
   // Duas formas alternativas
   //    const topSection = section.offsetTop;
   //    window.scrollTo(0, top)
   //    window.scrollTo({
   //    	top: topSection,
   //    	behavior: 'smooth'
   //    })

   // Usando o scrollInToView()
   //    Scrolla até aparecer na visão
   //    Essa também tem opções, podemos passar se vai mostrar o top do elemento, center, final, definir a transição com behavior, etc.


   }
   const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

   linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
   });
}

export default initScrollSuave();