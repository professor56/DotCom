var b = document.getElementById('io');

Notification.requestPermission().then(p=>{
     if(p=='granted'){
        new Notification('Dotcom',{
            body:'Notification Allow '
        })
        if(p=='denied'){
            new Notification('Dotcom',{
                body:'Notification Not  Allow '
            })
        }
     }
})

b.addEventListener('click',function () {
    b.style.border="8px white soild;"
})
document.getElementById("btn").addEventListener('click',function () {
         
        location.href ='https://www.google.com'
        new Notification('Dotcom',{
        body:'Google'
        })

		
    
    if(b.value=='facebook'){
        location.href ='https://www.facebook.com'
        
        new Notification('Dotcom',{
            body:'Facebook  '
        })
    }
    if(b.value=='instragram'){
        location.href="https://www.instragram.com"
        new Notification('Dotcom',{
            body:'Instragram'
        })
    }
})