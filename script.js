const countdown = (count, callback) => {
    if (count === 0) {
        callback("Happy Independence Day");
    } else {
        setTimeout(() => {
            document.getElementById('countdown').textContent = count;
            countdown(count - 1, callback);
        }, 1000);
    }
};

countdown(10, (message) => {
    document.getElementById('message').textContent = message;
    document.getElementById('message').style.display = 'block';
    document.getElementById('countdown').style.display = 'none';
});