var elForm = document.querySelector('.form-element');

if (elForm) {
    var elFormDistance = elForm.querySelector('.form-element__distance');
}

var elResultFoot = document.querySelector('.result-foot');
var elResultBicycle = document.querySelector('.result-bicycle');
var elResultCar = document.querySelector('.result-car');
var elResultPlane = document.querySelector('.result-plane');
var onFoot = 3.6;
var onBicycle = 20.1;
var onCar = 70;
var onPlane = 800;

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (elFormDistance.value === '') {
        elResultFoot.textContent = 'Enter any number';
        elResultBicycle.textContent = 'Enter any number';
        elResultCar.textContent = 'Enter any number';
        elResultPlane.textContent = 'Enter any number';
    }
    else if (!isNaN(elFormDistance.value)) {
        var onFootDistance = Math.round(Number(elFormDistance.value / onFoot));
        elResultFoot.textContent = `${onFootDistance} hours`;

        var onBicycleDistance = Math.round(Number(elFormDistance.value / onBicycle));
        elResultBicycle.textContent = `${onBicycleDistance} hours`;

        var onFootDistance = Math.round(Number(elFormDistance.value / onCar));
        elResultCar.textContent = `${onFootDistance} hours`;

        var onFootDistance = Math.round(Number(elFormDistance.value / onPlane));
        elResultPlane.textContent = `${onFootDistance} hours`;
        elFormDistance.value = '';
    }


    else if (isNaN(elFormDistance)) {
        elResultFoot.textContent = 'Enter any number';
        elResultBicycle.textContent = 'Enter any number';
        elResultCar.textContent = 'Enter any number';
        elResultPlane.textContent = 'Enter any number';
    }

})


var formConverter = document.querySelector('.form-converter');

if (formConverter) {
    var formInput = formConverter.querySelector('.form-converter__input');
    var formResult = formConverter.querySelector('.converter-result');
}

formConverter.addEventListener('submit', function (evt) {
    evt.preventDefault();


    if (formInput.value === '') {
        formResult.textContent = 'Please enter any number'
        formInput.value = '';
    }
    else if (!isNaN(formInput.value)) {
        formResult.textContent = `${Math.round((formInput.value * 9 / 5) + 32)} F`;
        formInput.value = '';
    }
    else if (isNaN(formInput.value)) {
        formResult.textContent = 'Please enter any number'
        formInput.value = '';
    }

})


var formIdea = document.querySelector('.form-idea');
var formIdeaTemp = formIdea.querySelector('.form-idea__temp');
var checkboxRain = formIdea.querySelector('.checkbox-rain');
var checkboxTrain = formIdea.querySelector('.checkbox-train');
var yes = document.querySelector('.yes');
var no = document.querySelector('.no');

formIdea.addEventListener('change', function () {


    if (formIdeaTemp.value === '') {
        no.style.color = 'red';
        yes.style.color = 'red';
    }
    else if (formIdeaTemp.value < 5 && checkboxTrain.checked && checkboxRain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    }
    else if (checkboxTrain.checked && checkboxRain.checked) {
        yes.style.color = 'green';
        no.style.color = 'black';
    }
    else if (checkboxRain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    }
    else if (checkboxTrain.checked) {
        yes.style.color = 'green';
        no.style.color = 'black';
    }
    else if (formIdeaTemp.value.length === 0) {
        no.style.color = 'black';
        yes.style.color = 'black';
    }
    else if (formIdeaTemp.value >= 5 && formIdeaTemp.value <= 30) {
        yes.style.color = 'green';
        no.style.color = 'black';
    }
    else if (formIdeaTemp.value < 5) {
        no.style.color = 'red';
        yes.style.color = 'black';
    }
    else if (formIdeaTemp.value <= 5 && checkboxRain.checked && checkboxTrain.checked) {
        no.style.color = 'red';
        yes.style.color = 'black';
    }
    else if (isNaN(formIdeaTemp.value)) {
        no.style.color = 'red';
        yes.style.color = 'red';
    }

});