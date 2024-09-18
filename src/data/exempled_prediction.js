const exempled = {
  // lch: [
  //   {
  //     id: 1,
  //     name: "Arsenal",
  //     position: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Aston Villa",
  //     position: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "Atalanta",
  //     position: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "Atletico",
  //     position: 1,
  //   },
  //   {
  //     id: 5,
  //     name: "B. Dortmund",
  //     position: 1,
  //   },
  //   {
  //     id: 6,
  //     name: "Barcelona",
  //     position: 1,
  //   },
  //   {
  //     id: 7,
  //     name: "Bayern München",
  //     position: 1,
  //   },
  //   {
  //     id: 8,
  //     name: "Benfica",
  //     position: 1,
  //   },
  //   {
  //     id: 9,
  //     name: "Bologna",
  //     position: 1,
  //   },
  //   {
  //     id: 10,
  //     name: "Brest",
  //     position: 1,
  //   },
  //   {
  //     id: 11,
  //     name: "Celtic",
  //     position: 1,
  //   },
  //   {
  //     id: 12,
  //     name: "Club Brugge",
  //     position: 1,
  //   },
  //   {
  //     id: 13,
  //     name: "Crvena Zvezda",
  //     position: 1,
  //   },
  //   {
  //     id: 14,
  //     name: "Feyenoord",
  //     position: 1,
  //   },
  //   {
  //     id: 15,
  //     name: "Girona",
  //     position: 1,
  //   },
  //   {
  //     id: 16,
  //     name: "GNK Dinamo",
  //     position: 1,
  //   },
  //   {
  //     id: 17,
  //     name: "Inter",
  //     position: 1,
  //   },
  //   {
  //     id: 18,
  //     name: "Juventus",
  //     position: 1,
  //   },
  //   {
  //     id: 19,
  //     name: "Leipzig",
  //     position: 1,
  //   },
  //   {
  //     id: 20,
  //     name: "Leverkusen",
  //     position: 1,
  //   },
  //   {
  //     id: 22,
  //     name: "Liverpool",
  //     position: 1,
  //   },
  //   {
  //     id: 23,
  //     name: "Man City",
  //     position: 1,
  //   },
  //   {
  //     id: 24,
  //     name: "Milan",
  //     position: 1,
  //   },
  //   {
  //     id: 25,
  //     name: "Monaco",
  //     position: 1,
  //   },
  //   {
  //     id: 26,
  //     name: "Paris",
  //     position: 1,
  //   },
  //   {
  //     id: 27,
  //     name: "PSV",
  //     position: 1,
  //   },
  //   {
  //     id: 28,
  //     name: "Real Madrid",
  //     position: 1,
  //   },
  //   {
  //     id: 29,
  //     name: "S. Bratislava",
  //     position: 1,
  //   },
  //   {
  //     id: 30,
  //     name: "Salzburg",
  //     position: 1,
  //   },
  //   {
  //     id: 31,
  //     name: "Shakhtar",
  //     position: 1,
  //   },
  //   {
  //     id: 32,
  //     name: "Sparta Praha",
  //     position: 1,
  //   },
  //   {
  //     id: 33,
  //     name: "Sporting CP",
  //     position: 1,
  //   },
  //   {
  //     id: 34,
  //     name: "Sturm Graz",
  //     position: 1,
  //   },
  //   {
  //     id: 35,
  //     name: "Stuttgart",
  //     position: 1,
  //   },
  //   {
  //     id: 36,
  //     name: "Young Boys",
  //     position: 1,
  //   },
  // ],
  // le: [
  //   {
  //     id: 1,
  //     name: "Ajax",
  //     position: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Anderlecht",
  //     position: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "Athletic Club",
  //     position: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "AZ Alkmaar",
  //     position: 1,
  //   },
  //   {
  //     id: 5,
  //     name: "Beşiktaş",
  //     position: 1,
  //   },
  //   {
  //     id: 6,
  //     name: "Bodø/Glimt",
  //     position: 1,
  //   },
  //   {
  //     id: 7,
  //     name: "Braga",
  //     position: 1,
  //   },
  //   {
  //     id: 8,
  //     name: "Dynamo Kyiv",
  //     position: 1,
  //   },
  //   {
  //     id: 9,
  //     name: "Elfsborg",
  //     position: 1,
  //   },
  //   {
  //     id: 10,
  //     name: "FCSB",
  //     position: 1,
  //   },
  //   {
  //     id: 11,
  //     name: "Fenerbahçe",
  //     position: 1,
  //   },
  //   {
  //     id: 12,
  //     name: "Ferencváros",
  //     position: 1,
  //   },
  //   {
  //     id: 13,
  //     name: "Frankfurt",
  //     position: 1,
  //   },
  //   {
  //     id: 14,
  //     name: "Galatasaray",
  //     position: 1,
  //   },
  //   {
  //     id: 15,
  //     name: "Hoffenheim",
  //     position: 1,
  //   },
  //   {
  //     id: 16,
  //     name: "Lazio",
  //     position: 1,
  //   },
  //   {
  //     id: 17,
  //     name: "Ludogorets",
  //     position: 1,
  //   },
  //   {
  //     id: 18,
  //     name: "Lyon",
  //     position: 1,
  //   },
  //   {
  //     id: 19,
  //     name: "M. Tel-Aviv",
  //     position: 1,
  //   },
  //   {
  //     id: 20,
  //     name: "Malmö",
  //     position: 1,
  //   },
  //   {
  //     id: 21,
  //     name: "Man Utd",
  //     position: 1,
  //   },
  //   {
  //     id: 22,
  //     name: "Midtjylland",
  //     position: 1,
  //   },
  //   {
  //     id: 23,
  //     name: "Nice",
  //     position: 1,
  //   },
  //   {
  //     id: 24,
  //     name: "Olympiacos",
  //     position: 1,
  //   },
  //   {
  //     id: 25,
  //     name: "PAOK",
  //     position: 1,
  //   },
  //   {
  //     id: 26,
  //     name: "Porto",
  //     position: 1,
  //   },
  //   {
  //     id: 27,
  //     name: "Qarabağ",
  //     position: 1,
  //   },
  //   {
  //     id: 28,
  //     name: "Rangers",
  //     position: 1,
  //   },
  //   {
  //     id: 29,
  //     name: "Real Sociedad",
  //     position: 1,
  //   },
  //   {
  //     id: 30,
  //     name: "RFS",
  //     position: 1,
  //   },
  //   {
  //     id: 31,
  //     name: "Roma",
  //     position: 1,
  //   },
  //   {
  //     id: 32,
  //     name: "Slavia Praha",
  //     position: 1,
  //   },
  //   {
  //     id: 33,
  //     name: "Tottenham",
  //     position: 1,
  //   },
  //   {
  //     id: 34,
  //     name: "Twente",
  //     position: ,
  //   },
  //   {
  //     id: 35,
  //     name: "Union SG",
  //     position: 1,
  //   },
  //   {
  //     id: 36,
  //     name: "Viktoria Plzeň",
  //     position: 1,
  //   },
  // ],
  // lc: [
  //   {
  //     id: 1,
  //     name: "APOEL",
  //     position: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Astana",
  //     position: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "Başakşehir",
  //     position: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "Borac",
  //     position: 1,
  //   },
  //   {
  //     id: 5,
  //     name: "Celje",
  //     position: 1,
  //   },
  //   {
  //     id: 6,
  //     name: "Cercle Brugge",
  //     position: 1,
  //   },
  //   {
  //     id: 7,
  //     name: "Chelsea",
  //     position: 1,
  //   },
  //   {
  //     id: 8,
  //     name: "Copenhagen",
  //     position: 1,
  //   },
  //   {
  //     id: 9,
  //     name: "Dinamo Minsk",
  //     position: 1,
  //   },
  //   {
  //     id: 10,
  //     name: "Djurgården",
  //     position: 1,
  //   },
  //   {
  //     id: 11,
  //     name: "Fiorentina",
  //     position: 1,
  //   },
  //   {
  //     id: 12,
  //     name: "Gent",
  //     position: 1,
  //   },
  //   {
  //     id: 13,
  //     name: "Hearts",
  //     position: 1,
  //   },
  //   {
  //     id: 14,
  //     name: "Heidenheim",
  //     position: 1,
  //   },
  //   {
  //     id: 15,
  //     name: "Helsinki",
  //     position: 1,
  //   },
  //   {
  //     id: 16,
  //     name: "Jagiellonia",
  //     position: 1,
  //   },
  //   {
  //     id: 17,
  //     name: "Larne",
  //     position: 1,
  //   },
  //   {
  //     id: 18,
  //     name: "LASK",
  //     position: 1,
  //   },
  //   {
  //     id: 19,
  //     name: "Legia Warszawa",
  //     position: 1,
  //   },
  //   {
  //     id: 20,
  //     name: "Lugano",
  //     position: 1,
  //   },
  //   {
  //     id: 21,
  //     name: "Mladá Boleslav",
  //     position: 1,
  //   },
  //   {
  //     id: 22,
  //     name: "Molde",
  //     position: 1,
  //   },
  //   {
  //     id: 23,
  //     name: "Noah",
  //     position: 1,
  //   },
  //   {
  //     id: 24,
  //     name: "Olimpija",
  //     position: 1,
  //   },
  //   {
  //     id: 25,
  //     name: "Omonoia",
  //     position: 1,
  //   },
  //   {
  //     id: 26,
  //     name: "Pafos",
  //     position: 1,
  //   },
  //   {
  //     id: 27,
  //     name: "Panathinaikos",
  //     position: 1,
  //   },
  //   {
  //     id: 28,
  //     name: "Petrocub",
  //     position: 1,
  //   },
  //   {
  //     id: 29,
  //     name: "Real Betis",
  //     position: 1,
  //   },
  //   {
  //     id: 30,
  //     name: "Shamrock Rovers",
  //     position: 1,
  //   },
  //   {
  //     id: 31,
  //     name: "SK Rapid",
  //     position: 1,
  //   },
  //   {
  //     id: 32,
  //     name: "St. Gallen",
  //     position: 1,
  //   },
  //   {
  //     id: 33,
  //     name: "The New Saints",
  //     position: 1,
  //   },
  //   {
  //     id: 34,
  //     name: "TSC",
  //     position: 1,
  //   },
  //   {
  //     id: 35,
  //     name: "Víkingur R.",
  //     position: 1,
  //   },
  //   {
  //     id: 36,
  //     name: "Vitória SC",
  //     position: 1,
  //   },
  // ],//
};
