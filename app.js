let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById('user-score');
const computerScore_span=document.getElementById('computer-score');
const result_p=document.querySelector('.result>p');
const scoreBoard_div=document.querySelector('.score-board>p');
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');


function getComputerChoice(){
const choices=['r','p','s'];
const randomNumber=Math.floor(Math.random()*3);
return choices[randomNumber];
}

function convert(letter){
	if (letter==='r') return 'rock';
	if(letter==='p') return 'paper';
	if(letter ==='s') return 'scissors';
}

function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord='user' .fontsize(3).sub();
	const smallCompWord='comp' .fontsize(3).sub();
	result_p.innerHTML=`${convert(userChoice)}${smallUserWord}  beats  ${convert(computerChoice)}${smallCompWord} .`;

}

function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML=computerScore;
	const smallUserWord='user' .fontsize(3).sub();
	const smallCompWord='comp' .fontsize(3).sub();
	result_p.innerHTML=`${convert(userChoice)}${smallUserWord} loses to ${convert(computerChoice)}${smallCompWord} .`;
}

function draw(userChoice,computerChoice){
	const smallUserWord='user' .fontsize(3).sub();
	const smallCompWord='comp' .fontsize(3).sub();
	result_p.innerHTML=`${convert(userChoice)}${smallUserWord}  equals ${convert(computerChoice)}${smallCompWord} .`;
}

function game(userChoice){
	const computerChoice= getComputerChoice();
	switch(userChoice + computerChoice){
		case 'rs':
		case 'sp':
		case 'pr':
		win(userChoice,computerChoice);
		break;
		case 'rp':
		case 'ps':
		case 'sr':
		lose(userChoice,computerChoice);
		break;
		case 'rr':
		case 'ss':
		case 'pp':
		draw(userChoice,computerChoice);
		break;

	}

}
function main(){
	rock_div.addEventListener('click',function(){
game('r');
});

paper_div.addEventListener('click',function(){
game('p');
});

scissors_div.addEventListener('click',function(){
game('s');
});
}

main();

