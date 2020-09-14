$(document).ready(function(){
	$('input[name="phone"]').mask('+38(099) 999-9999')
	// $('.input[name="phoneHead"]').mask('+38(099) 999-9999')
});

window.onload = () => {
	const [...switcherItems] = document.querySelectorAll('.forms__switch__item')

	for (let elem of switcherItems) {
		if (elem !== null) {
			elem.onclick = () => {
				if (!elem.classList.contains('forms__switch__item--active')) {
					elem.classList.add('forms__switch__item--active')
					console.log(elem.nextElementSibling)
					if (elem.nextElementSibling != null) {
						elem.nextElementSibling.classList.remove('forms__switch__item--active')
						console.log('Hello')
					}
					if (elem.previousElementSibling != null) {
						elem.previousElementSibling.classList.remove('forms__switch__item--active')
						console.log(elem.previousElementSibling)

					}					
				}
			}
		}
		
	}

	const aboutMe = document.getElementById('aboutMe')
	const aboutMeText = document.getElementById('aboutMeText')

	aboutMe.onclick = () => {
		if(!aboutMeText.classList.contains('teacher--active')) {
			aboutMeText.classList.add('teacher--active')
		} else {
			aboutMeText.classList.remove('teacher--active')
		}
	}

	const inputPhone = document.querySelector('input[name="phone"]')
	const inputName = document.querySelector('input[name="name"]')
	const btnForm = document.querySelector('#btnForm')

	inputPhone.oninput = function (e) {
		console.log(e.target.value)
		if (e.target.value.length < 3) {
			this.style.borderColor = 'red'
		} else {
			this.style.borderColor = '#ffffff'
		}
	}	
	inputName.oninput = function (e) {
		console.log(e.target.value)
		if (e.target.value.length < 3) {
			this.style.borderColor = 'red'
		} else {
			this.style.borderColor = '#ffffff'
		}
	}
	btnForm.onclick = () => {
		if (inputPhone.value.length < 3) {
			inputPhone.style.borderColor = 'red'
		} else {
			inputPhone.style.borderColor = '#ffffff'
		}
		if (inputName.value.length < 3) {
			inputName.style.borderColor = 'red'
		} else {
			inputName.style.borderColor = '#ffffff'
		}
		console.log(inputPhone.value.length)
		if (inputPhone.value.length > 3 && inputName.value.length > 3) {
			form.submit()
		}
	}
}
