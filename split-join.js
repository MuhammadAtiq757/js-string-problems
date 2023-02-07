const lyrics = "tumi bondhu kala pakhi. ami jeno ki, bosonto kale tumai bolte parini. sada sada kala kala rong jomeche sada kala.";

// const parts = lyrics.split(" ");
// const sentence = lyrics.split(".");
// const charc = lyrics.split("")

const partial = lyrics.slice(5, 10);
console.log(partial);

const partial2 = lyrics.slice(5, 11);
console.log(partial2);


// to join string value in sentence
const lines =[
    "tumi bondhu kala pakhi",
    "ami jeno ki",
    "bosonto kale tumai bolte parini",
    "sada sada kala kala",
    "rong jomeche sada kala."
]

const newSong = lines.join(". ");
console.log(newSong);