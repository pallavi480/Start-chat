let count = 1;

let id ;

function addcount(){
    console.log("count - ",count)
    count++;

    if (count >5){
    clearInterval(id)
    console.log("stop")
    }

}

 id = setInterval(addcount,1000)


// setTimeout = one time delay

// setInterval = repeat until stop