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
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-description").textContent = description;
    const a = document.getElementById("popup-link");
    a.href = link;

    popup.style.display = "block";
    popup.classList.remove("hide-animation"); // 再表示用に削除
    popup.classList.add("popup-window"); // アニメーション再適用
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
