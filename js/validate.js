// variables including form, inputfield names(html - > name), validate starting point
var form = document.getElementById('nawForm');
var inputName = form.querySelectorAll(['input[name="fname"],input[name="lname"],input[name="email"],textarea[name="msg"]']);
var validateOnKey = false;

// errorField show/hide
var showError = function(elementId, text){
	var errorElement = document.getElementById(elementId);
	errorElement.innerHTML = text;
	if (text && text !== '') {
		errorElement.style.display = 'block';  // if there is the error text inside <p>, than show it.
	}
}

// start Validating input
function validate(){
	var fields = new Array;

// variables inputfields  
	var fnameField = document.getElementById('firstname').value;
	var lnameField = document.getElementById('lastname').value;
	var messageField = document.getElementById('message').value;
	var emailValField = document.getElementById('email').value;
	
// variables error elems
	var fnameError = document.getElementById('fillinFname').style.display = 'none';
	var lnameError = document.getElementById('fillinLname').style.display = 'none';
	var emailError = document.getElementById('fillinEmail').style.display = 'none';
	var msgError = 	document.getElementById('fillinMsg').style.display = 'none';
	
// variables array (Fields Array)
	var fields = [fnameField,lnameField,emailValField,messageField];

// email regular expressions
	var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
// Variable created to keep Track of Errors
	var err = 0;

// Start Validation Loop
	for (i=0;i<fields.length;i++){
// Check Fields in Array to Make Sure they are not Empty
		if (fields[i].value === ''){
			err++;
		}
	}

// Check if inputfield (name = fname) is filled		
	if (fnameField === '') {
		err++;
		showError('fillinFname', 'please enter first name');
	} else {
		fnameError;
	}
// Check if inputfield (name = lname) is filled		
	if (lnameField === '') {
		err++;
		showError('fillinLname', 'please enter last name');
	} else {
		lnameError;
	}
// Check if inputfield (name = email) is filled + validated with regular expressions		
	if (emailValField === '' || !emailRegEx.test(emailValField)) {
		err++;
		showError('fillinEmail', 'please enter email');	
	}else {
		emailError;
	} 
// Check if text field (name = msg) is filled		
	if (messageField === '') {
		err++;
		showError('fillinMsg', 'Please enter a message.');
	} else {
		msgError;
	}

// Check if amount of errors is bigger then 0 & if var validateOnKey is true or false 		
	if(err > 0 && validateOnKey === false) {
		console.log(validateOnKey)
		validateOnKey = true;
	} else {
		validateOnKey = false;
	}

// Check That There are No Errors
	if (err === 0){
		//Submit Form
		return true;
	} else {
// If there are errors, return false and alert the user
		return false;
	}
};

// validate input when pressing a key
for(var i=0; i < inputName.length; i++){
	inputName[i].addEventListener('keyup', validate);
}