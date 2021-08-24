const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer1) => {
  rl.question(`What's an activity you like doing? `, (answer2) => {
    rl.question(`What do you listen to while doing that? `, (answer3) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer4) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (answer5) => {
          rl.question(`Which sport is your absolute favourite? `, (answer6) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer7) => {
              // TODO: Log the answer in a database
              console.log(`Hello ${answer1}!`);
              console.log(`So you love to ${answer2}.`);
              console.log(`I love listening to ${answer3} too!`);
              console.log(`So your favorite meal of the day is ${answer4}.`);
              console.log(`I love to eat ${answer5} too.`);
              console.log(`I don't do sports but ${answer6} is interesting.`);
              console.log(`So you are ${answer7}. Nice!`);

              rl.close();

            });
          });
        });
      });
    });
  });
});
