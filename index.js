var readlineSync = require('readline-sync');
const chalk = require('chalk');

var username=readlineSync.question("Whats your name?");

var score=0;

console.log("Welcome "+chalk.bgMagenta(username)+" !Let's Make it intresting");

var questions=[{
  question:"Where do I live?",
  answer:"tirupur"
},
{
  question:"Where do I studied college?",
  answer:"erode"
},
{
  question:"Does I work?",
  answer:"yes"
}]

function play(question,answer){
  var ans=readlineSync.question(question);
  if(ans.toLowerCase()===answer.toLowerCase()){
    score++;
    console.log(chalk.bgGreen('right'))
  }else{
    score--;
    console.log(chalk.bgRed('wrong'))
  }
}
//play("mani","yes")

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
}

console.log("Congrats " +chalk.bgMagenta(username)+"! You scored "+chalk.bgCyan(score))
