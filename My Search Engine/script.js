var b = document.getElementById('io');
b.addEventListener('click',function () {
    b.style.border="8px white soild;"
})
document.getElementById("btn").addEventListener('click',function () {
    if (b.value=='google') {
        
			location.href ='https://www.google.com'

		
    }
    if(b.value=='facebook'){
        location.href ='https://www.facebook.com'
    }
})