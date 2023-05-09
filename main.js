const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerChoice, playerChoice) {
	const playerChoiceLower = playerChoice.toLowerCase();

	let result = '';
	if (computerChoice === playerChoiceLower) result = 'its a tie!';
	else if (playerChoiceLower === 'rock') {
		if (computerChoice === 'paper') result = 'paper beats rock. you lose :(';
		else if (computerChoice === 'scissors') result = 'rock beats scissors. you win :)';
	} else if (playerChoiceLower === 'paper') {
		if (computerChoice === 'rock') result = 'paper beats rock, you win :)';
		else if (computerChoice === 'scissors') result = 'scissors beats paper. you lose :(';
	} else if (playerChoiceLower === 'scissors') {
		if (computerChoice === 'rock') result = 'rock beats scissors. you lose :(';
		else if (computerChoice === 'paper') result = 'scissors beats paper. you win :)';
	} else result = 'pick a valid option next time :/';
	return result;
}

function game() {
	let playerWins = 0;
	let computerWins = 0;

	for (let i = 0; i < 5; i++) {
		const computer = getComputerChoice();
		const player = prompt("Enter 'rock', 'paper', or 'scissors");
		const result = playRound(computer, player);
		if (result.includes('win')) playerWins++;
		else if (result.includes('lose')) computerWins++;
		console.log(result);
	}

	let winner = '';
	if (playerWins === computerWins) winner = 'Overall tie!';
	else if (playerWins < computerWins) winner = 'Computer wins!';
	else winner = 'YOU WON!!!';

	return winner;
}

console.log(game());
