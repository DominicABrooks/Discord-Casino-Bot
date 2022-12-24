const { SlashCommandBuilder } = require('discord.js');
const cards = require('../utils/cards.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('newdeck')
		.setDescription('Replies with deck'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild

        let deck = cards.new_deck();
		let hand = [];

	    cards.print_cards(deck);
		cards.shuffle(deck);

		cards.print_cards(deck);

		cards.deal(deck, hand);

		cards.print_cards(deck);
		cards.print_cards(hand);

		await interaction.reply("the shit worked");
	},
};