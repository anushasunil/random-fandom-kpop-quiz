const readlineSync = require('readline-sync');
const chalk = require('chalk');
const correctAns = chalk.white.bgGreen.bold
const wrongAns = chalk.white.bgRed.bold
const congratsMessage = chalk.black.bgYellow.bold
const roundRules = chalk.black.bgWhite.bold


var playerName = readlineSync.question("what's your name? ");
console.log("Welcome, ", playerName, " to Kpop Quiz! e.e \n");

var score = 0;
var status = 0;

var qnaList_round_1 = [
	{
		question: "Lia is the maknae of ITZY. ",
		answer: 'false'
	},
	{
		question: "Rosé is from New Zealand.",
		answer: 'true'
	},
	{
		question: "BTS has 7 members. ",
		answer: 'true'
	}
]
var qnaList_round_2 = [
	{
		question: "Chungha debuted in __________ group ",
		answer: "I.O.I"
	},
	{
		question: "What was the name of Jennie's debut album? ",
		answer: "Solo"
	},
	{
		question: "Which Idol is a part of the Wooga Squad?  ",
		answer: "Kim Taehyun"
	}
]

var round2_answerSet = [
	{
		options:['WJSN','Pristin','I.O.I','Wonder Girls']
	},
	{
		options:['Solo','The Album','Black','Play with Fire']
	},
	{
		options:['Kim Seokjin','Hwang Hyunjin','Park Seojun','Kim Taehyun']
	}
]
var qnaList_round_3 = [
	{
		question: "What is the national food of Korea? ",
		answer: "Kimchi"
	},
	{
		question: "The most famous tourist attraction in south korea - ",
		answer: "Namsan Tower"
	},
	{
		question: "Who is the Princess of kpop? ",
		answer: "IU"
	}
]

function play(ques, answ, points) {

	let temp_score = 0;

	 if(answ == undefined)
	{
		console.log(wrongAns("skipped-- :( "));
	}
	else if(answ.toLowerCase() == ques.answer.toLowerCase())
		{
			console.log(correctAns("yayy! correct! :D "));
			temp_score = temp_score + points;
		}
	else
	{
		console.log(wrongAns("wrong-- :( "));
	}
	console.log("______________________________");

	return temp_score;
}

for(let i = 0; i < qnaList_round_1.length; i = i + 1)
{
	score = score + play(qnaList_round_1[i], readlineSync.keyInYN(qnaList_round_1[i].question).toString(),1)
}

console.log("Round One complete.\nCurrent Score: ",score);
console.log("______________________________\n");

if(score >= 1)
{
	console.log(congratsMessage("Congratulations! you made it to next round! \n"));
	console.log(roundRules("In Round Two, each ques will carry 3 points\nif your ans is correct then hurray!, else 1point will be deducted '_'\nAtb, Round Two begins...  \n"));

	for(let i = 0; i < qnaList_round_2.length; i = i + 1)
	{
		var index = readlineSync.keyInSelect(round2_answerSet[i].options,qnaList_round_2[i].question);
		score = score + play(qnaList_round_2[i], round2_answerSet[i].options[index],2)
	}

	console.log("Round Two complete ✌.\nCurrent Score: ",score);
	console.log("______________________________\n");
	status = 1;
}
else
{
	console.log(wrongAns("You didn't pass the this round '_'\nbetter luck next time.\nFinal Score: ",score))
}

if( score >= 5)
{
	console.log(congratsMessage("Congratulations! you made it to next round! \n"));
	console.log(roundRules("In Round Three, each ques will carry 5 points\nif your ans is correct then hurray!, else 2point will be deducted '_'\nAtb, Round Three begins...  \n"));

	for(let i = 0; i < qnaList_round_3.length; i = i + 1)
	{
		score = score + play(qnaList_round_3[i], readlineSync.question(qnaList_round_3[i].question),3)
	}
	console.log("Round Three complete ✌.\nCurrent Score: ",score);
	console.log("______________________________\n");
	console.log(congratsMessage("Congratulations you've completed the game :D \nFinal Score",score,"\n"));
	highscorersList()
	console.log("\nIf your score is highest then send a screenshot, I'll update it! ")
}
else if(status)
{
	console.log(wrongAns("You didn't pass the this round '_'\nbetter luck next time.\nFinal Score: ",score))
}
console.log("------******------");

function highscorersList()
{
	var list = [
		{
			name : "Anusha",
			score: "13"
		},
		{
			name : "kimaya",
			score: "12"
		},
		{
			name : "Buvani",
			score: "11"
		}
	]

	console.log("The current topscorers are as follows: \n")
	console.log("name \t scores")
	for(var i = 0; i < list.length;i++)
	{
		console.log(list[i].name, "\t", list[i].score)

	}
}