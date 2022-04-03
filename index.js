let emailInput = document.querySelector('#emailInput');
let subscribeBtn = document.querySelector('#subscribeBtn');
let errorMsg = document.querySelector('#errorMessage');
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

subscribeBtn.onclick = () => {
	// check if email input is not empty and email format is correct
	if (emailInput.value !== "" && emailInput.value.match(emailFormat)) {
		emailInput.classList.add("valid-input");
    emailInput.classList.remove("invalid-input");
    errorMsg.classList.add("hide-error-msg");
		errorMsg.classList.remove("show-error-msg");
		alert("You have succesfully subscribe!");
		emailInput.value = '';
	}
	
	else {
		emailInput.classList.remove("valid-input");
		emailInput.classList.add("invalid-input");
		errorMsg.classList.remove("hide-error-msg");
		errorMsg.classList.add("show-error-msg");
	}
}
