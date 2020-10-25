// server.js
// where your node app starts





var cheerio = require("cheerio");
var request = require("request");
// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const clientN = require("nekos.life") //requerimos nekos.life
const neko = new clientN()//nuevo cliente de nekos.life
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
const embed = new discord.MessageEmbed(); 
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
              msg.mentions.users.id +
              ">" +
              " <3"
          )
          .setImage(cap)
          .setColor("RANDOM");

        msg.channel.send(embed);

//Para las versiones 11 solo se cambia el MessageEmbed() por RichEmbed()
      }}
})

client.on("message", msg =>{
if(msg.content.startsWith (prefix + 'slap')) {
let mention = msg.mentions.members.first() //el mencionado al que abofetearemos
if(!mention) return msg.channel.send("Menciona a alguien") //si no hay mencionado retorna.
  neko.sfw.slap().then(neko => { //el JSON que contiene la imagen o gif
const embed = new discord.MessageEmbed()
.setColor("RED")
.setTitle(`${msg.member.displayName} cacheteo a ${mention.displayName}`)
.setImage(neko.url) //url es el unico dato del JSON, asi que lo pedimos
msg.channel.send(embed) //lo enviamos :3
 })
 }//cierra comando
})


client.on("message", msg =>{
if(msg.content.startsWith(prefix + "img")){

const Discord = require('discord.js');

//Recordar instalar esas dependencias

const cheerio = require('cheerio');
 
const request = require('request');

module.exports = {
    run: async (bot, message, args) => {
        if (!args[1]) return message.channel.send('Dame un resultado de búsqueda')
        //Vamos a hacer esto mediante una función :)
        image(message);
    },
    aliases: [],
    description: "Random images",
}

async function image(message){ 
    //argumentos
    const args = message.content.split(" ");

    //Establecer opciones de búsqueda
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + args.slice(1).join(" "),
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };

    //Llamar a request
    request(options, async function(error, response, responseBody) {
        if (error) {
            return;
        }
        //Encontrar las imágenes....
        $ = cheerio.load(responseBody);
    
        var links = $(".image a.link");
        
        //Crear las URLs
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        //Si no encontró nada, regresar con ese mensaje
        if (!urls.length) {
            return message.channel.send("I didn't find anything.");
        }


        //Establecer mínimo y máximo para evitar errores en el colector
        let i = 0;
        let max = urls.length - 1;
        //La mejor forma de hacer esto es por un embed :)
        const embed = new Discord.MessageEmbed()
        .setTitle("Image search: " + args.slice(1).join(" "))
        .setDescription(`Use the reactions to move from one image to another`)
        .setFooter(`${i + 1}/${max + 1}`)
        .setImage(urls[i])
        .setColor("RANDOM")

        //Opciones de filtros
        const filter = (reaction, user) => {
            return ['◀️', '▶️', '⏹️'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        //Guardar el mensaje y reaccionar.
        let msg = await message.channel.send(embed);
        await msg.react('◀️');
        await msg.react('▶️');
        await msg.react('⏹️');

        //Hora de encender el colector, si está inactivo por 20 segundos  finalizar.
        let collector = msg.createReactionCollector(filter, { idle: 20000 })
        collector.on('collect', async (reaction, user) => {
            //Buscar cada reacción
            if (reaction.emoji.name === '▶️') {
                await reaction.users.remove(user.id);
                if (max !== i){
                    //Modificar el embed
                    i++
                    embed.setImage(urls[i])
                    embed.setFooter(`${i + 1}/${max + 1}`)
                    await msg.edit(embed);
                }
            }
            if (reaction.emoji.name === '◀️') {
                await reaction.users.remove(user.id);
                if (i !== 0) {
                    i--
                    embed.setImage(urls[i])
                    embed.setFooter(`${i + 1}/${max + 1}`)
                    await msg.edit(embed);
                }
            }
            if (reaction.emoji.name === '⏹️') {
                //Detener el colector de manera voluntaria
                collector.stop();
            }
        })
        //Eliminar las reacciones
        collector.on('end', collected => msg.reactions.removeAll())

    });
};
}})

client.on("message", msg =>{
if(msg.content.startsWith (prefix + "seenon")){ const args = msg.content.slice(prefix.length).trim().split(/ +/g);
        let user = msg.mentions.users.first() ||
            client.users.resolve(args[0]) ||
            client.users.cache.find(x => (args) ? (args.join(" ") == x.tag) : undefined) ||
            msg.author; 
// Definimos "user" como el mencionado, o el de la ID, o el del tag, o el autor

        let page = !isNaN(args[1]) ?
            args[1] :
            1
// Si el argumento es un número coge el segundo argumento, si no, lo define como 1

        let map = client.guilds.cache.filter(g => g.members.cache.has(user.id)).map(x => x.name) // El mapeo de servidores
        let pages = [] // Un array vacío para poner las páginas

        while (map.length > 0) {

            pages.push(map.splice(0, 15)) 
// Pusheamos los servidores con un límite de 15, el número pueden cambiarlo

        }

        if (!pages[page - 1]) return msg.channel.send("Esa página no existe") // Si no existe la página retorna
        

        const embed = new discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(`${user.tag} ha sido visto en:`, user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
            .setDescription("```"+pages[page - 1]+"```") // Escogemos la página
            .setFooter(`Página: ${page}/${pages.length} | ${msg.author.username}`, msg.author.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })) // La página donde estamos, y cuántas hay

        msg.channel.send(embed)
}})

client.on("message", msg =>{async function
if(msg.conent.startsWith(prefix+"cry")){
    let url = await marsnpm.cry(); //aqui se pone el tipo de reaccion que sera, cry, angry, etc.

//Lo hacemos en un embed por que devuelve un link y quedaria mejor.
//RichEmbed V11 o MessageEmbed v12

    const embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username} se puso a llorar`) //Obtenemos el autor del mensaje, osea el que hizo el comando
    .setColor("RANDOM")
    .setFooter("Que mal :(")
    .setTimestamp()
      .setImage(url); //agregamos lo que definimos mas arriba ( let url = await marsnpm.cry(); )
       
    message.channel.send(embed);
//Enviamos el embed  
}
})

















