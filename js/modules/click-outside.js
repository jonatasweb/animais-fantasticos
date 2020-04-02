function initClickOut() {
	function clickOut(element, event, callback) {
		const html = document.documentElement
		const outside = 'data-outside'
	
		if(!element.hasAttribute(outside)) {
			setTimeout(() => {html.addEventListener('click', handleOutsideClick)})
			element.setAttribute(outside, '')
		}
	
		function handleOutsideClick(event) {
			if(!element.contains(event.target)) {
				element.removeAttribute(outside)
				html.removeEventListener('click', handleOutsideClick)
				callback()
			}
		}
	}
}

export default initClickOut();