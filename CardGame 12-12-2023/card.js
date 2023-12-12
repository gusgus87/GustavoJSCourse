// Constructor function that will create new cards 
// when a generate deck function is called. 
// It will have properties such as name, number value, and suit. 

function Card(number, suit){
    if (number < 11)
    	this.name = `${number} of ${suit}s`;
    else
        this.name = `${numToName(number)} of ${suit}s`
	this.suit = suit;
	this.number = number;
}

function numToName(number){
    switch(number){
        case 11:
            return "Jack";
        case 12:
            return "Queen";
        case 13:
            return "King";
        case 14:
            return "Ace";
    }
}

