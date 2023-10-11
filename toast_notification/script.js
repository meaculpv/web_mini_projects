const toasts = document.getElementById('toasts');
const button = document.getElementById('button');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
];

button.addEventListener('click', () => createNotification());

function createNotification() {
    const toast = document.createElement('div');
    toast.className = "toast";
    toast.textContent = getRandomMessage();
    toasts.appendChild(toast);
    setTimeout(() => toast.remove(), 1500)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}