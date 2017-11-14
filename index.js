const Discord = require('discord.js');
const bot = new Discord.Client();

//Annoucing rules update
bot.on('message', message => {

  if(message.channel.id === '378824287038996481') {//checks this channel for a message
   bot.channels.get('378783095651958785').send('@everyone: The rules have been updated. Please take time to review the changes.')
  }
  
});

//Welcome message
bot.on('guildMemberAdd', member => {

  console.log('User' + member.user.username + ' has joined the server!')
  console.log(member)
  //add role when joined


  // Sending a message to a channel when a user joins discord.
  if (member.guild.channels.get('378783095651958785')) {
   bot.channels.get('379800669349216267').send('@' + member.user.username + '**, has joined the server!');
  }
});

bot.login(process.env.BOT_TOKEN);
