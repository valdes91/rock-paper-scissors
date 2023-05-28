function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function checkGameOver() {
	let didSomeoneWin = computerScore === 5 || playerScore === 5;
	const resultParagraph = document.querySelector('.result');

	if (didSomeoneWin) {
		resultParagraph.textContent =
			playerScore === 5 ? 'You WON! CONGRATULATIONS.' : 'The Computer Won :(';
		computerScore = 0;
		playerScore = 0;
	}
}

function updateDisplays(playerChoice, computerChoice, result) {
	const playerDisplay = document.querySelector('.player-choice');
	const computerDisplay = document.querySelector('.computer-choice');
	const resultDisplay = document.querySelector('.result');

	playerDisplay.textContent = `ok! you chose ${playerChoice}`;
	computerDisplay.textContent = `the computer chose ${computerChoice}`;
	resultDisplay.textContent = result;

	const playerWinsParagraph = document.querySelector('.player-wins');
	const computerWinsParagraph = document.querySelector('.computer-wins');
	playerWinsParagraph.textContent = `Player Wins: ${playerScore}`;
	computerWinsParagraph.textContent = `Computer Wins: ${computerScore}`;

	checkGameOver();
}

function playRound(playerChoice) {
	const playerChoiceLower = playerChoice.toLowerCase();
	const computerChoice = getComputerChoice();

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

	if (result.includes('lose')) computerScore++;
	else if (result.includes('win')) playerScore++;

	updateDisplays(playerChoiceLower, computerChoice, result);
}

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const choiceButtons = document.querySelectorAll('button');
choiceButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		playRound(e.target.value);
	});
});
