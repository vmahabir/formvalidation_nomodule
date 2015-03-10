# formvalidation_nomodule
A simple form validation created in Javascript without a mailer and without a Module Pattern


####HTML
Set up a form. Check out the HTML file that is included in this repo. 

####CSS
Set up a CSS stylesheet. I have a basic stylesheet included in the repo.

Assuming you are using the form.html file all of the elements have been implemented. If not, it's important to connect your CSS file & connect your javascript with the HTML file like so:


    <link rel="stylesheet" href="css/style.css">


Put this referral in the head of your html file.

It's recommended to first load the basics and afterwards load in the js files. Put the following code at the end of the page but in front of the body end tag

  	<script type="text/javascript" src="js/validate_module.js"></script>
  	<script type="text/javascript" src="js/app.js"></script>

####JS

**validator_module.js**

The Javascript has **NOT** been built up in a Module Pattern. Use with caution when implementing it in your own build. I also have a version in a [module pattern.](https://github.com/vmahabir/Formvalidation_module)  It contains the full functionality for the validation including the initialisation of the function.

The function starts by declaring the form by ID and identifies the form elements by name: 

<pre lang="js">
  <code>var inputName = form.querySelectorAll(['input[name="fname"],input[name="lname"],input[name="email"],textarea[name="msg"]']);</code>
</pre>

In order to keep the error report - elements hidden in the HTML, the function starts with <pre lang="js"><code>var validateOnKey = false;</code></pre>

the *showError* function checks if an error is necessary. 

The *validate* function starts off by validating all the necessary elements which are used to validate input and error elements in the HTML. After that, checks if the input fields are filled. the element *emailField* is also checked on regular expressions.
Then the amount of errors and the *validateOnKey* will be checked if it is true or false.

at the end is a loop that checks if there is a value been typed in and starts validating when keys are being pressed.









