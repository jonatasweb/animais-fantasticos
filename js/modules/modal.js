function initModal() {
   const btnOpen = document.querySelector('[data-modal="abrir"]')
   const btnClose = document.querySelector('[data-modal="fechar"]')
   const containerModal = document.querySelector('[data-modal="container"]')

   function open(event) {
      event.preventDefault()
      containerModal.classList.add('ativo')
   }

   function close() {
      containerModal.classList.remove('ativo')
   }

   function outClick(event) {
      if(event.target === this) {
         close();
      }
   }

   if(btnOpen && btnClose && containerModal) {
      btnOpen.addEventListener('click', open)
      btnClose.addEventListener('click', close)
      containerModal.addEventListener('click', outClick)
   }
}

//Ou posso usar o toggle() e ao invés de ter open() e close() eu posso ter somente uma chamada toggleModal()

export default initModal();