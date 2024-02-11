document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField') as HTMLInputElement;
    const checkButton = document.getElementById('checkButton');
    const resultDiv = document.getElementById('result');

    if (checkButton && resultDiv) {
        checkButton.addEventListener('click', () => {
            const userInput = inputField.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
            const reversedInput = userInput.split('').reverse().join('');

            if (userInput === reversedInput) {
                resultDiv.innerText = `${userInput} is a palindrome!`;
            } else {
                resultDiv.innerText = `${userInput} is not a palindrome.`;
            }
        });
    }
});
