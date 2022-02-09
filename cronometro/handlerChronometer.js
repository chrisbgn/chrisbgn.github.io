var pause = false;
var started = false;

async function handleStart() {
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    pause = false;
    let days = document.getElementById("days").innerHTML;
    let hours = document.getElementById("hours").innerHTML;
    let minutes = document.getElementById("minutes").innerHTML;
    
    do {
        let seconds = document.getElementById("seconds").innerHTML;
        var tempSec = Number(seconds);
        seconds =+ (tempSec + 1).toString();
        document.getElementById("seconds").innerHTML = seconds;

        await sleep(1000);

        if(seconds == 59 && minutes != 59) {
            seconds = 0;
            var tempMin = Number(minutes);
            minutes =+ (tempMin + 1).toString();
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            await sleep(1000);
        }
        if(minutes == 59 && seconds == 59 && hours != 23) {
            minutes = 0;
            seconds = 0;
            var tempHr = Number(hours);
            hours =+ (tempHr + 1).toString();
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            await sleep(1000);
        }
        if(minutes == 59 && seconds == 59 && hours == 23) {
            hours = 0
            minutes = 0;
            seconds = 0;
            var tempDay = Number(days);
            days =+ (tempDay + 1).toString();
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            await sleep(1000);
        }
        
    } while (pause == false);
}

function handlePause() {
    pause = true;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function handleStop() {
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    pause = true;
    document.getElementById("days").innerHTML = "00 ";
    document.getElementById("hours").innerHTML = "00 ";
    document.getElementById("minutes").innerHTML = "00 ";
    document.getElementById("seconds").innerHTML = "00 ";
}