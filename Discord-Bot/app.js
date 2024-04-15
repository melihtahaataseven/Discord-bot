let { Client, Partials, Collection, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType } = require("discord.js");
const { joinVoiceChannel } = require('@discordjs/voice');


let client = new Client({
	partials: [
	  Partials.Message, // for message
	  Partials.Channel, // for text channel
	  Partials.GuildMember, // for guild member
	  Partials.Reaction, // for message reaction
	  Partials.GuildScheduledEvent, // for guild events
	  Partials.User, // for discord user
	  Partials.ThreadMember, // for thread member
	],
	intents: [

	  GatewayIntentBits.Guilds, // for guild related things
	  GatewayIntentBits.GuildMembers, // for guild members related things
	  
	  GatewayIntentBits.GuildEmojisAndStickers, // for manage emojis and stickers
	  GatewayIntentBits.GuildIntegrations, // for discord Integrations
	  GatewayIntentBits.GuildWebhooks, // for discord webhooks
	  GatewayIntentBits.GuildInvites, // for guild invite managing
	  GatewayIntentBits.GuildVoiceStates, // for voice related things
	  GatewayIntentBits.GuildPresences, // for user presence things
	  GatewayIntentBits.GuildMessages, // for guild messages things
	  GatewayIntentBits.GuildMessageReactions, // for message reactions things
	  GatewayIntentBits.GuildMessageTyping, // for message typing things
	  GatewayIntentBits.DirectMessages, // for dm messages
	  GatewayIntentBits.DirectMessageReactions, // for dm message reaction
	  GatewayIntentBits.DirectMessageTyping, // for dm message typinh
	  GatewayIntentBits.MessageContent, // enable if you need message content things
	  GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildVoiceStates, 
	],
  });




let {Token} = require("./config.json")

client.on("ready", ()=> {


console.log("tamamen aktif oldu.")



})
client.login(Token).then(msg => {


console.log("Tokene başarıyla bağlandı")
})



client.setMaxListeners(999999)





  
        client.on('messageCreate', async (message) => {
          if (message.content === '!sesli') {
            if (message.member.voice.channel) {
              const channel = message.member.voice.channel;
              try {
                const connection = joinVoiceChannel({
                  channelId: channel.id,
                  guildId: channel.guild.id,
                  adapterCreator: channel.guild.voiceAdapterCreator,
                });
                console.log(`Bağlantı sağlandı ${channel.name}!`);
              } catch (error) {
                console.error(`Bağlantı kurulurken bir hata oluştu: ${error}`);
              }
            } else {
              message.reply('Lütfen bir sesli kanala katılın!');
            }
          }
        });



      client.on("ready", async () => {
      

       setInterval(function() {
      
        let Channell = client.channels.cache.get("     ") // mesajın atılacağı kanal ID
      
      
      
        if(Channell) Channell.send(`Su için`)
      
      
      
      }, 7200000) //1000 = 1 saniyedir süreyi istediğiniz gibi ayarlayın
      
      


     //2 saatte bir defa su için mesajını belirtilen sohbete atıyor...

    })






//Selamlaşma1
        client.on('messageCreate', message => {
          if (message.content === 'SA') {
            message.channel.send("Aleyküm Selam, Hoş geldin");
          }
        });
//Selamlaşma2
client.on('messageCreate', message => {
  if (message.content === 'sa') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma3
client.on('messageCreate', message => {
  if (message.content === 'Sa') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma3
client.on('messageCreate', message => {
  if (message.content === 'sA') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma4
client.on('messageCreate', message => {
  if (message.content === 'sea') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma5
client.on('messageCreate', message => {
  if (message.content === 'Sea') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma6
client.on('messageCreate', message => {
  if (message.content === 'SEa') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma7
client.on('messageCreate', message => {
  if (message.content === 'SEA') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma8
client.on('messageCreate', message => {
  if (message.content === 'sEA') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma9
client.on('messageCreate', message => {
  if (message.content === 'seA') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma10
client.on('messageCreate', message => {
  if (message.content === 'selamın aleyküm') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma11
client.on('messageCreate', message => {
  if (message.content === 'Selamın aleyküm') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma12
client.on('messageCreate', message => {
  if (message.content === 'Selamın Aleyküm') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma13
client.on('messageCreate', message => {
  if (message.content === 'SelamınAleyküm') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma14
client.on('messageCreate', message => {
  if (message.content === 'Selamınaleyküm') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});
//Selamlaşma15
client.on('messageCreate', message => {
  if (message.content === 'selamınaleyküm') {
    message.channel.send("Aleyküm Selam, Hoş geldin");
  }
});





