function fibonacci(num) {
// your code here
	let a=-1,b=1,c,i=2,s=" ";
	// console.log(a,b);
	for(i=1;i<=num;i++){
		c=a+b;
		a=b;
		b=c;
		s+=c+","
	}
	return s;
}
// fibonacci(5);

module.exports = fibonacci;
