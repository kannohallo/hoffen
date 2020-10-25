// server.js
// where your node app starts

const ms = require("ms");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://kannohallo:<Innovando.2002>@hoffendatabase.hqous.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kannohallo:<Innovando.2002>@hoffendatabase.hqous.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  async (err, db) => {
    if (err) console.log(err);
    else console.log("Conectado a mongodb.");
    const SystemMute = new mongoose.Schema({
      guildID: { type: String },
      userID: { type: String },
      rolID: { type: String },
      time: { type: Number }
    });
    module.exports = mongoose.model("SystemMute", SystemMute);
    const MuteDB = require("./models/SystemMute.js");
    mongoose.connect(
      "mongodb+srv://kannohallo:<Innovando.2002>@hoffendatabase.hqous.mongodb.net/<dbname>?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("MongoDB ✔");
      }
    );
    client.on("ready", () => {
      setInterval(async function() {
        //Inicio del intervalo
        let allData = await MuteDB.find(); //Obtenemos todos los datos del modelo
        allData.map(async a => {
          if (a.time < Date.now()) {
            //Verificamos cual ya "superó" su tiempo de mute
            let member = client.guilds.resolve(a.guildID).member(a.userID); //Obtenemos el miembro
            member.roles.remove(a.rolID); //le quitamos el rol
            await MuteDB.deleteOne({ userID: a.userID }); //Eliminamos el objeto de la DB
          }
        });
      }, 10000);
    });
    const marsnpm = require("marsnpm");
    var cheerio = require("cheerio");
    var request = require("request");
    // we've started you off with Express (https://expressjs.com/)
    // but feel free to use whatever libraries or frameworks you'd like through `package.json`.
    const express = require("express");
    const app = express();
    const clientN = require("nekos.life"); //requerimos nekos.life
    const neko = new clientN(); //nuevo cliente de nekos.life
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
        "mi prefix es h!",
        "Estoy en" + client.guilds.cache.size + "servidores, genial no?."
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
      module.exports = async (client, message, args) => {
        let thumb = [
          "https://media.tenor.com/images/7265a624272e13d0950518a9654ce976/tenor.gif",
          "https://media.tenor.com/images/52866345d463488b3425fb1068ac3d01/tenor.gif",
          "https://media.tenor.com/images/ca88f916b116711c60bb23b8eb608694/tenor.gif",
          "https://media.tenor.com/images/9fe95432f2d10d7de2e279d5c10b9b51/tenor.gif",
          "https://media.tenor.com/images/ec5f44a6f93adfa22e36a5c78ae44cdf/tenor.gif",
          "https://media.tenor.com/images/a9bb4d55724484be94d13dd94721a8d9/tenor.gif",
          "https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif"
        ]; //hacemos un let thumb para poner los posibles gifs que va a tener
        var enlace = thumb[Math.floor(Math.random() * thumb.length)]; // un var enlace para poner que va a elegir uno random del let thumb
        if (msg.content.startsWith(prefix + "hug"))
          if (!message.mentions.users.first()) {
            message.channel.send("¡Menciona a alguien!");
          } else {
            //hacemos un else por si menciona a alguien

            let userm = message.mentions.users.first(); //definimos un userm para la persona que menciono

            msg.channel.send({
              embed: {
                description:
                  "**" +
                  msg.author.username +
                  "**" +
                  " le dio un abrazo a " +
                  "**" +
                  member.username +
                  "**" //la descipcion si quieres puedes cambiarla
                    .setColor("RANDOM") //color random
                    .setImage(enlace) //aqui en imagen ponemos el var enlace
              }
            });
          }
      };
    });

    client.on("message", msg => {
      let gifs = [
        "", //Introducimos el link del gif
        "" //Al igual que aquí, también podemos agregar cuantos gifs queramos solamente agregando mas corchetes
      ];

      let cap = gifs[Math.floor(gifs.length * Math.random())]; //Definimos Cap la cual se va a encargar de poner los gifs aleatoriamente utilizando Math
      if (msg.content.startsWith(prefix + "kiss")) {
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
        }
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "slap")) {
        let mention = msg.mentions.members.first(); //el mencionado al que abofetearemos
        if (!mention) return msg.channel.send("Menciona a alguien"); //si no hay mencionado retorna.
        neko.sfw.slap().then(neko => {
          //el JSON que contiene la imagen o gif
          const embed = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle(
              `${msg.member.displayName} cacheteo a ${mention.displayName}`
            )
            .setImage(neko.url); //url es el unico dato del JSON, asi que lo pedimos
          msg.channel.send(embed); //lo enviamos :3
        });
      } //cierra comando
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "img")) {
        const Discord = require("discord.js");

        //Recordar instalar esas dependencias

        const cheerio = require("cheerio");

        const request = require("request");

        module.exports = {
          run: async (bot, message, args) => {
            if (!args[1])
              return message.channel.send("Dame un resultado de búsqueda");
            //Vamos a hacer esto mediante una función :)
            image(message);
          },
          aliases: [],
          description: "Random images"
        };

        async function image(message) {
          //argumentos
          const args = message.content.split(" ");

          //Establecer opciones de búsqueda
          var options = {
            url:
              "http://results.dogpile.com/serp?qc=images&q=" +
              args.slice(1).join(" "),
            method: "GET",
            headers: {
              Accept: "text/html",
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
            var urls = new Array(links.length)
              .fill(0)
              .map((v, i) => links.eq(i).attr("href"));

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
              .setDescription(
                `Use the reactions to move from one image to another`
              )
              .setFooter(`${i + 1}/${max + 1}`)
              .setImage(urls[i])
              .setColor("RANDOM");

            //Opciones de filtros
            const filter = (reaction, user) => {
              return (
                ["◀️", "▶️", "⏹️"].includes(reaction.emoji.name) &&
                user.id === message.author.id
              );
            };

            //Guardar el mensaje y reaccionar.
            let msg = await message.channel.send(embed);
            await msg.react("◀️");
            await msg.react("▶️");
            await msg.react("⏹️");

            //Hora de encender el colector, si está inactivo por 20 segundos  finalizar.
            let collector = msg.createReactionCollector(filter, {
              idle: 20000
            });
            collector.on("collect", async (reaction, user) => {
              //Buscar cada reacción
              if (reaction.emoji.name === "▶️") {
                await reaction.users.remove(user.id);
                if (max !== i) {
                  //Modificar el embed
                  i++;
                  embed.setImage(urls[i]);
                  embed.setFooter(`${i + 1}/${max + 1}`);
                  await msg.edit(embed);
                }
              }
              if (reaction.emoji.name === "◀️") {
                await reaction.users.remove(user.id);
                if (i !== 0) {
                  i--;
                  embed.setImage(urls[i]);
                  embed.setFooter(`${i + 1}/${max + 1}`);
                  await msg.edit(embed);
                }
              }
              if (reaction.emoji.name === "⏹️") {
                //Detener el colector de manera voluntaria
                collector.stop();
              }
            });
            //Eliminar las reacciones
            collector.on("end", collected => msg.reactions.removeAll());
          });
        }
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "seenon")) {
        const args = msg.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g);
        let user =
          msg.mentions.users.first() ||
          client.users.resolve(args[0]) ||
          client.users.cache.find(x =>
            args ? args.join(" ") == x.tag : undefined
          ) ||
          msg.author;
        // Definimos "user" como el mencionado, o el de la ID, o el del tag, o el autor

        let page = !isNaN(args[1]) ? args[1] : 1;
        // Si el argumento es un número coge el segundo argumento, si no, lo define como 1

        let map = client.guilds.cache
          .filter(g => g.members.cache.has(user.id))
          .map(x => x.name); // El mapeo de servidores
        let pages = []; // Un array vacío para poner las páginas

        while (map.length > 0) {
          pages.push(map.splice(0, 15));
          // Pusheamos los servidores con un límite de 15, el número pueden cambiarlo
        }

        if (!pages[page - 1]) return msg.channel.send("Esa página no existe"); // Si no existe la página retorna

        const embed = new discord.MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(
            `${user.tag} ha sido visto en:`,
            user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })
          )
          .setDescription("```" + pages[page - 1] + "```") // Escogemos la página
          .setFooter(
            `Página: ${page}/${pages.length} | ${msg.author.username}`,
            msg.author.displayAvatarURL({
              dynamic: true,
              format: "png",
              size: 1024
            })
          ); // La página donde estamos, y cuántas hay

        msg.channel.send(embed);
      }
    });

    client.on("message", msg => {
      let url = marsnpm.cry(); //aqui se pone el tipo de reaccion que sera, cry, angry, etc.
      if (msg.conent.startsWith(prefix + "cry")) {
        //Lo hacemos en un embed por que devuelve un link y quedaria mejor.
        //RichEmbed V11 o MessageEmbed v12

        const embed = new discord.RichEmbed()
          .setTitle(`${msg.author.username} se puso a llorar`) //Obtenemos el autor del mensaje, osea el que hizo el comando
          .setColor("RANDOM")
          .setFooter("Que mal :(")
          .setTimestamp()
          .setImage(url); //agregamos lo que definimos mas arriba ( let url = await marsnpm.cry(); )

        msg.channel.send(embed);
        //Enviamos el embed
      }
    });

    client.on("message", msg => {
      let url = marsnpm.meme();
      if (msg.content.startsWith(prefix + "meme")) {
        const embed = new discord.RichEmbed()
          .setTitle(
            "${msg.author.username} aqui te traigo lo que pediste    :p"
          )
          .setColor("RANDOM")
          .setTimestamp()
          .setImage(url);
        msg.channel.send(embed);
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "wasted")) {
        let url = marsnpm.wasted(msg.author.avatarURL);
        msg.channel.send({ files: [url] });
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "trump")) {
        const args = msg.content.split(" ");
        let trump = args.join(" ");
        let img = marsnpm.trump(trump);
        msg.channel.send({ files: [img] });
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "rip")) {
        let img = marsnpm.rip(msg.author.avatarURL);
        msg.channel.send({ files: [img] });
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "mask")) {
        let res = marsnpm.mascara(msg.author.avatarURL);
        return msg.channel.send(res);
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "suicide")) {
        let url = marsnpm.suicide;
        const embed = new discord.RichEmbed()
          .setTitle(msg.author.username + "se ha suicidado D: ")
          .setDescription(
            "podras haber seguido, y sin embargo escogiste eso..."
          )
          .setImage(url);

        msg.channel.send(embed);
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "sleep")) {
        let url = marsnpm.sleep();
        const embed = new discord.RichEmbed()
          .setTitle(
            "parece que" +
              msg.author.username +
              "tiene tanto sueño que se dormir aqui mismo"
          )
          .setImage(url)
          .setFooter("que descanses bien <3");
        msg.channel.send(embed);
      }
    });
    client.on("guildMemberAdd", async member => {
      let canal = client.channels.get("idelcanal");

      let nameuser = member.user.username;
      let avatar = member.user.avatarURL;

      let img = await marsnpm.bienvenida(avatar, nameuser);
      canal.send({ files: [img] });
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "avatar")) {
        const args = msg.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g);
        let user =
          msg.mentions.users.first() ||
          client.users.resolve(args[0]) ||
          client.users.cache.find(x =>
            args ? args.join(" ") == x.tag : undefined
          ) ||
          msg.author;
        let page = !isNaN(args[1]) ? args[1] : 1;
        let avatar = user.avatarURL;

        if (!user) {
          msg.reply(
            "debes mencionar a alguien, da igual si es con username o id"
          );
        } else {
          const embed = new discord.RichEmbed()
            .setTitle("aqui te traigo lo que me has solicitado")
            .setImage(avatar)
            .setFooter(
              "esto ha sido solicitado por" +
                msg.author.username +
                msg.author.display.avatarURL +
                "espero haberte sido de ayuda n.n"
            );
          msg.channel.send(embed);
        }
        if (!args) {
          const embed = new discord.RichEmbed()
            .setTitle("Esto es lo que me has pedido")
            .setImage(msg.author.avatarURL)
            .setFooter("espero haberte sido de ayuda n.n");
          msg.channel.send(embed);
        }
      }
    });

    client.on("message", msg => {
      if (msg.content.startsWith(prefix + "ban")) {
        //Hacemos el comando
        const args = msg.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g);
        if (!msg.guild.me.permissions.has("BAN_MEMBERS")) {
          //Empezamos definiendo los permissions del bot

          const sinpermisos = new discord.MessageEmbed()
            .setTitle("ERROR")
            .setThumbnail(
              "https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2"
            )
            .setImage(
              "https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif"
            )
            .setColor("RED")
            .setDescription("No cuento con permisos necesarios para banear.");

          return msg.channel.send(sinpermisos); //Enviamos embed de falta de permissions
        }

        if (!msg.member.permissions.has("BAN_MEMBERS")) {
          //Ahora definimos las permissions del usuario

          const sinpermisos2 = new discord.MessageEmbed()
            .setTitle("ERROR")
            .setImage(
              "https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif"
            )
            .setColor("RED")
            .setDescription("No cuentas con permisos necesarios para banear.");

          return msg.channel.send(sinpermisos2); //Enviamos embed de falta de permissions
        }

        let user =
          msg.mentions.users.first() ||
          client.users.resolve(args[0]) ||
          client.users.cache.find(x =>
            args ? args.join(" ") == x.tag : undefined
          ); //Definimos "persona" que nos servira para mencionar al que queramos banear

        if (!user) {
          // Si no mencionamos....

          const sinmencionar = new discord.MessageEmbed()
            .setTitle("ERROR")
            .setThumbnail(
              "https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2"
            )
            .setImage(
              "https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif"
            )
            .setColor("RED")
            .setDescription("No has mencionado al usuario que quieres banear.");

          return msg.channel.send(sinmencionar); //Embed de error de mencion
        } else if (!user.bannable) {
          //¿Que pasa si la persona no es baneable?

          const sinmencionar = new discord.MessageEmbed()
            .setTitle("ERROR")
            .setThumbnail(
              "https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2"
            )
            .setImage(
              "https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif"
            )
            .setColor("RED")
            .setDescription("No puedo banear a esta persona.");

          return msg.channel.send(sinmencionar); //Enviamos embed de falta de mencion
        } else if (
          user.roles.highest.comparePositionTo(msg.member.roles.highest) > 0
        ) {
          //Definimos la jerarquia de roles
          const mayor = new discord.MessageEmbed() //Ahora definimos lo que vendria a ser, que el rol no pueda banear si tiene un rol mas bajo que el usuario a banear
            .setTitle("ERROR")
            .setThumbnail(
              "https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2"
            )
            .setImage(
              "https://media1.tenor.com/images/70ce41310f8a9c2a84e97b57198015d9/tenor.gif"
            )
            .setColor("RED")
            .setDescription("Persona de igual rango o mayor que tu.");
          return msg.channel.send(mayor); //Enviamos embed
        }

        var razon = args.slice(1).join(" "); //Definimos la variable que se usara para dar la razon del ban
        if (!razon) {
          razon = "Razon no especificada"; //Si no especificamos razon, saldra este mensaje
        }

        razon += ``;

        const baneado = new discord.MessageEmbed() //Embed de informacion posterior al baneo
          .addField("Usuario Baneado", `${user.username}`)
          .addField("Razón", razon)
          .addField("Canal", msg.channel)
          .setColor("RED")
          .setThumbnail(client.user.avatarURL());
        msg.channel.send(baneado); //Enviamos EMBED

        msg.guild.members.ban(user, {
          // Aca viene lo importante. Lo baneamos, ponemos de razon lo que esepcificamos antes y eliminamos su historial de mensaje en un lapso de 7 dias
          reason: razon,
          days: 7
        });
        msg.guild.members.unban(user.id); //Lo desbaneamos...

        ///REVISAR LA PARTE DE DESBANEAMOS EN CASO DE QUE NO FUNCIONE, PORQUE ESTE TIPO PONE FALLAS PARA NO C&P
      }
    });
  }
);

