//your JS code here. If required.
document.addEventListener('DOMContentLoaded',() => {
	let arr=[1,2,3,4];
	new Promise((resolve,reject)=>{
		setTimeout(() => {
            resolve(arr);
        },3000);
	})
	.then((numbers)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const evenNumbers = numbers.filter(number => number % 2 === 0);
                document.getElementById('output').textContent = `${evenNumbers.join(', ')}`;
                resolve(evenNumbers);
			},1000);
		})
	})
	.then((evenNumbers)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const multipliedNumbers = evenNumbers.map(number => number * 2);
                document.getElementById('output').textContent = `${multipliedNumbers.join(', ')}`;
                resolve(multipliedNumbers);
			},2000);
		})
	})
	.catch((error) => {
        document.getElementById('output').textContent = `Error: ${error}`;
    });

});