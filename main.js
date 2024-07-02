b1 = document.getElementById('b1')
option = document.getElementById('option')
english = document.getElementById('english')
tamil = document.getElementById('TAMIL')
englishaud = document.getElementById('englishaud')
english1 = document.getElementById('english1')
option1 = document.getElementById('option1')
tamilaud = document.getElementById('tamilaud')
tamil1 = document.getElementById('tamil1')
one=document.getElementById('one')

function open1(event) {
    event.target.remove()
    one.style.display = 'block'
}

function open2() {
    option.style.display = 'block'
    option1.play()
    one.style.display = 'none'
}

function close2(event) {
    alert('you cheat gay nigga')
}

function open3() {
    option.style.display = 'none'
    option1.pause()
    english.style.display = 'block'
    english1.play()
    englishaud.play()
    englishaud.addEventListener('ended',function () {
        alert('you won nigga')
        location.reload()
    })
}

function open4() {
    option.style.display = 'none'
    option1.pause()
    tamil.style.display = 'block'
    tamil1.play()
    tamil1.addEventListener('ended', function () {
        tamilaud.play()
    })
    tamilaud.addEventListener('ended',function () {
        alert('you won nigga')
        location.reload()
    })
}

function close3(event) {
    alert('you lose nigga')
    location.reload()
}

