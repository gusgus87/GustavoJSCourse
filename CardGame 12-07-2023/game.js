
const deck = {
    //hard coded standard deck denominations using hexadecimal
    cardValues: [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xA, 0xB, 0xC, 0xD, 0xE],
    suitValues: ["Diamond", "Heart", "Spade", "Club"],
    
    //empty array property that will hold the card objects of the deck
    cards: [],
    players: [],

    //generates and returns deck of card objects that make up a standard deck using hexadecimal
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
        let middle = Math.floor(this.cards.length/2);
        let arrayOne = this.cards.slice(0,middle);
        let arrayTwo = this.cards.slice(middle);
        let arrayThree =[];

        for(i = 0; i < 5; i++){
            let countOne = 0;
            let countTwo = 0;
            let left = Math.floor(Math.random() * 3);
            let right = Math.floor(Math.random() * 3);
            
            while(arrayOne.length>left && arrayTwo.length>right){
                for (j=0; j<left+1; j++)
                    arrayThree.push(arrayOne.shift());
                countOne+= left;
                for(k=0; k<right+1; k++)
                    arrayThree.push(arrayTwo.shift());
                countTwo+= right;
            }
           arrayThree = arrayThree.concat(arrayTwo,arrayOne);
           this.cards = arrayThree;
           arrayOne = arrayThree.slice(0,middle);
           arrayOne.reverse();
           arrayTwo = arrayThree.slice(middle);
           arrayThree =[];
        }
    },

    /*  Deal() takes in the number of players that are playing and the number of cards they will be dealt.
        It will return an array of players objects that have properties of name(Player1),
        hand(array of card objects), and discardPile(winner takes the discarded cards that were played).
    */
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

    play: function(players){
        let numOfPlayers = players.length;
        let cardsInPlay = [];

        for(i=0; i<numOfPlayers; i++){
            cardsInPlay.push(players[i].hand.shift());
        }
        let winner = this.compare(cardsInPlay);

        console.log("The cards in play",cardsInPlay);

        for (i=0; numOfPlayers; i++){
            if(winner == cardsInPlay[i]){
                this.takeBook(players[i],cardsInPlay);
                return players[i];
            }
        }
    },

    takeBook: function(player,cardsToDiscard){
        player.discardPile = player.discardPile.concat(cardsToDiscard);        
    }
}

//Generates a deck of cards stores them in deck.cards.
deck.cards = deck.createDeck(deck.suitValues, deck.cardValues);
console.log(deck.cards);

//shuffles the existing deck of cards stored in deck.cards
deck.shuffle(); 

//Deals to 3 players 7 cards each. 
deck.players = deck.deal(3,7);

console.log("The winner is:", Game.play(deck.players));
