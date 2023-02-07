function reverseWord(str){
    const words = str.split(' ');
    const result = [];
    for(let i = myString.length-1; i>=0; i--){
        const element =words[i];
        result.push(element);
    }
     const reversed =result.join(' ');
 console.log(reversed);
}

const myString = 'i am a good boy';
reverseWord(myString);