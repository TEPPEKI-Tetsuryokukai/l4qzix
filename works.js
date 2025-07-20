function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
window.onload = updateClock;

function openPopup(title, description, link) {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, -50%) scale(0.8)";

    // 情報を更新
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-description").textContent = description;
    const a = document.getElementById("popup-link");
    a.href = link;

    // アニメーションを強制発火させるためにリフローを挟む
    void popup.offsetWidth;

    // アニメーションスタイルを適用
    popup.style.transition = "transform 0.2s ease-out, opacity 0.2s ease-out";
    popup.style.transform = "translate(-50%, -50%) scale(1)";
    popup.style.opacity = "1";
}
