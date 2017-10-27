(function() {

  var onSubmit = function() {
    var usernameField = document.getElementById('username');

    if (null == usernameField) {
      console.error('Username field not found');
      return;
    }

    console.log(usernameField);
    console.info('value = ' + usernameField.value);

    var usernameRegex = /(?:[^\\]*\\)?([^\\@]*)(?:@[^@]*)?/i;
    var cleanUsername = ;

    console.info('clean username = ' + cleanUsername);
  }

  var formSubmitWatcher = function() {
    var loginForm = document.querySelectorAll('form[action*="login"]');

    if (1 == loginForm.length) {
      loginForm = loginForm[0];
    } else {
      console.error('Login form not found');
      return;
    }

    console.log(loginForm);

    loginForm.addEventListener('submit', onSubmit);
  }

  document.addEventListener('DOMContentLoaded', formSubmitWatcher);

})();