var prompt = require('prompt-sync')({sigint: true});

function view(counter){
    const viewpanel = ('\n'+"Count: "+counter+ '\n'+'\n (+) (-)'+ '\n'+ '\n (q) for quit');
    return (viewpanel);
}

function update(msg, counter){
    if (msg === "+")
        return counter+1;
    if (msg === "-")
        return counter-1;
    if (msg !== '-' && msg!== '+')
        return counter;
}


function app(counter){
    while(true){
        console.clear();
        console.log(view(counter));
        const user = prompt('What would you do? ');
        if(user === 'q')
            break;
        counter = update(user,counter);
        console.clear();
    }
}

app(0)