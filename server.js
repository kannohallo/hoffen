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
const config = require ("./config.json");
const client = new discord.Client();
const token = config.token
const prefix = config.prefix
var member = discord.user;
client.login(token);

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
client.on("message", msg =>{




  if (msg.content.startsWith (prefix + "help"))
    msg.channel.send({embed: {
      color: 3447003,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
      },
      title: "Comandos",
      url: "https://github.com/CraterMaik",
      description: "Abajo te muestro las cosas que sé haacer",
      fields: [{
          name: "___help___",
          value: "te mostraré mis opciones para poder ayudarte."
        },
        {
          name: "___own___",
          value: "Te mostraré la cuenta de mi creador para que hables con el directamente." + "Puede ser para reportar bugs, como para preguntas, e incluso por si quieres charlar un rato :p"
        },
        {
          name: "Campo3",
          value: "Puedes poner todos los Markdown *cursiva* **__Marcado__** dentro de un embed."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL(),
        text: "github.com/CraterMaik"
      }
    }
})
});
client.on("message", msg => {    
let ping = Math.floor(msg.client.ping);
if (msg.content.startsWith(prefix + "ping"))

    msg.channel.send("Cargando...").then(m => {
      m.edit({embed: {
        title: "Pong!:ping_pong: ",
        description: `Mensaje: **${Math.floor(
          m.createdTimestamp - Date.now()
        )}ms**, API: **${ping}ms**`
        }});
    });
})









