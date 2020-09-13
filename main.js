const { Client } = require('discord.js');
const client = new Client();
const { TOKEN, PREFIX } = require('./config.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(' ');

    if(message.content.startsWith(`${PREFIX}ping`)) message.reply("Bonjour");
    if(message.content.startsWith(`${PREFIX}server`)) message.reply(`Vous vous trouvez sur le serveur ${message.guild.name}!`);
    if(message.content.startsWith(`${PREFIX}user`)) {
      message.reply("args : " + args);
    }

});

client.login(TOKEN);