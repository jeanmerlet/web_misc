var euler1 = function(){

var sum = 0;
for (i = 3; i < 1000; i ++){
	if (!(i % 3) || !(i % 5)){
		sum += i;
	}
}
console.log(sum);

document.getElementById('answer1').innerHTML = sum;
}


var euler2 = function(){

var sum = 0;
var fibNum_1 = 1;
var fibNum = 2;
while (fibNum < 4000000){
	if (!(fibNum % 2)){
		sum += fibNum;
	}
	fibNum += fibNum_1;
	fibNum_1 = fibNum - fibNum_1;
}
console.log(sum);

document.getElementById('answer2').innerHTML = sum;
}


var euler3 = function(){

var number = document.getElementById("largestFactor").value;
var startTime = new Date();
var prime = 0;

var isInt = function(n){ return parseInt(n, 10) === n };

var isPrime = function(n){
	var start = Math.floor(Math.sqrt(n));
	for (j = start; j > 1; j --){
		if (isInt(n/j) && n/j > 1){
			return 0
		}
	}
	return 1
}

var findLargestPrimeFactor = function(n){
	var start = Math.floor(Math.sqrt(n));
	for (i = start; i >= 2; i --){
		if (isInt(n/i) && isPrime(i)){
			i = Math.max(i, n/i);
			displayPrimeFactor = "The largest prime factor of " + n + " is " + i + ".";
			return
		}
	}
	displayIsPrime = n + " is prime!";
	prime = 1;
}

if (number % 2){ findLargestPrimeFactor(number);
	if (!prime){ var answer3a = displayPrimeFactor;
	} else { var answer3a = displayIsPrime; }
} else { answer3a = number + " is even, so its largest prime factor is 2."; }


var endTime = (new Date() - startTime)/1000;
var displayEndTime = "That took " + endTime + " seconds.";

document.getElementById('answer3a').innerHTML = answer3a;
document.getElementById('answer3b').innerHTML = displayEndTime;
}
