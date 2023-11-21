console.log("Hello");
let audioElement = new Audio('song/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');
// audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
let songIndex = 0;
let songs = [
    {songName: "Anti-Hero", filePath: "song/1.mp3", coverPath: "Images/1.jpg"},
    {songName: "Wildest Dreams", filePath: "song/2.mp3", coverPath: "Images/2.jpg"},
    {songName: "Shake It Up", filePath: "song/3.mp3", coverPath: "Images/3.jpg"},
    {songName: "Bad Blood", filePath: "song/4.mp3", coverPath: "Images/4.jpg"},
    {songName: "Blank Space", filePath: "song/5.mp3", coverPath: "Images/5.jpg"},
    {songName: "Love Story", filePath: "song/6.mp3", coverPath: "Images/6.jpg"},
    {songName: "Lavander Haze", filePath: "song/7.mp3", coverPath: "Images/7.jpg"},
    {songName: "Lover", filePath: "song/8.mp3", coverPath: "Images/8.jpg"},
    {songName: "Karma", filePath: "song/9.mp3", coverPath: "Images/9.jpg"},
    {songName: "Midnights", filePath: "song/10.mp3", coverPath: "Images/10.jpg"},
]
songItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName ("songName")[0].innerText = songs[i].songName;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((ele) =>{
//     ele.addEventListener()
// })
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        // changeBgColor();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;       
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9) {
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;       
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0) {
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;       
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})