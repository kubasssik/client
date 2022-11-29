import { users } from "./clientBas.js";

const wrClient = document.querySelector('.wr__client-input');
const allInputClient = document.querySelectorAll('.client__input');
const clientInputLog = document.querySelector('.client__input-login');
const clientInputPass = document.querySelector('.client__input-pass');
const btnClient = document.querySelector('.client__button');

//focus placeholder
let pl;
allInputClient.forEach(el => {
    el.addEventListener('focus', (ev) => {  
        pl = ev.target.placeholder;
        ev.target.placeholder = '';
        ev.target.previousElementSibling.textContent = pl;   
    });
});
allInputClient.forEach(el => {
    el.addEventListener('blur', (ev) => {
        if(ev.target.value !== ''){
            ev.target.previousElementSibling.textContent = pl; 
        }
        else(ev.target.previousElementSibling.textContent = '');
        ev.target.placeholder = pl;    
    });
});

// check input
function checkInpu(inp, check, inp2) {
    inp.addEventListener('input', () => {
        /*
        if(inp.value.search(/^[a-zA_Z0-9_-]{1,16}$/i)){
            alert('Используйте пожалуйста a-z/0-9/_-')
            inp.value ='';
        }
        */
        if (inp.value === check) {
            inp.nextElementSibling.classList.add('good');
            inp.nextElementSibling.classList.remove('no__good');
        };
        if (inp.value !== check ) {
            inp.nextElementSibling.classList.remove('good');
            inp.nextElementSibling.classList.add('no__good');
        };
        
        if (inp.nextElementSibling.classList.contains('good') && inp2.nextElementSibling.classList.contains('good')) {
            btnClient.style.display = 'block';

            btnClient.addEventListener('click', ()=>{
               wrClient.style.display = 'none';
               let newElm = document.createElement('p');
               newElm.textContent = 'ПЕРЕХОДИМ В ЛИЧНЫЙ КАБИНЕТ'
               newElm.classList.add('p__load');
               document.body.prepend(newElm);
               

                setTimeout(() => {
                    window.location.href = '/index.html' 
                }, 1200);
                    
                });
        };
        if (inp.nextElementSibling.classList.contains('no__good') || inp2.nextElementSibling.classList.contains('no__good')) {
            btnClient.style.display = 'none';
        };

    });
};

checkInpu(clientInputLog, users.login, clientInputPass);
checkInpu(clientInputPass, users.pass, clientInputLog);
