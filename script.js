const button = document.getElementById('movingButton');
const counter = document.getElementById('counter');
const buttonWidth = 100;  // 按鈕寬度
const buttonHeight = 100; // 按鈕高度
const width = window.innerWidth - buttonWidth;  // 減去按鈕寬度
const height = window.innerHeight - buttonHeight; // 減去按鈕高度

let clickCount = 0;
let colorIndex = 0;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 設定初始位置在畫面中央
let x = width / 2;
let y = height / 2;
button.style.transform = `translate(${x}px, ${y}px)`;

// 新增點擊事件處理函數
button.addEventListener('click', () => {
    // 更新計數器
    clickCount++;
    counter.textContent = `已點擊 ${clickCount} 次`;
    
    // 產生隨機新位置（確保在可視範圍內）
    x = Math.max(0, Math.min(width, Math.random() * width));
    y = Math.max(0, Math.min(height, Math.random() * height));
    button.style.transform = `translate(${x}px, ${y}px)`;
});

let isHovered = false;
let normalSpeed = 1000; // 正常速度（毫秒）
let hoverSpeed = 100;   // 懸停時的速度（毫秒）

// 新增滑鼠事件監聽
button.addEventListener('mouseenter', () => {
    isHovered = true;
});

button.addEventListener('mouseleave', () => {
    isHovered = false;
});

// 修改顏色變換函數
function changeColor() {
    button.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    
    // 根據是否懸停來決定下次更新的延遲時間
    setTimeout(changeColor, isHovered ? hoverSpeed : normalSpeed);
}

// 開始顏色變換
changeColor();