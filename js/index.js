const songs = [
    new Audio('../sounds/Approach.mp3'),
    new Audio('../sounds/BadaPachtaoge.mp3'),
    new Audio('../sounds/BolKaffara.mp3'),
    new Audio('../sounds/ChaahatNaHoti.mp3'),
    new Audio('../sounds/ChandniRaatonMein.mp3'),
    new Audio('../sounds/ChottiSiUmarMe.mp3'),
    new Audio('../sounds/DilKareChuChe.m4a')
]

//Playing the song
let playBtn = document.querySelectorAll('.fa-play');
Array.from(playBtn).forEach((element, index) =>{
    element.addEventListener('click', (e) =>{
        songs[index].play();
    })
})

//Pausing the song
let pauseBtn = document.querySelectorAll('.fa-pause');
Array.from(pauseBtn).forEach((element, index) =>{
    element.addEventListener('click', (e)=>{
        songs[index].pause();
    })
})