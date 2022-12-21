const { SlashCommandBuilder } = require('discord.js');
const genRandom = require('../utils/generate-random.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('rolls a traditional d6')
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('Number of dice to roll'))
        .addIntegerOption(option =>
            option.setName('sides')
                .setDescription('Number of sides on the dice')),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        
        const number = interaction.options.getInteger('number') ?? 1; // gets the number of dice to roll
        const sides = interaction.options.getInteger('sides') ?? 6; // gets the number of sides on dice
		const arr = genRandom.rollDice(number, sides); // calls rollDice fuction for accurate dice rolls, adds each roll to array arr
		const sum = arr.reduce((acc, cur) => acc + cur, 0); // sums array arr of dice rolls for a total

        await interaction.reply(`${sum}`);
    },
};