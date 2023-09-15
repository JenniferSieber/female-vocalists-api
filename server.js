const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

let topSingers = {
  "rihanna": {
    age: 45,
    birthName: "Robyn Rihanna Fenty",
    birthdate: "born February 20, 1988",
    birthLocation: "Saint Michael, Barbados",
    genre: "pop, R&B, reggae, hip hop, EDM",
    occupation: "singer, song writer, actress, businesswoman",
    labels: "Roc Nation, Def Jam, SRP, Westbury Road",
    website: "http://rihanna.com/",
  },
  "adele": {
    age: 35,
    birthName: "Adele Laurie Blue Adkins",
    birthdate: "May 5, 1988",
    birthLocation: "London, England",
    genre: "pop, soul",
    occupation: "singer, song writer",
    labels: "XL, Columbia, Melted Stone",
    website: "http://adele.com/",
  },
  "lady gaga": {
    age: 28,
    birthName: "Stefani Joanne Angelina Germanotta",
    birthdate: "March 28, 1986",
    birthLocation: "Manhattan, New York",
    genre: "pop, dance, electronic, jazz, rock",
    occupation: "singer, song writer, actress",
    labels: "Def Jam, Cherrytree, KonLive, Streamline, Interscope",
    website: "https://ladygaga.com/",
  },
  "christina aguilera": {
    age: 42,
    birthName: "Christina María Aguilera",
    birthdate: "December 18, 1980",
    birthLocation: "New York, New York",
    genre: "pop, R&B, soul, dance-pop, Latin pop",
    occupation: "singer, song writer, actress, television personality",
    labels: "RCA, Soney Latin, Legacy",
    website: "http://christinaaguilera.com/",
  },
  "ella fitzgerald": {
    age: 79,
    birthName: "Ella Jane Fitzgerald",
    birthdate: "April 25, 1917",
    birthLocation: "Beverly Hills, California",
    genre:
      "jazz, swing, bebop, traditional pop, blues, soul, doo-wop, post-bop, rock and roll",
    occupation: "singer",
    labels: "Decca, Verve, Capitol, Reprise, Pablo",
    website: "http://ellafitzgerald.com/",
  },
  "loreena mckennitt": {
    age: 66,
    birthName: "Chancelor Jonathan Bennett",
    birthdate: "April 16, 1993",
    birthLocation: "Morden, Manitoba, Canada",
    genre: "Celtic, world, new-age",
    occupation: "singer, song writer, musician, producer, composer",
    labels: "Quilan Road, Warner Bros, Verve, Forecast/Universal",
    website: "http://loreenamckennitt.com/",
  },
  "whitney houston": {
    age: 48,
    birthName: "Whitney Elizabeth Houston",
    birthdate: "August 9, 1963",
    birthLocation: "Beverly Hills, California",
    genre: "R&B, pop, dance-pop, soul, gospel",
    occupation: "singer, actress, producer, model",
    labels: "Arista, RCA",
    website: "http://whitneyhouston.com/",
  },
  "aretha franklin": {
    age: 76,
    birthName: "Aretha Louise Franklin",
    birthdate: "March 25, 1942",
    birthLocation: "Memphis, Tennessee, U.S.",
    genre: "soul, R&B, gospel, jazz, pop, singer, song",
    occupation:
      "singer, songwriter, pianist, civil rights activist, record producer",
    labels: "JVB, Columbia, Atlantic, Arista, RCA",
    website: "https://www.arethafranklin.net/",
  },
  "janis joplin": {
    age: 27,
    birthName: "Janis Lyn Joplin",
    birthdate: "January 19, 1943",
    birthLocation: "Port Arthur, Texas",
    genre: "Psychedelic rock, soul, blues, blues rock",
    occupation: "singer, song musician",
    labels: "Columbia Records",
    website: "http://janisjoplin.com/",
  },
  "kate bush": {
    age: 65,
    birthName: "Catherine Bush",
    birthdate: "July 30, 1958",
    birthLocation: "Bexleyheath, Kent, England",
    genre:
      "Art pop, art rock, experimental pop, post-progressive, progressive pop",
    occupation: "singer, songwriter, musician, dancer, record producer",
    labels:
      "Harvest, EMI, Fish People, Columbia, Anti, Concord, Parlophone, The state51 Conspiracy",
    website: "http://katebush.com/",
  },
  "annie lennox": {
    age: 68,
    birthName: "Ann Lennox",
    birthdate: "December 25, 1954",
    birthLocation: "Aberdeen, Scotland",
    genre:
      "pop, pop rock, rock, soul, R&B, new wave, synth-pop, electronic, jazz",
    occupation: "singer, song writer, political activist, philanthropist",
    labels: "RCA, Arista, Island, Decca",
    website: "http://www.annielennox.com/",
  },
  "lana del rey": {
    age: 28,
    birthName: "Elizabeth Woolridge Grant",
    birthdate: "June 21, 1985",
    birthLocation: "New York City, New York",
    genre: "alt-pop, baroque pop, rock, dream pop",
    occupation: "singer, song writer",
    labels: "5 Points, Stranger, Polydor, Interscope",
    website: "http://lanadelrey.com/",
  },
  "norah jones": {
    age: 44,
    birthName: "Geethali Norah Jones Shankar",
    birthdate: "March 30, 1979",
    birthLocation: "Grapevine, Texas",
    genre: "pop, jazz, folk, country",
    occupation: "singer,musician",
    labels: "Blue Note",
    website: "http://norahjones.com/",
  },
  "joni mitchell": {
    age: 79,
    birthName: "Roberta Joan Anderson",
    birthdate: "November 7, 1943",
    birthLocation: "Fort Macleod, Alberta, Canada",
    genre: "Folk, pop, jazz, rock",
    occupation: "singer, songwriter, painter",
    labels: "Reprise, Asylum, Geffen, Nonesuch, Hear Music",
    website: "http://jonimitchell.com/",
  },
  "amy winehouse": {
    age: 27,
    birthName: "Amy Jade Winehouse",
    birthdate: "September 14, 1983",
    birthLocation: "Gordon Hill, Enfield, England",
    genre: "soul, neo soul, blue-eyed soul, R&B, jazz",
    occupation: "singer, song writer",
    labels: "Island, Lioness, Universal, Republic",
    website: "http://amywinehouse.com/",
  },
  "tina turner": {
    age: 83,
    birthName: "Anna Mae Bullock",
    birthdate: "November 26, 1939",
    birthLocation: "Brownsville, Tennessee",
    genre: "rock, R&B,soul, pop, rock and roll",
    occupation: "singer, songwriter, actress, author",
    "": "2013-present",
    labels: "Sonja, Pompeii, United Artists, Capitol, Virgin",
    website: `http://tinaturnerofficial.com/`,
  },

  "unknown": {
    age: "unknown",
    birthName: "unknown",
    birthdate: "unknown",
    birthLocation: "unknown",
    genre: "unknown",
    occupation: "unknown",
    labels: "unknown",
    website: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/", (req, res) => {
  res.json(topSingers)
})

app.get("/api/:name", (req, res) => {
  const vocalist = req.params.name.toLowerCase();
  console.log('test',vocalist)
  if (topSingers[vocalist]) {
    res.json(topSingers[vocalist])
  } else {
    res.json(topSingers['unknown'])
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Port:${PORT} server running! Servers make best partners, all they do is listen and serve. Betta Go Catch It!`
  )
});
