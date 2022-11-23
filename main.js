let form = document.querySelector('#form')
let result = document.querySelectorAll('.list__time')
let distance = document.querySelector('#inp').value;
// console.log(distance);
let time = {
    person: '3.6',
    bycicle: 20.1,
    car: 70,
    airplane:800
}

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    function calc(){
        let distance = document.querySelector('#inp').value;
        let natija = Math.round(distance.split('km')[0] / time['person']);
        return natija
    }

    function calcBy(){
        let distance = document.querySelector('#inp').value;
        let natija = Math.round(distance.split('km')[0] / time['bycicle']);
        return natija
    }

    function calcCar(){
        let distance = document.querySelector('#inp').value;
        let natija = Math.round(distance.split('km')[0] / time['car']);
        return natija
    }
    function calcAirplane(){
        let distance = document.querySelector('#inp').value;
        let natija = Math.round(distance.split('km')[0] / time['airplane']);
        return natija
    }

    result[0].innerHTML = `${calc()} soat` 
    result[1].innerHTML = `${calcBy()} soat` 
    result[2].innerHTML = `${calcCar()} soat` 
    result[3].innerHTML = `${calcAirplane()} soat` 

    form.reset();
})


