const btn = document.getElementById("fahBtn");
const sound = document.getElementById("fahSound");
const memeText = document.getElementById("memeText");

const memes = [
"When teacher says 'Surprise Test' 😭",
"When crush says 'You’re like a brother' 💀",
"When exam date announced suddenly 📚",
"When you send message to wrong person 😵",
"When WiFi disconnects during match ⚽",
"When you study Chapter 5 but exam comes from Chapter 2 😭",
"When teacher says “Open your book” but you didn’t bring it ",
"When you confidently say the wrong answer in class 🤡",
"When your alarm rings but it’s Sunday morning 😤",
"When teacher says “This will not come in exam”… and it comes 📝"
    
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