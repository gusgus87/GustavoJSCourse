
const deck = {
    //Hard coded standard deck denominations using hexadecimal
    cardValues: [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xA, 0xB, 0xC, 0xD, 0xE],
    suitValues: ["Mandela", "Dr King", "Madam CJ Walker", "Malcolm X"],
    
    //Empty array property that will hold the card objects of the deck
    cards: [],
    players:[],

    //Generates and returns deck of card objects that make up a standard deck using hexadecimal
    createDeck: function(suits,denoms){
    	let numOfSuits = suits.length;
    	let numOfDenoms = denoms.length;
        let deckOfCards = [];

	    for(i = 0; i < numOfSuits; i++){
		    for(j=0; j < numOfDenoms; j++){
		        deckOfCards.push(new Card(this.cardValues[j],this.suitValues[i]));	
		    }		
	    }
        return deckOfCards;
    },

    shuffle: function(){
        let index = null;
        let numOfCards = this.cards.length;

        for(i = numOfCards - 1; i>0; i--){
            index = Math.floor(Math.random() * (i+1));
            [this.cards[i], this.cards[index]] = [this.cards[index], this.cards[i]];
        }
    },

    //Deal() takes in the number of players and how many cards they will be dealt.
    //Returns an array of players that have properties of name, hand, and discardPile.
    deal: function(numOfPlayers, numOfCards){
        let players =[];
        for(i=0; i<numOfPlayers;i++){
            players.push(new Player(`Player${i+1}`));
        }
        for(i=0; i<numOfCards; i++){
            for(j=0; j<players.length; j++){
                players[j].hand.push(deck.cards.shift());
            }
        }
        return players;
    }
}


const Game = {

    compare: function(cardsInPlay){
        let numOfCards = cardsInPlay.length;
        let highCard = this.numCompare(cardsInPlay[0],cardsInPlay[1]);
        
        //in the case there is only 1 trump card.
        if(numOfCards == 1){
            highCard = cardsInPlay[0];
            return highCard;
        }
                

        for(i=1; i<numOfCards; i++){
            highCard = this.numCompare(highCard,cardsInPlay[i]); 
        }
        return highCard;
    },
    
    //simple compare function that only checks if the number value is higher
    numCompare: function(card1, card2){
        if(card1.number > card2.number)
            return card1;
        else
            return card2;
    },
    count: 0,

    trumpCounter: function(count){
        count++;
        return count;
    },

    getTrumpCards(cardsInPlay){
        let trumpCards = [];
        numOfCards = cardsInPlay.length;

        for(i=0; i<numOfCards; i++){
            if(cardsInPlay[i].suit == "Madam CJ Walker")
                trumpCards.push(cardsInPlay[i]); 
        }
        console.log("trumpCards", trumpCards);
        if (trumpCards === [])
                trumpCards = 0;
        return trumpCards;
    },

    play: function(players){
        let numOfPlayers = players.length;
        let cardsInPlay = [];
        let winner = 0;
        this.count++;
        message =  document.getElementById("message").innerHTML;

        for(i=0; i<numOfPlayers; i++){
            cardsInPlay.push(players[i].hand.shift());
        }
        
        winner = this.getTrumpCards(cardsInPlay);
        
        if(this.count % 5 == 0 && winner != 0){
            message+= "A trump card was detected.";
            let trumpCards = 0;
            console.log("Cards in play:",winner);
            winner = this.compare(winner);
        }
        else{
        winner = this.compare(cardsInPlay);
        console.log("Cards in play:",cardsInPlay);
        }

        for (i=0; numOfPlayers; i++){
            if(winner == cardsInPlay[i]){
                this.takeBook(players[i],cardsInPlay);
                message+= `<br>The winner of round ${this.count} is ${players[i].name}!<br>`
                document.getElementById("message").innerHTML = message;
                return players[i];
            }
        }
    },

    takeBook: function(player,cardsToDiscard){
        player.discardPile = player.discardPile.concat(cardsToDiscard);        
    }
}

function newGame(){
    Game.count = 0;
    let numOfPlayers = document.getElementById("numberOfPlayers").value;
    let numOfCards = document.getElementById("numberOfCards").value;
    let message = "";

    if(numOfPlayers * numOfCards > 52){
        message = "There aren't enough cards for that.";
        return document.getElementById("message").innerHTML = message;
    }
    

    deck.cards = deck.createDeck(deck.suitValues, deck.cardValues);
    deck.shuffle();
    deck.players = deck.deal(numOfPlayers,numOfCards);
    message = `Number of players:${numOfPlayers} Number of cards:${numOfCards}<br>Hit Play Cards to play your first cards.`
    return document.getElementById("message").innerHTML = message;
}

//console.log("The winner is:", Game.play(deck.players));
