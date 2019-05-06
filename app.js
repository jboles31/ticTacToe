


///////VARIABLES FOR TAGS///////
let reset = document.getElementById('reset')
let a1 = document.getElementById('A1')
let a2 = document.getElementById('A2')
let a3 = document.getElementById('A3')
let b1 = document.getElementById('B1')
let b2 = document.getElementById('B2')
let b3 = document.getElementById('B3')
let c1 = document.getElementById('C1')
let c2 = document.getElementById('C2')
let c3 = document.getElementById('C3')


///////PLAY COUNTER///////
let count = 0;

////////*******TURN SWITCHER*****/////
///////TURN OBJECT////////
let turn = {};
turn.player = 'X'

/////////TURN FUNCTION//////
turn.mark = () => {
    if(turn.player === 'X'){
        turn.player = 'O';
        return 'X';
    } else {
        turn.player = 'X';
        return 'O';
    }
}

//////***********PLACEMENT TRACKER********/////////
//////PLACE HOLDER OBJECT///////
let placeHolder = {};

//////PLACEMENT FUNCITON///////
let place = (spot) => {
    if(placeHolder[spot] !== undefined) {
        alert("You can't go there")
        return false;
    } else {
        placeHolder[spot] = turn.player;

        return true;
    }
}

//////MANIPULATE DOM FUNCTION///////
let write = (element) => {
    element.innerHTML = turn.player;
    turn.mark();
}


//////******EVENT LISTENERS********//////

//////RESET EVENT LISTENER////////
reset.addEventListener('click', () => {
    window.location.reload(true);
})

//////GAME EVENT LISTENERS/////
a1.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('a1')){return}
    write(a1);//// replace with a function that places the x or o
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
                window.location.reload(true);
            },200) 
        }
    }         
});

a2.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('a2')){return}
    write(a2);
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
                window.location.reload(true);
            },200) 
        }
    }  
});
a3.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('a3')){return}
    write(a3);
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
                window.location.reload(true);
            },200) 
        }
    }
});

b1.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('b1')){return}
    write(b1);
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
                window.location.reload(true);
            },200) 
        }
    }
});
b2.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('b2')){return}
    write(b2);
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
                window.location.reload(true);
            },200) 
        }
    }
});
b3.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('b3')){return}
    write(b3);
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
                window.location.reload(true);
            },200) 
        }
    }
});

c1.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('c1')){return}
    write(c1);
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
                window.location.reload(true);
            },200) 
        }
    }
});
c2.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('c2')){return}
    write(c2);
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
                window.location.reload(true);
            },200) 
        }
    }
});
c3.addEventListener('click', () => {
    count++;
    // turn = !turn;
    if(!place('c3')){return}
    write(c3);
    if (count > 4) {
        if(check()){
            window.setTimeout( function() {
                alert('Player ' + turn.player + ' is the winner!')
            },200) 
        }
    }
});



///////DECIDE WINNER//////

let check = function() {
    if(a1.innerHTML !== "" && a1.innerHTML === b1.innerHTML && a1.innerHTML === c1.innerHTML){
        turn.mark();
        return true;
    } else if(a2.innerHTML !== "" && a2.innerHTML === b2.innerHTML && a2.innerHTML === c2.innerHTML){
        turn.mark();
        return true;
    } else if(a3.innerHTML !== "" && a3.innerHTML === b3.innerHTML && a3.innerHTML === c3.innerHTML){
        turn.mark();
        return true;
    } else if(a1.innerHTML !== "" && a1.innerHTML === a2.innerHTML && a1.innerHTML === a3.innerHTML){
        turn.mark();
        return true;
    } else if(b1.innerHTML !== "" && b1.innerHTML === b2.innerHTML && b1.innerHTML === b3.innerHTML){
        turn.mark();
        return true;
    } else if(c1.innerHTML !== "" && c1.innerHTML === c2.innerHTML && c1.innerHTML === c3.innerHTML){
        turn.mark();
        return true;
    } else if(a1.innerHTML !== "" && a1.innerHTML === b2.innerHTML && a1.innerHTML === c3.innerHTML){
        turn.mark();
        return true;
    } else if(a3.innerHTML !== "" && a3.innerHTML === b2.innerHTML && a3.innerHTML === c1.innerHTML){
        turn.mark();
        return true;
    } 
    return null;
}