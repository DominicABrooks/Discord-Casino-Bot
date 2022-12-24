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

        console.log(pHand);
        console.log(bHand);

        bValue = get_value(bHand);

        console.log(bValue);

        await interaction.reply(`not too fucked up`);
    },
}