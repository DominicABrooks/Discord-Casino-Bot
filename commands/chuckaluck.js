const { SlashCommandBuilder } = require('discord.js');
const genRandom = require('../utils/generate-random.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('chuckaluck')
        .setDescription('begins a game of Chuck-a-Luck')
        .addIntegerOption(option =>
            option
                .setName('number')
                .setDescription('Pick a number to bet on')
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('bet')
                .setDescription('Choose bet amount')),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild

        // initalizes win amount to 0
        let win = 0;
        
        // gets the number bet on & bet amount
        const number = interaction.options.getInteger('number'); 
        const bet = interaction.options.getInteger('bet') ?? 0;

        console.log('win: ' + win);

        const rolls = genRandom.rollDice(3, 6);
        console.log(rolls);
        rolls.forEach(element => 
        {
            console.log('element' + element);
            console.log('number' + number);
            if (element === number) 
            {
                console.log('elementnumber' + element === number);
                win += bet;
            }
        });
        
        console.log('win: ' + win);

        //retuns the win amount and information
        await interaction.reply(`You bet $${bet} on: ${number}\nYou rolled: ${rolls.at(0)}, ${rolls.at(1)}, ${rolls.at(2)}\nYou win: $${win}`);
    },
};