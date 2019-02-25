let language = {
    errorTitle: 'Проверьте корректность полей', 
    requiredFields: 'Заполните обьязательные поля'
}

$.validate({
    language: language,
    borderColorOnError: 'red',
    errorMessagePosition: 'top',
    validateOnBlur: false
});

let regexNumber = /^[0-9]*$/;
let regexLatinic = /^[a-zA-Z]+$/;

$('input[name^="serial"]').keypress((evt) => {

    if(evt.key.match(regexNumber) === null) {
        evt.preventDefault();
    }

})

$('#cvv-code').keypress((evt) => {
    
    if(evt.key.match(regexNumber) === null) {
        evt.preventDefault();
    }

})

$('input[name="card-holder"').keypress((evt) => {
    
    if(evt.key.match(regexLatinic) === null) {
        evt.preventDefault();
    }

})

