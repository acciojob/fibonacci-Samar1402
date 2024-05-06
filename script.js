function fibonacci(num) {
// your code here
	let a=-1,b=1,c,i=2;
	// console.log(a,b);
	for(i=1;i<=num;i++){
		c=a+b;
		a=b;
		b=c;
	}
	return c;
}
// fibonacci(5);

module.exports = fibonacci;
