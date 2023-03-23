function notification(text, timeout = 2000) {
    let div = document.createElement('div');
    div.className = "notifier";
    div.innerHTML = `<span>${text}</span>`;

    document.body.prepend(div);

    setTimeout(() => div.remove(), timeout);
}

export default notification;