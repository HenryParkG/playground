function generateLotto() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    displayLotto(sortedNumbers);
}

function displayLotto(numbers) {
    const container = document.getElementById('lottoResult');
    container.innerHTML = '';

    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.className = `ball ${getBallColorClass(num)}`;
        ball.textContent = num;
        ball.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(ball);
    });
}

function getBallColorClass(num) {
    if (num <= 10) return 'n1-10';
    if (num <= 20) return 'n11-20';
    if (num <= 30) return 'n21-30';
    if (num <= 40) return 'n31-40';
    return 'n41-45';
}
