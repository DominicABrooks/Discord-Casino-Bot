const { SlashCommandBuilder } = require('discord.js');
const Card = require('../utils/cards.js');
const cards = require('../utils/cards.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('newdeck')
		.setDescription('Replies with deck'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild

        const cards = new Card();
        let deck = cards.new_deck();
	    
		await interaction.reply(cards.print_cards(deck));
	},
};