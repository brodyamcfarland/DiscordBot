const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hi")
        .setDescription("Handsome Jack greeting."),
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = `Sup lil bro.`;
        await interaction.editReply({
            content: newMessage,
        });
    },
};
