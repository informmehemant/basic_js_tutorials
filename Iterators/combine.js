//link
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
var Gamer = [
    {
      id: 25,
      name: "Jaina Proudmore",
      score: 98,
      level: 2,
      isForceUser: true,
    },
    {
        id: 15,
        name: "Arthas",
        score: 8,
        level: 4,
        isForceUser: false,
    },
    {
        id: 6,
        name: "Paladin",
        score: 98,
        level: 12,
        isForceUser: true,
    },
    {
        id: 9,
        name: "Litch king",
        score: 8,
        level: 12,
        isForceUser: true,
    },
    {
        id: 10,
        name: "Jaina Proudmore",
        score: 18,
        level: 2,
        isForceUser: true,
    },
  ];
  var totalScore = Gamer
  .filter(function (person) {
    return person.isForceUser;
  })
  .map(function (g) {
    return g.score + g.level;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);

  console.log(totalScore);