client.on("message", msg => {
  const config = require(config.json);
  const prefix = config.json;
  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  module.exports = mongoose.model("SystemMute", SystemMute);
  const MuteDB = require("./models/SystemMute.js");
  mongoose.connect(
    "mongodb+srv://kannohallo:<Innovando.2002>@hoffendatabase.hqous.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("MongoDB ✔");
    }
  );
  if (msg.content.startsWith("h!mute")) {
    let user = msg.mentions.users.first(); //Establecemos la mención al usuario
    if (!user) return msg.channel.send("No user"); //Si no se menciona a un usuario retorna
    let data = MuteDB.findOne({ userID: user.id }); //"Obtenemos" el objeto si hay algo guardado
    if (data) return msg.channel.send("Usuario ya está Muteado"); //Si lo hay quiere decir que el usuario está muteado, por lo tanto el mensaje.
    let time = args[1]; //Tiempo
    if (!time) return message.reply("No time"); //Si no introduce un tiempo
    let rolMute;
    if (message.guild.roles.cache.find(x => x.name == "Muted")) {
      rolMute = message.guild.roles.cache.find(x => x.name == "Muted").id; //Si se encuentra un rol con el nombre Muted, re-definimos "RolMute"
    } else {
      //de lo contrario lo crearemos
      let a = msg.guild.roles.create({
        data: {
          name: "Muted"
        }
      });
      rolMute = a.id;
    }
    message.guild.channels.cache.forEach(async channel => {
      //Esto obtendrá todos los canales del servidor y modificará los permisos del rol, denegando que envíe mensajes
      await channel.updateOverwrite(rolMute, {
        SEND_MESSAGES: false
      });
    });
    message.guild.member(user).roles.add(rolMute); //Añadimos el rol al miembro
    message.channel.send(`Usuario muteado por ${ms(ms(time))}`); //Mensaje de "confirmación"
    let wc = new MuteDB({
      guildID: message.guild.id,
      userID: user.id,
      rolID: rolMute,
      time: Date.now() + ms(time)
    }); //Creamos una colección en la DB con los datos
    wc.save(); //guardamos
  }
});
