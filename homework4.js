// the code below is for TriangleStars 
const Astgher = function(numAstgher){
	if(numAstgher === 0) {
		return '';
	}
	return '*' + Astgher(numAstgher-1);
}; 
const taracq = function(numtaracq){
	if (numtaracq === 0){ 	
		return;
	}
	return ' ' + taracq(numtaracq-1);
};
const sos = function(sp, st){
  if(st <= 0){
   return;
  }
  console.log(taracq(sp ) + Astgher(st) );
  return sos(sp+1, st-2);
}
const triangleStars = function(z){
	sos(0, 2*z-1);
};	
  
triangleStars(4);


//here is another code for pow 

const pow = function(base, n){
  if(n === 0){
    return 1; 
  }
  return (base * pow(base, n-1));
};
const result = pow(3, 4);
console.log(result);


// find the reverse code below 

const reverse = function(str){
console.log(str[str.length-1]);	
	if(str.length === 1){
		return '';
    }
reverse(str.substring(0, str.length-1))
};
reverse('abcd');

// the final code 

const checkerboard = function(num, star, space){
	if(num === 0){
		return '';
	}
	return star + space + checkerboard(num-2, star, space)
};

const board = function(num, length){
	if(num === 0) {
		return;
	}
	else{
		console.log(checkerboard(length, '*', ' '));
		console.log(checkerboard(length, ' ', '*'));
	}
	return board(num-4, length);
};

board(8, 8);

const result = checkerboard(8, '*', ' ');
console.log(result);
