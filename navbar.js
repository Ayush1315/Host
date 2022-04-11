var main_Side=0;
var side_nav = 1;
var top_nav = 0;
var search_nav=0;
document.getElementById('nav-down').style.height = "0%";
document.getElementById('down-nav-list').style.display = "none";
function slideNav() {
    if (side_nav == 0) {
        document.getElementById('nav-side').style.width = "25rem";
        document.getElementById('side-nav-list').style.display = "flex";
        side_nav = 1;
    }
    else {
        document.getElementById('nav-side').style.width = "0";
        document.getElementById('side-nav-list').style.display = "none";
        side_nav = 0;
    }
}
function downNav() {
    if (top_nav == 0) {
        document.getElementById('nav-down').style.height = "85%";
        document.getElementById('down-nav-list').style.display = "flex";
        top_nav = 1;
    }
}
function closeNav() {
    if (top_nav == 1) {
        document.getElementById('nav-down').style.height = "0%";
        document.getElementById('down-nav-list').style.display = "none";
        top_nav = 0;
    }
}
function showSearch(){
    if(search_nav==0)
    {
    document.getElementById('search-page').style.width="25rem";
    search_nav=1;
}
else{
    search_nav=0;
    hideSearch();
}
}
function hideSearch(){
    document.getElementById('search-page').style.width="0";
}
// Responsive Page
function mainSide() {
    if (main_Side == 0 && screen.width>=280 && screen.width<=480) {
        document.getElementById('side').style.width = "100vw";
        document.getElementById('side-list').style.display = "block";
        main_Side = 1;
    }
    else if(screen.width>=280 && screen.width<=480) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        main_Side = 0;
    }
    else if (main_Side == 0 && screen.width>=481 && screen.width<=1024) {
        document.getElementById('side').style.width = "35vw";
        document.getElementById('side-list').style.display = "block";
        document.getElementById('page-cont').style.width = "65vw";
        main_Side = 1;
    }
    else if(screen.width>=481 && screen.width<=1024) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        document.getElementById('page-cont').style.width = "100vw";
        main_Side = 0;
    }
    else if (main_Side == 0 && screen.width>=1025) {
        document.getElementById('side').style.width = "15vw";
        document.getElementById('side-list').style.display = "block";
        main_Side = 1;
    }
    else if(screen.width>=1025) {
        document.getElementById('side').style.width = "0";
        document.getElementById('side-list').style.display = "none";
        main_Side = 0;
    }

}
