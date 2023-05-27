console.log("Welcome to Spotify");

// Initializing variables
let songIndex = 0;
let audioElement = new Audio('Ew.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName:"Ew", filePath:"Ew.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"},
    {songName:"Modus", filePath:"songs/Modus.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"},
    {songName:"Tick Tock", filePath:"songs/Tick Tock.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"},
    {songName:"Daylight", filePath:"songs/Daylight.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"},
    {songName:"Upgrade", filePath:"songs/Upgrade.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"},
    {songName:"Gimme Love", filePath:"songs/Gimme Love.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"},
    {songName:"Run", filePath:"songs/Run.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"},
    {songName:"Santuary", filePath:"songs/Santuary.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"},
    {songName:"Pretty Boy(feat.Lil Yachty)", filePath:"songs/Pretty Boy.mp3",coverPath:"joji-nectar-cover-itemlist.jpg"}, 
]

songItems.forEach((element, i)=>{ 
    console.log(element,i);
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');;
        playing.style.opacity = 1;
        
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        playing.style.opacity = 0;

    }

})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
//Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeallPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{   
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');


})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    console.log(e.target);
    makeallPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs${index+1}.mp3`; 
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


    console.log(e)
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
})