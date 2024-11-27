function sumNumbers() {
    
    const input = document.getElementById("userInput").value;

    const numbers = input.match(/\d+\.?\d*/g);

    if (!numbers) {
        alert("未找到任何數字。");
        return;
    }

   
    const sum = numbers.reduce((total, num) => total + parseFloat(num), 0);

 
    alert("找到的數字: " + numbers.join(", ") + "\n數字總和為: " + sum);
}
