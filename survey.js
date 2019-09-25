const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (name) => {

  rl.question('What is an activity you enjoy?', (activity) => {

    rl.question('What do listen to while doing that? ', (listen) => {

      rl.question('What meal is your favorite? ', (meal) => {


        rl.question('What is your favorite thing to eat for that meal? ', (food) => {


          rl.question('Which sport is your absolute favorite? ', (sport) => {


            rl.question('What is your superpower? ', (power) => {


              console.log(`(${name} likes to listen to ${listen} while ${activity}. ${name} likes to eat ${food} for ${meal}. ${sport} is ${name} favourite sport. ${power} is ${name}'s superpower.`)

              rl.close();
            })
          })
        })
      })
    })
  })
});
