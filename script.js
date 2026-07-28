/* ==========================================
      TYPEWRITER EFFECT
========================================== */

const typingText = document.getElementById("typingText");

const message =
"Today is not just another day... 💙 It's the birthday of the most amazing bestie! Thank you for being my safe place, my happiness, and my favorite person. 🌸✨";

let index = 0;

function typeWriter(){

    if(index < message.length){

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }

}

window.onload = function(){

    typeWriter();

}

/* ==========================================
      ELEMENTS
========================================== */

const welcome = document.getElementById("welcome");

const story = document.getElementById("story");

const popup = document.getElementById("popup");

const memorySection = document.getElementById("memorySection");

const startBtn = document.getElementById("startBtn");

const seeBtn = document.getElementById("seeBtn");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const memoryBtn = document.getElementById("memoryBtn");

const myPhoto = document.getElementById("myPhoto");

const caption = document.querySelector(".caption");

/* ==========================================
      START SURPRISE
========================================== */

startBtn.onclick = function(){

    welcome.classList.add("hidden");

    story.classList.remove("hidden");

}

/* ==========================================
      POPUP
========================================== */

seeBtn.onclick = function(){

    popup.classList.remove("hidden");

}

/* ==========================================
      YES BUTTON
========================================== */

yesBtn.onclick = function(){

    popup.classList.add("hidden");

    popup.style.display = "none";

    welcome.classList.add("hidden");

    story.classList.add("hidden");

    memorySection.classList.remove("hidden");

    window.scrollTo({
        top: memorySection.offsetTop,
        behavior: "smooth"
    });

}

/* ==========================================
      NO BUTTON
========================================== */

noBtn.onclick = function(){

    alert("baby its jus formality u have to see it anyway hehehe💙");

    popup.classList.add("hidden");

    welcome.classList.add("hidden");

    story.classList.add("hidden");

    memorySection.classList.remove("hidden");

    window.scrollTo({
        top: memorySection.offsetTop,
        behavior: "smooth"
    });

}

/* ==========================================
      SHOW MEMORY
========================================== */

memoryBtn.onclick = function(){

    myPhoto.style.display="block";

    caption.style.display="block";

    myPhoto.style.animation="fadePhoto 1s";

}

/* ==========================================
      PHOTO ANIMATION
========================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fadePhoto{

0%{

opacity:0;

transform:scale(.5);

}

100%{

opacity:1;

transform:scale(1);

}

}

`;

document.head.appendChild(style);
/* ==========================================
      CHAPTER ELEMENTS
========================================== */

const letterSection = document.getElementById("letterSection");

const questionSection = document.getElementById("questionSection");

const messageSection = document.getElementById("messageSection");

const finalSection = document.getElementById("finalSection");

const openLetterBtn = document.getElementById("openLetterBtn");

const letter = document.getElementById("letter");

const questionBtn = document.getElementById("questionBtn");

const questionBox = document.getElementById("questionBox");

const finalBtn = document.getElementById("finalBtn");

const restartBtn = document.getElementById("restartBtn");

/* ==========================================
      OPEN LETTER
========================================== */

openLetterBtn.onclick = function(){

    letter.classList.remove("hidden");

    openLetterBtn.innerHTML = "Letter Opened 💙";

    setTimeout(function(){

        letterSection.classList.add("hidden");

        questionSection.classList.remove("hidden");

    },6000);

}

/* ==========================================
      SHOW QUESTION
========================================== */

questionBtn.onclick = function(){

    questionBox.classList.remove("hidden");

}

/* ==========================================
      BOTH ANSWERS ARE CORRECT 😂
========================================== */

const options = document.querySelectorAll(".option");

options.forEach(function(btn){

    btn.onclick = function(){

        alert("😂 Correct!! Of course it's YOU!");

        questionSection.classList.add("hidden");

        messageSection.classList.remove("hidden");

    }

});

/* ==========================================
      FINAL SURPRISE
========================================== */

finalBtn.onclick = function(){

    messageSection.classList.add("hidden");

    finalSection.classList.remove("hidden");

}

/* ==========================================
      RESTART WEBSITE
========================================== */

restartBtn.onclick = function(){

    location.reload();

}
/* ==========================================
      FLOATING HEARTS
========================================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💙";

    heart.style.left = Math.random()*100 + "vw";

    document.getElementById("heartContainer").appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },7000);

}

setInterval(createHeart,900);

/* ==========================================
      FALLING FLOWERS
========================================== */

function createFlower(){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = "🌸";

    flower.style.left = Math.random()*100 + "vw";

    document.getElementById("flowerContainer").appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },10000);

}

setInterval(createFlower,1500);

/* ==========================================
      SPARKLES
========================================== */

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random()*100 + "vw";
    sparkle.style.top = Math.random()*100 + "vh";

    document.getElementById("sparkleContainer").appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },4000);

}

setInterval(createSparkle,1200);

/* ==========================================
      CONFETTI
========================================== */

function createConfetti(){

    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = Math.random()*100 + "vw";

    const colors=[
        "#4FC3F7",
        "#87CEEB",
        "#1E3A8A",
        "#F5F5DC",
        "#FFFFFF"
    ];

    confetti.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    document.getElementById("confettiContainer").appendChild(confetti);

    setTimeout(()=>{
        confetti.remove();
    },5000);

}

/* ==========================================
      BALLOONS
========================================== */

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.innerHTML="🎈";

    balloon.style.left=Math.random()*100+"vw";

    document.getElementById("balloonContainer").appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },12000);

}

/* ==========================================
      FIREWORKS
========================================== */

function createFirework(){

    const fire=document.createElement("div");

    fire.className="firework";

    fire.style.left=Math.random()*100+"vw";

    fire.style.top=Math.random()*70+"vh";

    document.getElementById("fireworkContainer").appendChild(fire);

    setTimeout(()=>{
        fire.remove();
    },1200);

}

/* ==========================================
      FINAL SURPRISE EFFECTS
========================================== */

finalBtn.addEventListener("click",function(){

    for(let i=0;i<120;i++){

        setTimeout(createConfetti,i*40);

    }

    for(let i=0;i<18;i++){

        setTimeout(createBalloon,i*350);

    }

    for(let i=0;i<40;i++){

        setTimeout(createFirework,i*250);

    }

});

/* ==========================================
      SHINCHAN MESSAGE
========================================== */

const shinchan=document.querySelector(".shinchan");

shinchan.addEventListener("click",function(){

    alert("👦 Shinchan says...\n\nHappy Birthday Bestie!! 💙🎂");

});

/* ==========================================
      END
========================================== */
