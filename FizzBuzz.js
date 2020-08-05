//define the upper and lower bounds
const theStartingNumber = 1;
const theEndingNumber = 1000000;
let performedOnce = false;

function isPrime(num) {
	if (num <= 1) return false; // we exclude negatives for the purposes of this project
	if (num % 2 == 0 && num > 2) return false; // test for even numbers
	let s = Math.sqrt(num); // store the square to loop faster

	// begin at 3, stop at the square
	for (let i = 3; i <= s; i++) {
		if (num % i === 0) return false; // modulo shows a divisor was found
	}
	return true;
}

window.addEventListener('DOMContentLoaded', (event) => {

	let select = document.querySelector("#display-number");

	function takeOff(val = theStartingNumber) {
		performedOnce = true;

			//fizz
			if (val % 3 == 0 && val % 5 !== 0) {
				//three is prime
				if (val === 3) {
					select.style.color = '#8D18A1';
				} else {
					select.style.color = 'yellow';
				}
				select.innerHTML = "FIZZ!";
			}
			//buzz
			else if (val % 3 !== 0 && val % 5 == 0) {
				//five is prime
				if (val === 5) {
					select.style.color = '#8D18A1';
				} else {
					select.style.color = 'limegreen';
				}
				select.innerHTML = "BUZZ!";
			}
			//fizz buzz
			else if (val % 3 == 0 && val % 5 == 0) {
				select.style.color = 'red';
				select.innerHTML = "FIZZ BUZZ!";
			}
			//neither
			else {
				//CHECK FOR PRIMES!
				if (isPrime(val)) {
					select.style.color = '#8D18A1'
					select.innerHTML = val;
				} else {
					select.style.color = 'black';
					select.innerHTML = val;
				}
			}

			if(isPrime(val)) console.log(val); //printing primes to the console for fun

			val += 1; //increment

			//does number exceed our maximum
			if (val > theEndingNumber) {
				select.style.color = 'blue';
				select.innerHTML = 'DONE!';
			} else {
				setTimeout(takeOff, 500, val);	//speed is controlled here!
			}

	} //end takeOff()

	document.getElementById("the-only-button").addEventListener("click", () => {
		if(!performedOnce) takeOff();
		else console.warn('Ignoring button press to avoid collision! :)');
	});

	const message = 'Welcome to my FIZZ BUZZ Project!\n'+
					'Click the Launch! button to take it for a spin.\n\n'+
					'Numbers that are divisible by 3 will Fizz!\n'+
					'Numbers that are divisible by 5 will Buzz!\n'+
					'Additionally if the number is prime it will display purple because prime numbers are awesome!\n\n'+
					'Thanks for reading and have fun!';

	document.getElementById("project-notes").addEventListener("click", () => window.alert(message));

}); //end DOM eventListener