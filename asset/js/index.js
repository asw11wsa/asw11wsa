(
    function () {
        const dark_btn = document.querySelector(".dark");
        const light_btn = document.querySelector(".light");
        const main_box = document.querySelector(".main_box");
        const left_box = document.querySelector(".left_box");
        const right_box = document.querySelector(".right_box");
        const header_box = document.querySelector(".header");
        const footer_box = document.querySelector(".footer");

        console.log(dark_btn);
        console.log(light_btn);

        function change_color_dark() {
            document.body.style.backgroundColor = "black";
            document.querySelector(".header").style.borderBottom = "2px solid black";
        }

    function change_color_light() {
            document.body.style.backgroundColor = "#fff000";
            document.querySelector(".header").style.borderBottom = "2px solid #fff000";
    }

            dark_btn.addEventListener('click',change_color_dark);
            light_btn.addEventListener('click',change_color_light);
})();