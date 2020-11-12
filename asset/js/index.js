(
    function () {
        const dark_btn = document.querySelector(".dark");
        const light_btn = document.querySelector(".light");
        const header = document.querySelector(".header");
        const nav = document.querySelector(".nav");
        const left_side = document.querySelector(".left_side");
        const main = document.querySelector(".main");
        const footer = document.querySelector(".footer");

        const color_dark = "#888888";
        const color_light = "#ffffff"
        console.log(footer);

        function change_color_dark() {
            document.body.style.backgroundColor = "black";
            header.style.borderBottom = "2px solid #000";
            header.style.backgroundColor = color_dark;
            nav.style.backgroundColor = color_dark;
            left_side.style.backgroundColor = color_dark;
            main.style.backgroundColor = color_dark;
            footer.style.backgroundColor = color_dark;
            self.value = 'day';
        }

    function change_color_light() {
            document.body.style.backgroundColor = "#fff000";
            header.style.borderBottom = "2px solid #fff000";
            header.style.backgroundColor = color_light;
            nav.style.backgroundColor = color_light;
            left_side.style.backgroundColor = color_light;
            main.style.backgroundColor = color_light;
            footer.style.backgroundColor = color_light;
    }

            dark_btn.addEventListener('click',change_color_dark);
            light_btn.addEventListener('click',change_color_light);
})();