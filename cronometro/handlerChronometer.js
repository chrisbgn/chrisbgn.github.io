var pause = false;
var started = false;

async function handleStart() {
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    pause = false;
    console.log('has presionado start');
    console.log(document.getElementById("days").innerHTML);
    let days = document.getElementById("days").innerHTML;
    let hours = document.getElementById("hours").innerHTML;
    let minutes = document.getElementById("minutes").innerHTML;
    
    do {
        let seconds = document.getElementById("seconds").innerHTML;

        var tempSec = Number(seconds);
        console.log(tempSec);
        seconds =+ (tempSec + 1).toString();
        console.log(seconds);
        document.getElementById("seconds").innerHTML = seconds;
        console.log(`Waiting 1 second...`);
        await sleep(1000);
        if(seconds == 59) {
            seconds = 0;
            var tempMin = Number(minutes);
            console.log(tempMin);
            minutes =+ (tempMin + 1).toString();
            console.log(minutes);
            document.getElementById("minutes").innerHTML = minutes;
            
            document.getElementById("seconds").innerHTML = seconds;
            await sleep(1000);
        }
        if(minutes == 59 && seconds == 59) {
            minutes = 0;
            var tempHr = Number(hours);
            console.log(tempHr);
            hours =+ (tempHr + 1).toString();
            console.log(hours);
            document.getElementById("hours").innerHTML = hours;
            
            document.getElementById("minutes").innerHTML = minutes;
        }
        if(minutes == 59 && seconds == 59 && hours == 23) {
            hours = 0
            var tempDay = Number(days);
            console.log(tempDay);
            days =+ (tempDay + 1).toString();
            console.log(days);
            document.getElementById("days").innerHTML = days;
            
            document.getElementById("hours").innerHTML = hours;
        }
    } while (pause == false);
}

function handlePause() {
    console.log('has presionado pausa');
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
    console.log('has presionado stop');
    pause = true;
    document.getElementById("days").innerHTML = "00 ";
    document.getElementById("hours").innerHTML = "00 ";
    document.getElementById("minutes").innerHTML = "00 ";
    document.getElementById("seconds").innerHTML = "00 ";
}