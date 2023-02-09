const { SlashCommandBuilder, ChannelType } = require("discord.js");
const { joinVoiceChannel, getVoiceConnections } = require("@discordjs/voice");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("join")
        .setDescription("Allows you to pick what channel you want the bot in.")
        .addChannelOption((option) =>
            option
                .setName("channel")
                .setDescription("The channel to join.")
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildVoice)
        ),
    async execute(interaction, client) {
        const voiceChannel = interaction.options.getChannel("channel");
        const voiceConnection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: interaction.guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });

        console.log(getVoiceConnections());

        const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = `I have arrived.`;
        await interaction.editReply({
            content: newMessage,
        });
    },
};
