var muc=document.getElementById('playing');
var click=document.getElementById('play-pause');
var count=0;
function play(){
    if(count==0){
        count=1;
        muc.play();
        click.textContent="Pause";
    }
    else{
       count=0;
       muc.pause();
       click.textContent="Play" ;
    }
};