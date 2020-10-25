// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const discord = require("discord.js");
const config = require("./config.json");
const client = new discord.Client();
const token = config.token;
const prefix = config.prefix;
var member = discord.user;
client.login(token);
const embed = new discord.MessageEmbed()/
client.on("preparado", () => {
  const actividades = [
    "en desarollo",
    "gestionado por kanno",
    "para reportar escribe h!own",
    "mi prefix es h!"
  ];
  setInterval(() => {
    const index = Math.floor(Math.random() * (actividades.length - 1) + 1);

    client.user.setPresence({
      game: {
        name: actividades[index],
        type: "PLAYING",
        browser: "Discord iOs"
      },
      status: "online"
    });
  }, 5000);
});

//////////////////c/////////////////////////////
client.on("message", msg => {
  if (msg.content.startsWith(prefix + "help"))
    msg.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        title: "Comandos",
        url: "https://github.com/CraterMaik",
        description: "Abajo te muestro las cosas que sé haacer",
        fields: [
          {
            name: "___help___",
            value: "te mostraré mis opciones para poder ayudarte."
          },
          {
            name: "___own___",
            value:
              "Te mostraré la cuenta de mi creador para que hables con el directamente." +
              "Puede ser para reportar bugs, como para preguntas, e incluso por si quieres charlar un rato :p"
          },
          {
            name: "Campo3",
            value:
              "Puedes poner todos los Markdown *cursiva* **__Marcado__** dentro de un embed."
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: "github.com/CraterMaik"
        }
      }
    });
});
client.on("message", msg => {
  let ping = Math.floor(msg.client.ping);
  if (msg.content.startsWith(prefix + "ping"))
    msg.channel.send("Cargando...").then(m => {
      m.edit({
        embed: {
          title: "Pong!:ping_pong: ",
          description: `Mensaje: **${Math.floor(
            m.createdTimestamp - Date.now()
          )}ms**, API: **${ping}ms**`
        }
      });
    });
});

client.on("message", msg => {
module.exports = async(client, message, args) => {
let thumb = ["https://media.tenor.com/images/7265a624272e13d0950518a9654ce976/tenor.gif","https://media.tenor.com/images/52866345d463488b3425fb1068ac3d01/tenor.gif","https://media.tenor.com/images/ca88f916b116711c60bb23b8eb608694/tenor.gif","https://media.tenor.com/images/9fe95432f2d10d7de2e279d5c10b9b51/tenor.gif","https://media.tenor.com/images/ec5f44a6f93adfa22e36a5c78ae44cdf/tenor.gif","https://media.tenor.com/images/a9bb4d55724484be94d13dd94721a8d9/tenor.gif","https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif"]//hacemos un let thumb para poner los posibles gifs que va a tener
var enlace = thumb[Math.floor(Math.random() * thumb.length)]// un var enlace para poner que va a elegir uno random del let thumb
if(msg.content.startsWith(prefix + "hug"))
if(!message.mentions.users.first()) {

message.channel.send('¡Menciona a alguien!')


} else {//hacemos un else por si menciona a alguien

let userm = message.mentions.users.first()//definimos un userm para la persona que menciono

msg.channel.send({embed:{ description:"**" + msg.author.username + "**" + " le dio un abrazo a " + "**" + member.username + "**"//la descipcion si quieres puedes cambiarla
.setColor("RANDOM")//color random
.setImage(enlace)//aqui en imagen ponemos el var enlace
}})
}
}

})

client.on("message", msg =>{
let gifs = ["", //Introducimos el link del gif
            "",  //Al igual que aquí, también podemos agregar cuantos gifs queramos solamente agregando mas corchetes
                  
       
      ];

      let cap = gifs[Math.floor(gifs.length * Math.random())]; //Definimos Cap la cual se va a encargar de poner los gifs aleatoriamente utilizando Math
if(msg.content.startsWith (prefix + "kiss")){
//Ponemos para que al mencionar a alguien se ejecute el código  de gifs randoms
      let pr = msg.mentions.users.first();
      if (!pr) {
        msg.reply("Debes mencionar a alguien OwO");
      } else {
//Hacemos el embed y agregamos .setImage y cap que es la encarga de poner los gifs aleatorios
        const embed = new discord.MessageEmbed()
          .setDescription(
            "<" +
              "@" +
              msg.author.id +
              ">" +
              "  Besó a " +
              "<" +
              "@" +
              xd.id +
              ">" +
              " <3"
          )
          .setImage(cap)
          .setColor("RANDOM");

        message.channel.send(embed);

//Para las versiones 11 solo se cambia el MessageEmbed() por RichEmbed()
      }}
})




















