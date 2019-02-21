// When the button is clicked check the password
document.getElementById('checkPass').addEventListener('click', function(){
	hibpCheck(document.getElementById('value').value);
});
// When the result is ready check if the password was found or not
document.addEventListener('hibpCheck', function (e) {
	if(e.detail){
		document.getElementById('danger').textContent="Found";
		document.getElementById('success').textContent="";
	} else {
		document.getElementById('danger').textContent="";
		document.getElementById('success').textContent="Not Found";
	}
});