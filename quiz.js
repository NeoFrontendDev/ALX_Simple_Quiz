function checkAnswer(userAnswer) {
    const corretAnswer = "4";
    const selectedOption = document.querySelector('input{name="quiz"]:checked');

    if (userAnswer === correctAnswer) {
        console.log("Correct! Well done.");
    } else {
        console.log("That's incorrect. Try again!");
    }
}

document.getElementById("submit-answer").addEventListener('click', () => {
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    checkAnswer(userAnswer);
})
