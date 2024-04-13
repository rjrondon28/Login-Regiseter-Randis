let btn = document.querySelector('#btn');
let closet = document.querySelector('.closet');
let banner = document.querySelector('.banner');
let verpass = document.querySelector('#password');
let verpass1 = document.querySelector('#password-r');
let verpass2 = document.querySelector('#password-cr');
let btnLink = document.querySelector('.register-link');
let btnLinkR = document.querySelector('.register-link-r');

btn.addEventListener("click", ()=>{
	banner.classList.add('active');
	document.querySelector('body').classList.add('active');
});
closet.addEventListener("click", ()=>{
	banner.classList.remove('active');
	document.querySelector('body').classList.remove('active');
	banner.classList.remove('Register')
});
function verPass(){
	if (verpass.type === "password") {
		verpass.type = "text";
	}else{
		verpass.type="password"
	}
}
function verPassR(){
	if (verpass1.type === "password" &&
		verpass2.type === "password") {
		verpass1.type = "text";
		verpass2.type = "text";
	}else{
		verpass1.type="password";
		verpass2.type = "password";
	}
}
btnLink.addEventListener("click", ()=>{
	banner.classList.add('Register');
});
btnLinkR.addEventListener("click", ()=>{
	banner.classList.remove('Register');
});