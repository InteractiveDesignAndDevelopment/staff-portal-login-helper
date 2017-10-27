# staff-portal-login-helper

This forces the proper login domain into the username field when the login form is submitted.

## Deployment

### Step 1: Copy the JavaScript File

Copy the `staff-portal-login-helper.js` file to the `<staff portal web root>/Scripts` directory.

```
<staff portal web root>
 |
 +-- Scripts
      |
      +-- staff-portal-login-helper.js
```

### Step 2: Alter the HTML File

Open the `_login.html` file in the `<staff portal web root>/IdentityServer/Templates` directory.

```
<staff portal web root>
 |
 +-- IndentifyServer
      |
      +-- Templates
          |
          +-- _login.html
```

And add a `script` tag to include the JavaScript file like the one below to the bottom of the `_login.html` file.

```html
<script src="/Scripts/staff-portal-login-helper.js"></script>
```