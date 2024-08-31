let counter = 0;

function counterDelay(){
    console.clear();
    console.log(counter);
    counter++;

    setTimeout(counterDelay,1000);
}

setTimeout(counterDelay,1000)