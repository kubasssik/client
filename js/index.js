import { users } from "./clientBas.js";
import { locality } from "./sity.js";
import { addOptionsInput } from "./address.js";
import { HelpCloud } from "./functionJS/class.js";
import { textHelp} from './functionJS/var.js';
//аккаунт
document.querySelector('title').textContent = users.login;
document.querySelector('.name__user').textContent = users.login;

const header = document.querySelector('.header');
const $headerLi = document.querySelectorAll('.header__nav-li');
const userAva = document.querySelector('.user__ava');
const dteBtn = document.querySelector('.date__btn');
const dateInput = document.querySelector('.date__input');
const $clientSelect = document.querySelectorAll('.address');
const adderssOne = document.querySelector('.address__one');
const addressTwo = document.querySelector('.address__two ');
const $allAddress = document.querySelectorAll('.label__address');
const labelPlaceOne = document.querySelector('.label__place-one');
const labelPlaceTwo = document.querySelector('.label__place-two');
const streetOne = document.querySelector('.place__one');
const streetTwo = document.querySelector('.place__two');
const $otherOne = document.querySelector('.label__other-one');
const $otherTwo = document.querySelector('.label__other-two');
const $other = document.querySelectorAll('.other');
const $tariffsRadio = document.getElementsByName('tariffs__radio');
const $selectPeople = document.querySelectorAll('.select__people');
const $labelTariffs = document.querySelectorAll('.label__tariffs');
const $help = document.querySelectorAll('.help');
const $btnDopTel = document.querySelector('.btn__dop_tel');
const $labelTelDop = document.querySelector('.label__tel_dop');
const $receiptRadio = document.querySelector('.receipt__radio');
const $textReceipt = document.querySelector('.text__receipt');
const $fakeReceipt = document.querySelector('.fake__receipt');
//*-----------------------------------------------*//
//console.log($fakeReceipt);

$receiptRadio .addEventListener('change', (e)=>{
    
    if($receiptRadio .checked){
        $textReceipt.textContent = 'Кассовый чек'
        $textReceipt.style.cssText = `
        font-weight: 700;
        left: -17px;
        top:5px;
        font-size: 20px;
        text-align: center;
        `;
        $fakeReceipt.style.top = '27px';
    }
    if(!$receiptRadio .checked){
        console.log('NO');
        $textReceipt.innerHTML = '&#129534;'
        $textReceipt.style.cssText = `
        left: 20px;
        font-size: 32px;
        `;
        $fakeReceipt.style.top = '35px';
    }
});

$btnDopTel.addEventListener('click', (e)=>{
    
    if($labelTelDop.classList.contains('display__none')){
        $labelTelDop.classList.remove('display__none')
        $btnDopTel.innerHTML =  '&#10134;'
    }
    else{
        $labelTelDop.classList.add('display__none');
       $btnDopTel.innerHTML = '&#10133;';
    }
    
})

//button for header
$headerLi.forEach((btnHead, i) => {
    btnHead.addEventListener('click', () => {
        if (i == 4) window.location.href = '/client.html';
    });
});

//

//Help for tariffs
let helpCloudForTariffs = new HelpCloud($help, $labelTariffs,textHelp);
helpCloudForTariffs.helpFunc();



//scroll window
window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        header.style.cssText = `
         position: fixed;
         top:0px;
         transition: all .5s ease-out;
         background-color: aquamarine;
         box-shadow: 0 0 3px 0 black;
         z-index: 100;
         `;
        userAva.style.background = 'wheat';
    }
    if (window.scrollY <= 80) {
        header.style.cssText = `
         top:-100px;  
         transition: all .5s ease-out;  
         `;
        userAva.style.background = 'none';
    }
});

//Обработка даты/время заказа
dteBtn.addEventListener('click', () => {
    dateInput.value = '';
    if (dteBtn.textContent == 'Сейчас') {
        dteBtn.textContent = 'Отмена срочного';
    }
    else if (dteBtn.textContent == 'Отмена срочного') {
        dteBtn.textContent = 'Сейчас';
    }
});

//Оработка инпутов адрес
locality.sity.forEach(e => {
    $clientSelect.forEach(el => {
        el.append(new Option(e.sity, e.sity));
    });
});

