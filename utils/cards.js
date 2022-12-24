const { forEach } = require("lodash");

module.exports = {
    Card: class
    {
        constructor(color, suit, value)
        {
            this.color = color;
            this.suit = suit;
            this.value = value;
        }
    },
    // creates a normal deck (no jokers)
    new_deck: function()
    {
        // array of possible colors
        const colors = ["red", "black"];

        // arrays of possible suits seperated by colors
        const redSuits = ["diamonds", "hearts"];
        const blackSuits = ["spades", "clubs"];
        
        // initalizes an empty deck array
        let deck = [];

        // runs twice for both colors
        for(color = 0; color < 2; color++)
        {
            // runs twice for both suits of a color
            for(suit = 0; suit < 2; suit++)
            {
                // runs 13 times to make all cards of a specific color and suit
                for(value = 1; value < 14; value++)
                {
                    let card = new this.Card(colors[color], color > 0 ? blackSuits[suit] : redSuits[suit], value);
                    deck.push(card);
                }
            }
        }
        return deck;
    },

    // shuffle the deck
    shuffle: function(cards)
    {
        let currentIndex = cards.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex = currentIndex - 1;

            // And swap it with the current element.
            [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
        }

        return cards;
    },

    deal: function(cards, hand)
    {
        hand.push(cards.pop());
    },

    deal_amount: function(number, cards, hand)
    {
        for(i = number; i > 0; i--)
        {
            this.deal(cards, hand);
        }
    },

    get_value: function(cards)
    {
        let value = 0;

        forEach(cards =>
            value += cards[i].value
        )

        return value;
    },

    // shows the deck in the terminal
    print_cards: function(cards) 
    {
        console.log(cards);
    }
};




    

    
    
