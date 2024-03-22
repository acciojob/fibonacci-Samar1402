function fibonacci(num) {
// your code here
	let a=0,b=1,c,i=2;
	console.log(a,b);
	for(i=2;i<=num;i++){
		c=a+b;
		a=b;
		b=c;
		console.log(c);
	}
}

module.exports = fibonacci;
