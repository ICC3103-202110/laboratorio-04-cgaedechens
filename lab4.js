//var prompt = require('prompt-sync')({sigint: true});

//const name1 = prompt('Tu nombre? ')
//console.log(name1)

const counter = 0;
function view(counter){
    const viewpanel = ('\n'+"Count: "+counter+ '\n'+'\n (+) (-)'+ '\n'+ '\n (q) for quit');
    return (viewpanel);
}

console.log(view(counter));

function update(msg, counter){
    let nmbr = counter;
    if (msg === "+")
        return nmbr+1
        nmbr=nmbr+1;
    if (msg === "-")
        return nmbr-1
        nmbr=nmbr-1;
    if (msg !== '-' &&  msg!== '+')
        return nmbr;
}

console.log(update("7",counter));


