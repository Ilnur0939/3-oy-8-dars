let form = document.querySelector('#form')
let result = document.querySelectorAll('.list__time')
let distance = document.querySelector('#inp').value;
// console.log(distance);
let time = {
    person: 3.6,
    bycicle: 20.1,
    car: 70,
    airplane: 800
}

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    function calcPerson(){
        let distance = document.querySelector('#inp').value;
        let natija = Math.floor(distance.split('km')[0] / time['person']);
        return natija
    }
    function minPerson(){
        distance = document.querySelector('#inp').value;
        son = distance.split('km')[0] / time['person']
        natija = Math.trunc(distance.split('km')[0] / time['person']);
        let qwer = (son.toFixed(1) % natija.toFixed(1)) * 60
        return qwer.toFixed(0)
    }  

    function calcBy(){
        distance = document.querySelector('#inp').value;
        natija = Math.floor(distance.split('km')[0] / time['bycicle']);
        return natija
    }
    function minBy(){
        distance = document.querySelector('#inp').value;
        son = distance.split('km')[0] / time['bycicle']
        natija = Math.floor(distance.split('km')[0] / time['bycicle']);
        qwer = (son.toFixed(1) % natija.toFixed(1)) * 60
        return qwer.toFixed(0)
    }

    function calcCar(){
        distance = document.querySelector('#inp').value;
        natija = Math.floor(distance.split('km')[0] / time['car']);
        return natija
    }

    function minCar(){
        distance = document.querySelector('#inp').value;
        son = distance.split('km')[0] / time['car']
        natija = Math.floor(distance.split('km')[0] / time['car']);
        qwer = (son.toFixed(1) % natija.toFixed(1)) * 60
        return qwer.toFixed(0)
    }
    function calcAirplane(){
        distance = document.querySelector('#inp').value;
        natija = Math.floor(distance.split('km')[0] / time['airplane']);
        return natija
    }

    function minAirplane(){
        distance = document.querySelector('#inp').value;
        son = distance.split('km')[0] / time['airplane']
        natija = Math.floor(distance.split('km')[0] / time['airplane']);
        qwer = (son.toFixed(1) % natija.toFixed(1)) * 60
        return qwer.toFixed(3)
    }
    console.log(minAirplane());
    result[0].innerHTML = `${calcPerson()} soat ${minPerson()} daqiqa` 
    result[1].innerHTML = `${calcBy()} soat ${minBy()} daqiqa` 
    result[2].innerHTML = `${calcCar()} soat ${minCar()} daqiqa` 
    result[3].innerHTML = `${calcAirplane()} soat ${minAirplane()} daqiqa` 

    form.reset();
})


