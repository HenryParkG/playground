const foods = [
    { name: "김치찌개", icon: "🥘" },
    { name: "된장찌개", icon: "🍲" },
    { name: "제육볶음", icon: "🥩" },
    { name: "돈까스", icon: "🍛" },
    { name: "짜장면", icon: "🍜" },
    { name: "짬뽕", icon: "🍜" },
    { name: "햄버거", icon: "🍔" },
    { name: "피자", icon: "🍕" },
    { name: "초밥", icon: "🍣" },
    { name: "치킨", icon: "🍗" },
    { name: "삼겹살", icon: "🥓" },
    { name: "떡볶이", icon: "🥘" },
    { name: "샌드위치", icon: "🥪" },
    { name: "파스타", icon: "🍝" },
    { name: "칼국수", icon: "🍜" },
    { name: "국밥", icon: "🍚" },
    { name: "비빔밥", icon: "🥣" },
    { name: "김밥/라면", icon: "🍜" },
    { name: "샐러드", icon: "🥗" },
    { name: "부대찌개", icon: "🥘" }
];

function recommendFood() {
    const display = document.getElementById('foodResult');

    // Quick random shuffle animation effect
    let count = 0;
    const maxCount = 20;
    const interval = setInterval(() => {
        const randomFood = foods[Math.floor(Math.random() * foods.length)];
        display.innerHTML = `
            <div>
                <span class="food-icon">${randomFood.icon}</span><br>
                ${randomFood.name}
            </div>
        `;
        count++;

        if (count >= maxCount) {
            clearInterval(interval);
            // Final pick
            const finalFood = foods[Math.floor(Math.random() * foods.length)];
            display.innerHTML = `
                <div style="animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                    <span class="food-icon">${finalFood.icon}</span><br>
                    ${finalFood.name}
                </div>
            `;
        }
    }, 50);
}
