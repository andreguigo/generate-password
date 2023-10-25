# Passwords Generator

The code is a basic example of generating simple and secure passwords of up to 32 characters.

## Usage

Use the constant `generatePassword` to output as in the example:

`HTML`

```
<p id="result"> </p>

<script src="generate-password.js"></script>
<script>
    let result = document.getElementById('result');
    result.innerText = generatePassword;
</script>
```


Another example of use limiting the number of characters:

`js`
```
let limit = 12;
generatePassword.slice(0, limit);
```

#### Bonus

The constant `copyClipboard` makes use of the function that copies the result to the desktop. 

To not use this function, comment out the constant in the file.