const lyrics = "tumi bonshu kala pakhi ami jeno ki, bosonto kale tumai bolte parini, sada sada kala kala rong jomeche sada kala";


const searchString = "pakhi"
// const doesExist = lyrics.includes("pakhi");
// console.log(doesExist);

// const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
// console.log(doesExist);



// index of
console.log(lyrics.indexOf("kala"));


if(lyrics.indexOf("sadaa") !==-1){
    console.log("exists inside the string");
}

else{
    console.log("cannot find it");
}


// startsWith 
console.log(lyrics.startsWith("tumi"));

// endsWith
const fileName ="data.pdf";
const otherFile = "pic.png";
 const file =fileName.endsWith(".pdf");
 console.log(file);

