function prime(num){
	for(let i=2; i<num; i++){
		if(num%i==0){
			count++;
		}
	}
	if(count>=2){
		console.log("not prime");
	}
	else{
		console.log("prime");
	}
}
