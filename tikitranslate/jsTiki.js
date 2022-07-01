var blueTheme = document.getElementById('blue-theme');
const storedInput = localStorage.getItem('bg-color');

if (storedInput) {
    document.body.classList.add(storedInput)
}

blueTheme.onclick = function () {
    if (document.body.classList.contains("red-theme")) {
        document.body.classList.remove("red-theme")
        document.body.classList.add("blue-theme");
        bgColor = 'blue-theme';
        saveToLocalStorage();
    } else {
        return
    }
}

var redTheme = document.getElementById('red-theme');

redTheme.onclick = function () {
    document.body.classList.add("red-theme");
    bgColor = 'red-theme';
    saveToLocalStorage();
}



const saveToLocalStorage = () => {
    localStorage.setItem('bg-color', bgColor);
}

var countDownDate = new Date("Jan 5, 2024 00:0:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // Display the result in the element with id="demo"
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("sec").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);





// function getColor() {
//     let themeBtns = document.querySelectorAll('.btn-style-color');
//     for (let themeBtn of themeBtns) {
//         let dataColor = themeBtn.getAttribute('data-color');
//         let buttonColor = themeBtn.getAttribute('button-color')
//         document.querySelector(':root').style.setProperty('--background-color', dataColor);
//         document.querySelector(':root').style.setProperty('--button-color', buttonColor);
//     }
// }

// function changeBgColor(color) {
//     if (color) window.localStorage.setItem('--background-color', color);
//     else if (!(color = window.localStorage.getItem('--background-color'))) return;
//     var elements = document.getElementsByClassName('btn-style-color')
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.background = color;
//     }
// }






