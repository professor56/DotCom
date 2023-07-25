var b = document.getElementById('io');
let sp=new SpeechSynthesisUtterance()
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
document.getElementById("btn").addEventListener('click',function () {
    if(b.value=='google'){
        location.href ='https://www.google.com'
        new Notification('Dotcom',{
        body:'Google'
        })
        sp.text="go to Google "
        window.speechSynthesis.speak(sp)
    }
		
    
    if(b.value=='facebook'){
        location.href ='https://www.facebook.com'
        sp.text='go to facebook'
        window.speechSynthesis.speak(sp);
        new Notification('Dotcom',{
            body:'Facebook  '
        })
    }
    if(b.value=='instragram'){
        location.href="https://www.instragram.com"
        new Notification('Dotcom',{
            body:'Instragram'
        })
        sp.text='go to instragram'
        window.speechSynthesis.speak(sp)
    }
    if(b.value=='gmail'){
        location.href ='https://mail.google.com/mail/u/0/#inbox'
        new Notification('Dotcom',{
        body:'Gmail'
        })
    }
})