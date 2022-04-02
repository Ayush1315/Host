var previous=document.getElementById("prev");
var play_Song=document.getElementById("play-pause");
var next=document.getElementById("next");
var Title=document.getElementById("Title");
var recent_volume=document.getElementById("volume_seeker");
var volume_value=document.getElementById("volume_value");
var seeker=document.getElementById("seeker");
var track_image=document.getElementById("Poster");
var auto_play=document.getElementById("auto_play");
var artist=document.getElementById("Artist");
var now_playing=document.getElementById("current_track");
var songs_list=document.getElementById("total_song");
var volume=document.getElementById("volume");
var start_min=document.getElementById("start-min");
var start_sec=document.getElementById("start-sec");
var dur_min=document.getElementById("dur-min");
var dur_sec=document.getElementById("dur-sec");

let timer;
let Autoplay=0;
let index=0;
let playing_song=false;
let ini_vol=recent_volume.value/100;
var duration_count;
const track=document.createElement("audio");
seeker.value=0;
// All Songs List Here
let songs=[
    {
        name:"Prasthanam",
        path:"Audio/Musics/music1.mp3",
        img:"Audio/Posters/music1.jpg",
        singer:"Dev Negi",
    },
    {
        name:"Kar har Maidan Fateh",
        path:"Audio/Musics/music2.mp3",
        img:"Audio/Posters/music2.jpg",
        singer:"Shreya Ghoshal & Sukhwinder Singh",
    },
    {
        name:"Kabhi Tumhe",
        path:"Audio/Musics/music3.mp3",
        img:"Audio/Posters/music3.jpg",
        singer:"Darshan Raval",
    },
    {
        name:"Lut Gaye",
        path:"Audio/Musics/music4.mp3",
        img:"Audio/Posters/music4.jpg",
        singer:"Jubin Nautiyal",
    },
    {
        name:"Hero's Come Back",
        path:"Audio/Musics/music5.mp3",
        img:"Audio/Posters/music5.jpg",
        singer:"Nobody Knows",
    }
];

//All Functions
// Function to load Tracks
function load_track(index){
    clearInterval(timer);
    track.src=songs[index].path;
    Title.innerHTML=songs[index].name;
    artist.innerHTML=songs[index].singer;
    track_image.src=songs[index].img;
    console.log(track);

    track.load();
   timer=setInterval(range_slider,1000);
   setInterval(dur,1000);
   total_dur();
   now_playing.innerHTML=index+1;
   songs_list.innerHTML=songs.length;
}
load_track(index);
//Loads track duration
track.addEventListener('loadedmetadata',()=>{
     duration_count=track.duration;
     total_dur();
},false);
// console.log(duration_count);
function play()
{
    if(playing_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}

//Play Songs
function playsong(){
    track.play();
    playing_song=true;
    play_Song.innerHTML='<i class="fa-solid fa-pause"></i>';
}
//Pause Songs
function pausesong()
{
    track.pause();
    playing_song=false;
    play_Song.innerHTML='<i class="fa-solid fa-play"></i>';
}
//Next Songs
function next_song(){
    if(index<songs.length-1){
        index+=1;
        load_track(index);
        playsong();
    }
    else{
        index=0;
        load_track(index);
        playsong();
    }
}
//Previous Song
function previous_song(){
    if(index>0)
    {
        index-=1;
        load_track(index);
        playsong();
    }
    else{
        index=songs.length-1;
        load_track(index);
        playsong();
    }
}
//Change VolumeValue
function volume_change(){
    volume_value.innerHTML=recent_volume.value;
    track.volume=recent_volume.value/100;
    volume.innerHTML='<i class="fa-solid fa-volume-high"></i>';
    ini_vol=track.volume;
}
//Change Duration
function change_duration(){
    
    track.currentTime=(seeker.value*track.duration)/100;
}
//Change slider position
function range_slider(){
    let position=0;
    if(! isNaN (track.duration))
    {
        position=(track.currentTime/track.duration)*100;
        seeker.value=position;
    }
    if(track.ended){
        play_Song.innerHTML='<i class="fa-solid fa-play"></i>';
    
    if(Autoplay==1)
    {
        next_song();
    }
}
}
//Reset Song Seeker
function reset_slider(){
    seeker.value=0;
   
}
// Autoplay Button
function autoplay(){
    if(Autoplay==1){
        Autoplay=0;
        auto_play.style.backgroundColor="grey";
    }
    else{
        Autoplay=1;
        auto_play.style.backgroundColor="Red";
    }
}
//Mute Songs
function mute_sound(){
    if(track.volume!=0){
    track.volume=0;
    volume_value.innerHTML=0;
    recent_volume.value=0;
    volume.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';
    }
    else
    {
        track.volume=ini_vol;
        volume_value.innerHTML=ini_vol*100;
        recent_volume.value=ini_vol*100;
        volume.innerHTML='<i class="fa-solid fa-volume-high"></i>';
    }
}
//Duration timer
function dur(){
    let min=parseInt((track.currentTime/60));
    let sec=Math.round(track.currentTime%60)
    if(sec<10)
    sec="0"+sec;
    start_min.innerHTML=min;
    start_sec.innerHTML=sec;
    
}
//Total Suration of the track
function total_dur(){
    let min=parseInt((duration_count/60));
    let sec=Math.round(duration_count%60);
    if(sec<10)
    sec="0"+sec;
    dur_min.innerHTML=min;
    dur_sec.innerHTML=sec;  
}