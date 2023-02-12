const div = document.querySelector('div')
const buttons = document.querySelectorAll('button')
let add = 0
const increase = document.querySelector('#increase')
const reset = document.querySelector('#reset')
const decrease = document.querySelector('#decrease')

increase.addEventListener('click', () => {
	add++
	div.textContent = add
	div.style.color = 'green'
})
reset.addEventListener('click', () => {
	add = 0
	div.textContent = add
	div.style.color = 'grey'
})

decrease.addEventListener('click', () => {
	add--
	div.textContent = add
	if (add <= -1) {
		div.style.color = 'red'
	}
})
