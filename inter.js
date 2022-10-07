const toogleTm = document.querySelector('#toogleTm'); //acessa item no html
toogleTm.addEventListener('click', changeTheme); //adiciona evento de click

//função para alterar o tema da página
function changeTheme (){
	let tmDark = document.querySelector('#tmDark')
	let tmBright = document.querySelector('#tmBright')

	if(tmDark.disabled == true) {
		tmBright.disabled = true;
		tmDark.disabled = false;
	} else {
		tmDark.disabled = true;
		tmBright.disabled = false;
	}
};

const menu = document.querySelector('#menu'); //acessa item no html
menu.addEventListener('click', respMenu); //adiciona evento de click

//função para dar toggle no menu em telas menores do que 768px
function respMenu() {
	let mItems = document.querySelector('#mItems');
	let inner = window.innerWidth;

	if(inner < 768) {
		mItems.classList.toggle('rspMenu');
	} else {};
};