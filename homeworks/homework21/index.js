function delay(value) {
    return new Promise((resolve, reject) => {
        if (typeof value !== 'number' || isNaN(value)) {
            reject('The argument is not a valid number');
        } else {
            let secondsLeft = 5;
            const interval = setInterval(() => {
                document.getElementById('timeDisplay').textContent = secondsLeft;
                secondsLeft--;
                if (secondsLeft === 0) {
                    resolve(value * 2);
                    clearInterval(interval);
                }
            }, 1000);
           
        }
    });
}

document.getElementById('startDelay').addEventListener('click', () => {
    const inputValue = parseFloat(document.getElementById('numberInput').value);
    delay(inputValue)
        .then(result => {
            alert('Resolved: ' + result);
        })
        .catch(error => {
            alert('Error: ' + error);
        });
});