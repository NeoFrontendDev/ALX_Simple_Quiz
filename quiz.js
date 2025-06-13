function checkAnswer(userAnswer) {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked')
    
    if (userAnswer === correctAnswer) {
        console.log("Correct! Well done.");
    } else {
        console.log("That's incorrect. Try again!");
    }
}

document.getElementById("submit-answer");
