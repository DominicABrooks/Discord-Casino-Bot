
// creates a deck
module.exports = {
    newCard: function(shade, type, number)
    {
        const color = shade;
        const suit = type;
        const value = number; 
    },
    
    // creates a normal deck (no jokers)
    newDeck: function()
    {
        // array of possible colors
        const colors = ["red", "black"];

        // arrays of possible suits seperated by colors
        const redSuits = ["diamonds", "hearts"];
        const blackSuits = ["spades", "clubs"];
        
        // initalizes an empty deck array
        let deck = [];

        // runs twice for both colors
        for(i = 0; i < 2; i++)
        {
            // runs twice for both suits of a color
            for(j = 0; j < 2; j++)
            {
                // runs 13 times to make all cards of a specific color and suit
                for(k = 0; k < 13; k++)
                {
                    deck.push(newCard(colors(i), i > 0 ? redSuits(j) : blackSuits(j), k));
                }
            }
        }
        return deck;
    },

    // shows the deck in the terminal
    printCards: function(cards) {
        cards.forEach(card => 
            {
                console.log(card.color);
                console.log(card.suit);
                console.log(card.value);
            });
    }
}