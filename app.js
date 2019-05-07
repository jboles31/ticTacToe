

///////VARIABLES FOR TAGS///////
let reset = document.getElementById('reset')
let playerX = document.getElementById('playerX')
let playerO = document.getElementById('playerO')
let turnSign = document.getElementById('turn')
let a1 = document.getElementById('A1')
let a2 = document.getElementById('A2')
let a3 = document.getElementById('A3')
let b1 = document.getElementById('B1')
let b2 = document.getElementById('B2')
let b3 = document.getElementById('B3')
let c1 = document.getElementById('C1')
let c2 = document.getElementById('C2')
let c3 = document.getElementById('C3')

let ids = [a1, a2, a3, b1, b2, b3, c1, c2, c3];


///////PLAY COUNTER///////
let count = 0;

//////WIN COUNT//////
let winCount = {};
winCount.playerX = 0;
winCount.playerO = 0; 

//////UPDATE winCount//////
let updateWins = () => {
    playerX.innerHTML = 'PlayerX : ' + winCount.playerX;
    playerO.innerHTML = 'PlayerO : ' + winCount.playerO;
}

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

turn.playerTurn = () => {
    turnSign.innerHTML = 'Player' + turn.player + ': GO!'
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


///////CLEAR BOARD///////
let clearBoard = () => {
    for (let keys in placeHolder) {
        placeHolder[keys] = undefined;
    }

    ids.forEach(element => {
        element.innerHTML = "";
    })

    count = 0;
}

////////TIE GAME////////
let tie = () => {
    window.setTimeout(() => {
        alert('TIE!')
    }, 100)
    count = 0;
}

//////WIN GAME///////
let win = () => {
    turn.mark();
        turn.player === 'X' ? winCount.playerX++ : winCount.playerO++;
        window.setTimeout( function() {
            alert('Player ' + turn.player + ' is the winner!')
            afterWin();
        },50) 
        return true;
}

///////AFTER WIN/////////
let afterWin = () => {
    clearBoard();
    updateWins();
    turn.playerTurn();
}

///////INITIALIZE///////
let initialize = () => {
    updateWins();
    turn.playerTurn();
}
initialize();
//////******EVENT LISTENERS********//////

//////RESET EVENT LISTENER////////
reset.addEventListener('click', () => {
    clearBoard();
})

//////GAME EVENT LISTENERS/////
a1.addEventListener('click', () => {
    count++;
    if(!place('a1')){return}
    write(a1);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if(count >= 9 && check() === false) {
            tie();
        }
    }
});

a2.addEventListener('click', () => {
    count++;
    if(!place('a2')){return}
    write(a2);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if(count >= 9 && check() === false) {
            tie();
        }
    }
});
a3.addEventListener('click', () => {
    count++;
    if(!place('a3')){return}
    write(a3);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if (count >= 9 && check() === false) {
            tie();
        }
    }
});

b1.addEventListener('click', () => {
    count++;
    if(!place('b1')){return}
    write(b1);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if (count >= 9 && check() === false){
            tie();
        }
    }
});
b2.addEventListener('click', () => {
    count++;
    if(!place('b2')){return}
    write(b2);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if(count >= 9 && check() === false) {
            tie();
        }
    }
});
b3.addEventListener('click', () => {
    count++;
    if(!place('b3')){return}
    write(b3);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if(count >= 9 && check() === false) {
            tie();
        }
    }
});

c1.addEventListener('click', () => {
    count++;
    if(!place('c1')){return}
    write(c1);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if(count >= 9 && check() === false) {
            tie();
        }
    }
});
c2.addEventListener('click', () => {
    count++;
    if(!place('c2')){return}
    write(c2);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if(count >= 9 && check() === false) {
            tie();
        }
    }
});
c3.addEventListener('click', () => {
    count++;
    if(!place('c3')){return}
    write(c3);
    turn.playerTurn();
    if (count > 4) {
        if(check()){
            return;
        } else if(count >= 9 && check() === false) {
            tie();
        }
    }
});



///////DECIDE WINNER//////

let check = function() {
    if(a1.innerHTML !== "" && a1.innerHTML === b1.innerHTML && a1.innerHTML === c1.innerHTML){
        win();
        return true;
    } else if(a2.innerHTML !== "" && a2.innerHTML === b2.innerHTML && a2.innerHTML === c2.innerHTML){
        win();
        return true;    
    } else if(a3.innerHTML !== "" && a3.innerHTML === b3.innerHTML && a3.innerHTML === c3.innerHTML){
        win();
        return true;
    } else if(a1.innerHTML !== "" && a1.innerHTML === a2.innerHTML && a1.innerHTML === a3.innerHTML){
        win();
        return true;
    } else if(b1.innerHTML !== "" && b1.innerHTML === b2.innerHTML && b1.innerHTML === b3.innerHTML){
        win();
        return true;
    } else if(c1.innerHTML !== "" && c1.innerHTML === c2.innerHTML && c1.innerHTML === c3.innerHTML){
        win();
        return true;
    } else if(a1.innerHTML !== "" && a1.innerHTML === b2.innerHTML && a1.innerHTML === c3.innerHTML){
        win();
        return true;
    } else if(a3.innerHTML !== "" && a3.innerHTML === b2.innerHTML && a3.innerHTML === c1.innerHTML){
        win();
        return true;
    } 
    return false;
}


