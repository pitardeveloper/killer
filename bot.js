const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**ولكم منور يا عسل**');
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**وعليكم السلام ورحمة الله وبركاته**');
  }
});

client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('**وعليكم السلام ورحمة الله وبركاته**');
  }
});

client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('**تيت لا اطول علينا يا غالي**');
  }
});

client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('أطلق ثبات وجودك :kissing_heart::kissing_heart:');
  }
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('**هلا وغلا ارحب**');
  }
});

client.on('message', msg => {
  if (msg.content === 'كيلر') {
    msg.reply('**عيون كيلر**');
  }
});

client.on('message', msg => {
  if (msg.content === 'الرابط') {
    msg.reply('https://discord.gg/uq7QzP4');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === '!') {
              message.channel.send('**Welcome To Clan Royal Diamond :hotsprings: :crown: **');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الشعار') {
              message.channel.send('شعارك بل دسكورد   **! RD**');
			  
			  
						
			  message.channel.send('شعارك بل اللعبة   **➼ર𝕯♛**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
