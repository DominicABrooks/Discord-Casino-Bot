const { SlashCommandBuilder } = require('discord.js');
const { get_value } = require('../utils/cards.js');
const cards = require('../utils/cards.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('baccarat')
        .setDescription('begins a game of Baccarat')
        .addIntegerOption(option =>
            option
                .setName('bet_on_player')
                .setDescription('Choose bet amount on Player. Pays 1 to 1.')
                .setMinValue(1)
                .setMaxValue(1000)
        )
        .addIntegerOption(option =>
            option
                .setName('bet_on_banker')
                .setDescription('Choose bet amount on Banker. Pays 1 to 1 minus 5%.')
                .setMinValue(1)
                .setMaxValue(1000)
        )
        .addIntegerOption(option =>
            option
                .setName('bet_on_tie')
                .setDescription('Choose bet amount on a tie. Pays 8 to 1.')
                .setMinValue(1)
                .setMaxValue(1000)
        )
        .addIntegerOption(option =>
            option
                .setName('bet_on_playerpair')
                .setDescription('Choose sidebet amount on Player having first 2 cards a pair. Pays 11 to 1.')
                .setMinValue(1)
                .setMaxValue(1000)
        )
        .addIntegerOption(option =>
            option
                .setName('bet_on_bankerpair')
                .setDescription('Choose sidebet amount on Banker having first ttwo cards a pair. Pays 11 to 1.')
                .setMinValue(1)
                .setMaxValue(1000)
        )
        .addIntegerOption(option =>
            option
                .setName('bet_on_panda8')
                .setDescription('Choose sidebet amount on Player having three cards totaling 8. Pays 25 to 1.')
                .setMinValue(1)
                .setMaxValue(1000)
        )
        .addIntegerOption(option =>
            option
                .setName('bet_on_dragon7')
                .setDescription('Choose sidebet amount on Banker having three cards totaling 7. Pays 40 to 1.')
                .setMinValue(1)
                .setMaxValue(1000)
        ),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        
        // initalizes all the possible bet amounts
        const playerbet = interaction.options.getInteger('bet_on_player') ?? 0;
        const bankerbet = interaction.options.getInteger('bet_on_banker') ?? 0;
        const tiebet = interaction.options.getInteger('bet_on_tie') ?? 0;
        const playerpairbet = interaction.options.getInteger('bet_on_playerpair') ?? 0;
        const bankerpairbet = interaction.options.getInteger('bet_on_bankerpair') ?? 0;
        const panda8bet = interaction.options.getInteger('bet_on_panda8') ?? 0;
        const dragon7 = interaction.options.getInteger('bet_on_dragon7') ?? 0;

        // initalizes win amount to 0
        let win = 0;

        // initalizes a deck and shuffles it
        let deck = cards.new_deck();
		cards.shuffle(deck);

        // initalizes banker hand and player hand
        let bHand = [];
        let pHand = [];

        // initalizes values of hands
        let bValue = 0;
        let pValue = 0;

        // deals the cards
        cards.deal_amount(2, deck, pHand);
        cards.deal_amount(2, deck, bHand);

        console.log('p');
        console.log(pHand);
        console.log('b');
        console.log(bHand);

        // determines the value of the current hands
        bValue = get_value(bHand);
        pValue = get_value(pHand);

        console.log('p');
        console.log(pValue);
        console.log('b');
        console.log(bValue);
        
        // if player has pair, adds playerpairbet to win
        if(pHand[0].value == pHand[1].value)
        {
            win += playerpairbet * 11;
        }

        // if banker has pair, adds bankerpairbet to win
        if(bHand[0].value == bHand[1].value)
        {
            win += bankerpairbet * 11;
        }

        // determines if player or banker has a natural win or if there is a natural tie
        while(!checkForWin())
        {
            // saves the starting player hand value
            const pValueOriginal = pValue;

            // player hand goes first, per regulation
            // if player hand is less than 6
            if(pValue < 6)
            {
                // deals one card to player hand, calculate new player hand value
                cards.deal(pHand);
                pValue = get_value(pHand);
                
                // makes sure the player hand value follows regulation
                while (pValue > 9)
                {
                    pValue -= 10;
                }
            }

            // if the banker hand value is less than 3
            if(bValue < 3)
            {
                //deals one card to banker hand, calculate new banker hand value
                cards.deal(bHand);
                bValue = get_value(bHand);

                // makes sure the banker hand value follows regulation
                while (bValue > 9)
                {
                    bValue -= 10;
                }
            }

            // checks for win after player's possible deal and banker's first possible deal
            if(checkForWin())
            {
                break;
            }

            // if the banker hand value is equal to 3
            if(bValue == 3)
            {
                // if the thrid card in the player hand is not 8
                if(pHand[2].value != 8)
                {
                    //deals one card to banker hand, calculate new banker hand value
                    cards.deal(bHand);
                    bValue = get_value(bHand);

                    // makes sure the banker hand value follows regulation
                    while (bValue > 9)
                    {
                        bValue -= 10;
                    }
                }
            }

            // checks for win after player's possible deal and banker's first possible deal
            if(checkForWin())
            {
                break;
            }

            // if the banker hand value is equal to 4
            if(bValue == 4)
            {
                // if the thrid card in the player hand is less than 2 or greater
                if(pHand[2].value < 2 || pHand[2].value > 7)
                {
                    //deals one card to banker hand, calculate new banker hand value
                    cards.deal(bHand);
                    bValue = get_value(bHand);

                    // makes sure the banker hand value follows regulation
                    while (bValue > 9)
                    {
                        bValue -= 10;
                    }
                }
            }

            // checks for win after player's possible deal and banker's first possible deal
            if(checkForWin())
            {
                break;
            }

            // if the banker hand value is equal to 5
            if(bValue == 5)
            {
                // if the thrid card in the player hand is less than 4 or greater than 7
                if(pHand[2].value < 4 || pHand[2].value > 7)
                {
                    //deals one card to banker hand, calculate new banker hand value
                    cards.deal(bHand);
                    bValue = get_value(bHand);

                    // makes sure the banker hand value follows regulation
                    while (bValue > 9)
                    {
                        bValue -= 10;
                    }
                }
            }

            // checks for win after player's possible deal and banker's first possible deal
            if(checkForWin())
            {
                break;
            }

            // if the banker hand value is equal to 6
            if(bValue == 6)
            {
                // if the thrid card in the player hand is less than 4 or greater than 7
                if(pHand[2].value == 6 || pHand[2].value ==7)
                {
                    //deals one card to banker hand, calculate new banker hand value
                    cards.deal(bHand);
                    bValue = get_handvalue(bHand);

                    // makes sure the banker hand value follows regulation
                    while (bValue > 9)
                    {
                        bValue -= 10;
                    }
                }
            }

            // checks for win after player's possible deal and banker's first possible deal
            if(checkForWin())
            {
                break;
            }
        }
    
        await interaction.reply(`not too fucked up. You win: $${win}`);
    },
    
    // checks for win condition
    checkForWin: function()
    {
        // if player hand or banker hand total to 8 or 9
        if((pHand == 8 || pHand == 9) || (bHand == 8 || bHand == 9))
        {  
            let winning = false;

            // checks for a tie
            if(pHand == bHand)
            {
                win = tiebet * 8;
                winning = true;
            }
            // checks for a player win
            else if(pHand > bHand)
            {
                win = playerbet;
                winning = true;
            }
            // defaults to banker
            else
            {
                win = bankerbet - (bankerbet * .05);
                winning = true;
            }
        }

        return winning;
    }
};