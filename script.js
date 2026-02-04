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
    "오래된 친구에게 연락이 올 수 있습니다. 반갑게 맞아주세요."
];

function checkSaju() {
    const dateInput = document.getElementById('birthdate').value;
    if (!dateInput) {
        alert('생년월일을 입력해주세요.');
        return;
    }

    // Simple randomization based on date string to give consistent result for same day/input
    const today = new Date().toDateString();
    const seed = dateInput + today;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const index = Math.abs(hash) % fortunes.length;
    const resultText = document.getElementById('sajuText');
    const resultContainer = document.getElementById('sajuResult');
    
    resultText.textContent = fortunes[index];
    resultContainer.classList.add('show');
}
