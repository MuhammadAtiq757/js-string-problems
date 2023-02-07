// power

// const result = Math.pow(3, 8);
// console.log(result);



const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1-num2)
console.log(gap);
if(gap<5){
    console.log("you guys can be fiends");
}

else{
    console.log("you guys can not be friends");
}




// math rounded
const number = 4.525;
const fullNumber = Math.round(number);
console.log(fullNumber)


// math Ceil

const numbers = 5.2213;
const result = Math.ceil(numbers);
console.log(result);

// math floor

const mark = 7.999;
const result2 = Math.floor(mark);
console.log(result2);


// math random
// const random = Math.random()*5;
const random =Math.round(Math.random()*5);

console.log(random);


// random in for loop

for( let i = 0; i<20; i++){
    const random =Math.round(Math.random()*6);
    console.log(random);
}