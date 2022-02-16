window.onload = function () {
    let seconds=0;
    let tens=0;

    let buttonstart = document.querySelector('#bsta');

    let appendSecond = document.querySelector('#seconds');

    let appendTens = document.querySelector('#tens');

    let interval;

    buttonstart.onclick = () => {
        interval = setInterval(startTimer, 10);
    }

    function startTimer() {
        tens++;

        tens< 9 ? appendTens.innerHTML='0'+tens: appendTens.innerHTML=tens;
        if(tens>99){
            seconds++;
            appendSecond.innerHTML='0'+seconds;
            tens=0;
            appendTens.innerHTML='0'+0;
        }
        if(seconds>9){
            appendSecond.innerHTML=seconds;
        }
    }
}