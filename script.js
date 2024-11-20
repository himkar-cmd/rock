
let buttons = document.querySelectorAll("button");
let userChoiceDisplay = document.getElementById("user-choice");
let computerChoiceDisplay = document.getElementById("computer-choice");
let winnerDisplay = document.getElementById("winner");

let choices = ["Rock", "Paper", "Scissors"];

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let userChoice = button.textContent;
        let computerChoice = getComputerChoice();
        let winner = determineWinner(userChoice, computerChoice);

        userChoiceDisplay.textContent = `You: ${userChoice}`;
        computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
        winnerDisplay.textContent = `Result: ${winner}`;
    });
});

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) return "It's a Tie!";
    if (
        (user === "🪨 Rock" && computer === "Scissors") ||
        (user === "📄 Paper" && computer === "Rock") ||
        (user === "✂️ Scissors" && computer === "Paper")
    ) {
        return "You Win!";
    }
    return "Computer Wins!";
}
