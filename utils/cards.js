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
                for(value = 0; value < 13; value++)
                {
                    let card = new this.Card(colors[color], color > 0 ? redSuits[suit] : blackSuits[suit], value);
                    deck.push(card);
                }
            }
        }
        return deck;
    },

    // shows the deck in the terminal
    print_cards: function(cards) 
    {
        console.log(cards);
        cards.forEach(cards => 
            {
                console.log(cards.color);
                console.log(cards.suit);
                console.log(cards.value);
            });
    }
};




    

    
    
