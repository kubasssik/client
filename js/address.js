const inputCreateText = [
    'Выбрать город',
    'Алупка г.',
    'Бахчисарай г.',
    'Белогорск г.',
    'Джанкой г.',
    'Керчь г.',
    'Николаевка пгт',
    'Новофедоровка пгт',
    'Саки г.',
    'Симферополь г.',
    'Щёлкино г.',
    

];

//console.log(inputCreateText);



function addOptionsInput(
    address,
    sity,
    addInput,
    addSity,
    addOption,
    delOption,
 
) {

    address.addEventListener('input', () => {
        if (address.value == sity) {
            if (document.querySelectorAll(delOption).length !== 0) {
                document.querySelectorAll(delOption).forEach(e => e.remove())
            }
            addInput.classList.remove('display__none');
            addSity.forEach(e => {
                addOption.append(new Option(e, e));
            });
        }
        inputCreateText.forEach( e => {   
            if (address.value == e){
                addInput.classList.add('display__none'); 
            }
        });
       
     
    });
}

export { addOptionsInput }