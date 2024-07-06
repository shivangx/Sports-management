const mongoose = require("mongoose")
const Sports = require("./model/sports")

const dummy_data=[
    {
      name: "Soccer",
      category: "Team Sport",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb3RiYWxsfGVufDB8fDB8fHww",
      description: "It is played between two teams, each with 11 players, including a goalkeeper. The game is played with a round ball, and the primary objective is to score by getting the ball into the opposing team's net."
    },
    {
      name: "Basketball",
      category: "Team Sport",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
      description:"Basketball is a game played between two teams of five players each on a rectangular court, usually indoors. Each team tries to score by tossing the ball through the opponent's goal, an elevated horizontal hoop and net called a basket."
    },
    {
      name: "Tennis",
      category: "Racquet Sport",
      image: "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JTVDdGVubmlzfGVufDB8fDB8fHww",
      description: "Tennis is a game played with two opposing players (singles) or pairs of players (doubles) using tautly strung rackets to hit a ball of specified size, weight, and bounce over a net on a rectangular court. "

    },
    {
      name: "Swimming",
      category: "Individual Sport",
      image: "https://plus.unsplash.com/premium_photo-1666913667082-c1fecc45275d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JTVDdGVubmlzfGVufDB8fDB8fHww",
      description: "Swimming is an individual or team sport that requires the use of one's arms"
    },
    {
      name: "Boxing",
      category: "Combat Sport",
      image: "https://plus.unsplash.com/premium_photo-1672774498332-87bb85d0cda9?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Ym94aW5nfGVufDB8MHx8fDE3MjAxODIyNjh8MQ&ixlib=rb-4.0.3",
      description:"Boxing is a sport that involves strategically punching an opponent while defending yourself from their return punches."
    },
    {
      name: "Baseball",
      category: "Team Sport",
      image: "https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFzZWJhbGx8ZW58MHx8MHx8fDA%3D",
      description:"Boxing is a sport that involves strategically punching an opponent while defending yourself from their return punches."
    },
    {
      name: "Cycling",
      category: "Individual Sport",
      image: "https://images.unsplash.com/photo-1605235186583-a8272b61f9fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN5Y2xpbmd8ZW58MHx8MHx8fDA%3D",
      description:"cycling, use of a bicycle for sport, recreation, or transportation. The sport of cycling consists of professional and amateur races, which are held mostly in continental Europe, the United States, and Asia"
    },
    {
      name: "Golf",
      category: "Individual Sport",
      image: "https://images.unsplash.com/photo-1515358204547-8689c79d6991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdvbGZ8ZW58MHx8MHx8fDA%3D",
      description:"Golf is a very popular sport worldwide. It is a game played on a large outdoor course, the object being to propel a small hard ball into a series of 'holes' with as few strokes as possible"
    },
    {
      name: "Cricket",
      category: "Team Sport",
      image: "https://media.istockphoto.com/id/985960652/photo/cricket-equipment-on-grass.webp?b=1&s=170667a&w=0&k=20&c=xs1RPgzwMCjaSylyVM4lzmyJOiwBk-gcUWqMjFh2UpE=",
      description:"Cricket is a game played with a ball and bat by two sides of usually 11 players each on a large field centering upon two wickets each defended by a batsman"
    },
  ]
  mongoose.connect('mongodb://127.0.0.1:27017/sports')
    .then(async () => {
        await Sports.create(dummy_data)
    })