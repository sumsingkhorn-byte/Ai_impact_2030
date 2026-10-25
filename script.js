// script.js
// Simple script demonstrating interaction with the page

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('actionBtn');
    const output = document.getElementById('output');

    btn.addEventListener('click', () => {
        const now = new Date();
        output.textContent = `คุณคลิกที่ปุ่มเมื่อ: ${now.toLocaleTimeString()}`;
        btn.disabled = true;
        // Re‑enable after 2 seconds as a demo
        setTimeout(() => {
            btn.disabled = false;
        }, 2000);
    });
});
