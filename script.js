const btn = document.getElementById("fahBtn");
const sound = document.getElementById("fahSound");
const memeText = document.getElementById("memeText");

const memes = [
"When teacher says 'Surprise Test' 😭",
"When crush says 'You’re like a brother' 💀",
"When exam date announced suddenly 📚",
"When you send message to wrong person 😵",
"When WiFi disconnects during match ⚽",

    
];

btn.addEventListener("click", () => {

    // Play sound
    sound.currentTime = 0;
    sound.play();

    const random = Math.floor(Math.random() * memes.length);
    memeText.innerText = memes[random];


    document.body.classList.add("flash");
    document.body.classList.add("shake");

    setTimeout(()=>{
        document.body.classList.remove("flash");
        document.body.classList.remove("shake");
    },400);

});