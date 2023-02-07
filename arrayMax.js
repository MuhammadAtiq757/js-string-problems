function maxArray(number){
    let largest = number[0];
for(let i = 0; i<number.length; i++ ){
    const index = i;
    const element = number[index];
    if(element>largest){
        largest = element;
    }
}
return largest;

}

const height = [120, 343, 235, 654, 132, 100];
const tallest = maxArray(height);
console.log("the tallest is ", tallest);
