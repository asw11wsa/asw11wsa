const color_btn = document.querySelector('#dark');
const localColorDate = localStorage.getItem('color');

function dark(){
    document.body.style.backgroundColor = "black";
    document.querySelector(".header").style.borderBottom = "2px solid #000";
    localStorage.setItem('color','dark');
    color_btn.value = 'day';
}

function light() {
    document.body.style.backgroundColor = "#fff000";
    document.querySelector(".header").style.borderBottom = "2px solid #fff000";
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