let message = document.getElementById('message')

let textbox = document.getElementById('textbox')

let button = document.getElementById('button')

button.addEventListener('click' , function(){
    let newmessage = document.createElement('li');
    newmessage.innerHTML = textbox.value;
    message.appendChild(newmessage)
    textbox.value = ' '
})