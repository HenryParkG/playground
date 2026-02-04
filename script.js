// Lotto Logic
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

// Saju Logic (Simplified Mock)
const fortunes = [
    "오늘은 생각지도 못한 행운이 찾아올 수 있습니다. 주변을 잘 살펴보세요!",
    "작은 노력이 큰 결실을 맺는 하루입니다. 꾸준함이 정답입니다.",
    "잠시 휴식이 필요한 시기일 수 있습니다. 건강을 먼저 챙기세요.",
    "새로운 인연이 생길 수 있는 날입니다. 열린 마음을 가져보세요.",
    "중요한 결정을 내리기 좋은 날입니다. 직관을 믿으세요.",
    "금전운이 상승하는 기운이 보입니다. 지출보다는 저축이 좋습니다.",
    "오래된 친구에게 연락이 올 수 있습니다. 반갑게 맞아주세요.",
    "솔직한 대화가 오해를 풀 수 있는 열쇠가 됩니다.",
    "예상치 못한 곳에서 기쁜 소식이 들려올 것입니다.",
    "오늘은 과감한 도전이 좋은 결과를 가져올 수 있습니다."
];

function checkSaju() {
    const dateInput = document.getElementById('birthdate').value;
    if (!dateInput) {
        alert('생년월일을 입력해주세요.');
        return;
    }

    // Purely random logic per click as requested
    const index = Math.floor(Math.random() * fortunes.length);
    const resultText = document.getElementById('sajuText');
    const resultContainer = document.getElementById('sajuResult');

    // Reset animation if already shown to give feedback of new result
    resultContainer.classList.remove('show');
    resultContainer.classList.add('fade-out'); // Optional textual hint, but class switching is better
    void resultContainer.offsetWidth; // Trigger reflow for animation restart

    resultText.textContent = fortunes[index];
    resultContainer.classList.remove('fade-out');
    resultContainer.classList.add('show');
}
