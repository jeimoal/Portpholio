const toogleTm = document.querySelector('#toogleTm');
toogleTm.addEventListener('click', changeTheme);

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