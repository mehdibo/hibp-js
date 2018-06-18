# hibp-js
This library allows you to check if a password exists in the [Have I Been Pwned](https://haveibeenpwned.com/Passwords) database

## How does it work?
The library will first hash the password using SHA-1 and then send the first 5 characters to HIBP's server which will return a list of hashes that starts with those characters.

We then check if the hash exists in the returned list and fire an event `hibpCheck` with the result

## Usage
You should first load the library
```html
<script src="lib/hibp.min.js"></script>
```

Then you can call the `hibpCheck('PASSWORD HERE')` function, it will fire an event `hibpCheck` with the result.

Don'ts:
- Don't tell users your password is secure just because it wasn't found in hibp.
- Don't use this over insecure HTTP (if you don't use HTTPS you simply don't care enough about your users' data)

## Example
```javascript
// When the result is ready check if the password was found or not
document.addEventListener('hibpCheck', function (e) {  
    if(e.detail){
        alert('Found');
    } else {
        alert('Not Found');
    }
});
hibpCheck('password');
```
Full example can be found [here](example.html)