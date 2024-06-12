document.addEventListener('DOMContentLoaded', () => {
    let arr = [1, 2, 3, 4];

    // Initial promise that resolves after 3 seconds
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    })
    .then((numbers) => {
        // Filter out odd numbers and print the result after 1 second
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = numbers.filter(number => number % 2 === 0);
                document.getElementById('output').textContent = evenNumbers;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Multiply all even numbers by 2 and print the result after 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(number => number * 2);
                document.getElementById('output').textContent = multipliedNumbers;
                resolve(multipliedNumbers);
            }, 2000);
        });
    })
    .catch((error) => {
        document.getElementById('output').textContent = `Error: ${error}`;
    });
});
