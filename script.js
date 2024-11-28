function sumNumbers() {
    const input = document.getElementById("userInput").value;

    const numbers = input.match(/\d+\.?\d*/g);

    if (!numbers) {
        alert("未找到任何數字。");
        return;
    }

    const ignoreSingleDigits = document.getElementById("ignoreSingleDigits").checked;

    const filteredNumbers = numbers.filter(num => {
        const parsedNum = parseFloat(num);
        return !(ignoreSingleDigits && parsedNum >= 1 && parsedNum < 10);
    });

    if (filteredNumbers.length === 0) {
        alert("未找到符合條件的數字。");
        return;
    }

    const sum = filteredNumbers.reduce((total, num) => total + parseFloat(num), 0);

    alert("找到的數字: " + filteredNumbers.join(", ") + "\n數字總和為: " + sum);
}