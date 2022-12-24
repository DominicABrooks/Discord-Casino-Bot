const { SlashCommandBuilder } = require('discord.js');
const cards = require('../utils/cards.js');
const client = require('.../app.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('baccarat')
        .setDescription('begins a game of Baccarat'),

    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        
        const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder} = require('discord.js');

        client.on(Events.InteractionCreate, async interaction => {
            if (!interaction.isChatInputCommand()) return;

            if (interaction.commandName === 'button') {
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('player')
					        .setLabel('Player')
					        .setStyle(ButtonStyle.Primary),
                    );
            }            
        }),
        await interaction.reply({ content: 'I think you should,', components: [row] });            
    },
}