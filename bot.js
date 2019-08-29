const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("616751164553297922")
setInterval(function() {
channel.send(`thfahiuhhfoiaphfahfoiuafhaoifh`);
}, 30)
})

client.login(process.env.BOT_TOKEN);