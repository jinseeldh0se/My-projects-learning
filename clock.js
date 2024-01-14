setInterval(setClock, 1000)

const hourhand = document.querySelector('[clock-hour]')
const minutehand = document.querySelector('[clock-minute]')
const secondhand = document.querySelector('[clock-second]')

function setClock(){

    const datenow = new Date()
    const secondratio = datenow.getSeconds() / 60
    const minuteratio = (secondratio + datenow.getMinutes()) / 60
    const hourratio = (minuteratio + datenow.getHours()) / 12

    setRotation(hourhand, hourratio)
    setRotation(minutehand, minuteratio)
    setRotation(secondhand, secondratio)
}

function setRotation(element, rotationratio){

    element.style.setProperty('--rotation', rotationratio * 360)

}


function darkmode(){

    var button = document.querySelector('[dark-mode]')
    var body = document.body
    var numbers = document.querySelectorAll('[dark-mode1]')
    var clock = document.querySelector('[clock-back]')
    var hour = document.querySelector('[clock-hour]')
    var minute = document.querySelector('[clock-minute]')
    var name = document.querySelector('.name')
    var year = document.querySelector('[year]')
    var month = document.querySelector('[month]')
    var day = document.querySelector('[day]')
    var full = document.querySelector('[full]')



    
    body.style.backgroundColor = body.style.backgroundColor === 'white' ? '#262626':'white'
    numbers.forEach(function(number){
        var atcol = number.style.color || getComputedStyle(number).color
        number.style.color = atcol === 'black' ? 'white' : 'black'
    })
    clock.style.backgroundColor = clock.style.backgroundColor === 'white' ? 'black' : 'white'
    hour.style.backgroundColor = hour.style.backgroundColor === 'black' ? 'white' : 'black'
    minute.style.backgroundColor = minute.style.backgroundColor === 'black' ? 'white' : 'black'
    name.style.color = name.style.color === 'black' ? 'white' : 'black'
    year.style.backgroundColor = year.style.backgroundColor === 'black'?'white':'black'
    month.style.backgroundColor = month.style.backgroundColor === 'black'?'white':'black'
    day.style.backgroundColor = day.style.backgroundColor === 'black'?'white':'black'
    year.style.color = year.style.color === 'white'?'black':'white'
    month.style.color = month.style.color === 'white'?'black':'white'
    day.style.color = day.style.color === 'white'?'black':'white'
    full.style.backgroundColor = full.style.backgroundColor === 'white'? '#262626':'white'

    if (button.classList.contains('darktolight')) {
        button.classList.remove('darktolight');
        button.classList.add('darktolight-2');
        
        
    } else {
        button.classList.remove('darktolight-2');
        button.classList.add('darktolight');
        
    }

}

setClock()

function dateFunction(){

    var datebox1 = document.querySelector('[year]')
    var datebox2 = document.querySelector('[month]')
    var datebox3 = document.querySelector('[day]')
    var dateToday = new Date()

    const option1 = {
        year: 'numeric'
    }

    const option2 = {
        month: 'short',
        day: 'numeric'
    }

    const option3 = {
        weekday: 'short'
    }

    datebox1.textContent = dateToday.toLocaleDateString('en-Us', option1)
    datebox2.textContent = dateToday.toLocaleDateString('en-Us', option2)
    datebox3.textContent = dateToday.toLocaleDateString('en-Us', option3)

}

dateFunction()

function fullScreen(){

    var full = document.documentElement
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        full.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    }

    var button = document.querySelector('[full]')

    if (button.classList.contains('full')) {
        button.classList.remove('full');
        button.classList.add('full-2');
    } else {
        button.classList.remove('full-2');
        button.classList.add('full');
    }

}