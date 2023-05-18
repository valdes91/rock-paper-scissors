function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
	const playerChoiceLower = playerChoice.toLowerCase();
	const computerChoice = getComputerChoice();

	const playerDisplay = document.querySelector('.player-choice');
	const computerDisplay = document.querySelector('.computer-choice');

	playerDisplay.textContent = `yaha! you chose ${playerChoiceLower}`;
	computerDisplay.textContent = `the computer chose ${computerChoice}`;

	let result = '';
	if (computerChoice === playerChoiceLower) result = 'its a tie!';
	else if (playerChoiceLower === 'rock') {
		if (computerChoice === 'paper') result = 'paper beats rock. you lose this round :(';
		else if (computerChoice === 'scissors') result = 'rock beats scissors. you win this round :)';
	} else if (playerChoiceLower === 'paper') {
		if (computerChoice === 'rock') result = 'paper beats rock, you win this round :)';
		else if (computerChoice === 'scissors') result = 'scissors beats paper. you lose this round :(';
	} else if (playerChoiceLower === 'scissors') {
		if (computerChoice === 'rock') result = 'rock beats scissors. you lose this round :(';
		else if (computerChoice === 'paper') result = 'scissors beats paper. you win this round :)';
	}
	console.log(result);
	// return result;
}

function game() {
	let playerWins = 0;
	let computerWins = 0;

	// plays 5 rounds of rock paper scissors
	// for (let i = 0; i < 5; i++) {
	// 	const player = prompt("Enter 'rock', 'paper', or 'scissors");
	// 	const result = playRound(computer, player);
	// 	if (result.includes('win')) playerWins++;
	// 	else if (result.includes('lose')) computerWins++;
	// 	console.log(result);
	// }

	// let winner = '';
	// if (playerWins === computerWins) winner = 'Overall tie!';
	// else if (playerWins < computerWins) winner = 'Computer wins!';
	// else winner = 'YOU WON!!!';

	// return winner;
}

const choices = ['rock', 'paper', 'scissors'];
const choiceButtons = document.querySelectorAll('button');
choiceButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playRound(e.target.value);
	});
});
//console.log(game());
