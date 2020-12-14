const color_btn = document.querySelector('#dark');
const localColorDate = localStorage.getItem('color');

function dark(){
    document.body.style.backgroundColor = "#303232";
    document.querySelector(".header").style.borderBottom = "2px solid #303232";
    localStorage.setItem('color','dark');
    color_btn.value = 'day';
}

function light() {
    document.body.style.backgroundColor = "#9AB7B8";
    document.querySelector(".header").style.borderBottom = "2px solid #9AB7B8";
    localStorage.setItem('color','day');
    color_btn.value = 'dark';
}

function nightDayHandler() {
    if(color_btn.value === 'dark'){
        dark();
    }else{
        light();
    }
}
function init() {
    if(localColorDate === 'dark'){
        dark();
    }else{
        light();
    }
}

init();