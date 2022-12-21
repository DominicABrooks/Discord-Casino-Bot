const { SlashCommandBuilder } = require('discord.js');
const genRandom = require('../utils/generate-random.js');
const dice = require('../utils/dice-to-emote.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('chuckaluck')
        .setDescription('begins a game of Chuck-a-Luck')
        .addIntegerOption(option =>
            option
                .setName('number')
                .setDescription('Pick a number to bet on')
                .setRequired(true)
                .addChoices(
                    { name:"1",value:1 },
                    { name:"2",value:2 },
                    { name:"3",value:3 },
                    { name:"4",value:4 },
                    { name:"5",value:5 },
                    { name:"6",value:6 },
                ))
        .addIntegerOption(option =>
            option
                .setName('bet')
                .setDescription('Choose bet amount')
                .setMinValue(1)
                .setMaxValue(1000)),
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
            if (element === number) 
            {
                console.log("element " + element + " is number");
                win += bet;
            }
        });

        console.log('win: ' + win);

        
        //retuns the win amount and information
        await interaction.reply(`You bet $${bet} on: ${number} ${dice.toEmote(number)}\nYou rolled: ${dice.toEmoteRolling()}, ${dice.toEmoteRolling()}, ${dice.toEmoteRolling()}`);
        setTimeout(async () => {
            await interaction.editReply(`You bet $${bet} on: ${number} ${dice.toEmote(number)}\nYou rolled: ${dice.toEmote(rolls.at(0))}, ${dice.toEmote(rolls.at(1))}, ${dice.toEmote(rolls.at(2))}\nYou win: **$${win}**`);
        }, "1000")
    },
};