function addOptionsAdress(labelPlace, adderss, addOptions, street) {
    addOptionsInput(adderss, 'Алушта (ГО)', labelPlace, locality.Alusta, street, addOptions,);
    addOptionsInput(adderss, 'Армянск (ГО)', labelPlace, locality.Ermeni, street, addOptions,);
    addOptionsInput(adderss, 'Бахчисарайский район', labelPlace, locality.Bakhchisaray, street, addOptions,);
    addOptionsInput(adderss, 'Белогорский район', labelPlace, locality.Belogorsk, street, addOptions,);
    addOptionsInput(adderss, 'Джанкойский район', labelPlace, locality.Dzhankoy, street, addOptions,);
    addOptionsInput(adderss, 'Евпатория (ГО)', labelPlace, locality.Evpatoria, street, addOptions,);
    addOptionsInput(adderss, 'Кировский район', labelPlace, locality.Kirov, street, addOptions,);
    addOptionsInput(adderss, 'Красногвардейский район', labelPlace, locality.Krasnogvardeyskiy, street, addOptions,);
    addOptionsInput(adderss, 'Красноперекопский район', labelPlace, locality.Krasnoperekopskiy, street, addOptions,);
    addOptionsInput(adderss, 'Ленинский район', labelPlace, locality.Lenin, street, addOptions,);
    addOptionsInput(adderss, 'Нижнегорский район', labelPlace, locality.Nizhnegorskiy, street, addOptions,);
    addOptionsInput(adderss, 'Первомайский район', labelPlace, locality.Pervomayskiy, street, addOptions,);
    addOptionsInput(adderss, 'Раздольненский район', labelPlace, locality.Razdolnensky, street, addOptions,);
    addOptionsInput(adderss, 'Сакский район', labelPlace, locality.Saki, street, addOptions,);
    addOptionsInput(adderss, "Севастополь (ГФЗ)", labelPlace, locality.Sevastopol, street, addOptions,);
    addOptionsInput(adderss, 'Симферопольский район', labelPlace, locality.Simferopolskiy, street, addOptions,);
    addOptionsInput(adderss, 'Советский район', labelPlace, locality.Sovetskiy, street, addOptions,);
    addOptionsInput(adderss, 'Судак (ГО)', labelPlace, locality.Sudak, street, addOptions,);
    addOptionsInput(adderss, 'Феодосия (ГО)', labelPlace, locality.Feodosia, street, addOptions,);
    addOptionsInput(adderss, 'Черноморский район', labelPlace, locality.Chernomorskiy, street, addOptions,);
    addOptionsInput(adderss, 'Ялта (ГО)', labelPlace, locality.Yalta, street, addOptions,);
}
addOptionsAdress(labelPlaceOne, adderssOne, '.place__one>option', streetOne,);
addOptionsAdress(labelPlaceTwo, addressTwo, '.place__two>option', streetTwo,);


//,,,,,messenger
const $messenger = document.getElementsByName('messenger__radio');
const $messInput = document.querySelector('.messenger__input');
//Удаляет класс
function removeClass(whichBlock, removClass) {
    whichBlock.classList.remove(removClass);
}
//
function messIco(whichBlock, addClass, removClass_1, removClass_2) {
    whichBlock.classList.add(addClass);
    removeClass(whichBlock, removClass_1);
    removeClass(whichBlock, removClass_2);
}
//
let whatsApp = 'messenger__input_whatsapp';
let viber = 'messenger__input_viber';
let telegram = 'messenger__input_telegram';
//
function addDel(params, messName, aMess, bMess, cMess) {
    if (params == messName) {
        messIco($messInput, aMess, bMess, cMess);
    }
}
//
function addIconInput() {
    $messenger.forEach(e => {
        e.addEventListener('change', (mess) => {
            addDel(mess.target.value, 'whatsapp', whatsApp, viber, telegram);
            addDel(mess.target.value, 'viber', viber, telegram, whatsApp);
            addDel(mess.target.value, 'telegram', telegram, whatsApp, viber);
        });
    });
}
addIconInput();

//ТАРИФЫ tariffs__radio
function tariffs() {
    let tariffs = [
        [2, 0, 'Эконом',],
        [4, 2, 'Комфорт',],
        [4, 2, 'Комфорт +',],
        [3, 0, 'Бизнес',],
        [6, 3, 'Минивэн',],
        [10, 4, 'Миниавтобус',],
    ];

    function order(in_value, out__value, place_in, chil,) {
        //количество людей
        if (in_value == out__value) {
            if ($selectPeople[0].length != 0) {
                $selectPeople[0].length = 0;
                for (let i = 0; i < place_in; i++) {
                    $selectPeople[0].append(new Option(i + 1, i));
                }
            }
            //Количество д/кресел
            function children(children) {
                if (children.length != 0 || children.length == 0) {
                    children.length = 0;
                    for (let i = 0; i < chil; i++) {
                        children.append(new Option(i, i));
                    }
                    if (!chil) {
                        children.append(new Option('не входит'));
                        children.append(new Option('обязательно'));
                    }
                }
            }
            children($selectPeople[1]);
            children($selectPeople[2]);
        }
    }
    $tariffsRadio.forEach(tariff => {
        tariff.addEventListener('change', (e) => {
            for (let i = 0; i < tariffs.length; i++) {
                order(tariffs[i][2], e.target.value, tariffs[i][0], tariffs[i][1]);
            }
        });

    });
}
tariffs();






/*
class OrChildrenPlace {
    constructor(selectAll,select_1,select_2){
        this.selectAll = selectAll;
        this.select_1 = select_1;
        this.select_2 = select_2;
    }
    orChildren() {
        for (let i = 0; i < this.selectAll.length; i++) {
            this.select_1.addEventListener('input', () => {
                if (this.select_1.length == 2) {
                    if (this.select_1.value == 1) {
                        this.select_2.length = 0;
                        for (let i = 0; i < this.select_1.length; i++) {
                            this.select_2.append(new Option(i));
                        }
                    }
                }
            });
        }
    }
}

let selected_1 = new OrChildrenPlace($selectPeople, $selectPeople[1], $selectPeople[2]);
selected_1.orChildren();
let selected_2 = new OrChildrenPlace($selectPeople, $selectPeople[2], $selectPeople[1]);
selected_2.orChildren();

*/