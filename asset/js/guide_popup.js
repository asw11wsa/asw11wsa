$(document).ready(function () {
    $('#close_01').click(function () {
        setCookie("showCookies01", "A", 1);
        $('#popup_01').hide();
    });

    $('#close_02').click(function () {
        setCookie("showCookies02", "B", 1);
        $('#popup_02').hide();
    }) ;

    $('#close_03').click(function () {
        setCookie("showCookies03", "C", 1);
        $('#popup_03').hide();
    }) ;

    $('#close_04').click(function () {
        setCookie("showCookies04", "D", 1);
        $('#popup_04').hide();
    }) ;

    $('#close_05').click(function () {
        setCookie("showCookies05", "E", 1);
        $('#popup_05').hide();
    }) ;

    $('#close_06').click(function () {
        setCookie("showCookies06", "F", 1);
        $('#popup_06').hide();
    }) ;

    $('#close_07').click(function () {
        setCookie("showCookies07", "G", 1);
        $('#popup_07').hide();
    }) ;

    $('#close_08').click(function () {
        setCookie("showCookies08", "H", 1);
        $('#popup_08').hide();
    }) ;

    $('#close_09').click(function () {
        setCookie("showCookies09", "I", 1);
        $('#popup_09').hide();
    }) ;

    $('#close_10').click(function () {
        setCookie("showCookies10", "J", 1);
        $('#popup_10').hide();
    }) ;

    $('#close_11').click(function () {
        setCookie("showCookies11", "K", 1);
        $('#popup_11').hide();
    }) ;

    $('#close_12').click(function () {
        setCookie("showCookies12", "L", 1);
        $('#popup_12').hide();
    }) ;

    $('#close_13').click(function () {
        setCookie("showCookies13", "M", 1);
        $('#popup_13').hide();
    }) ;



    if(getCookie("showCookies01") != "A") {
        $("#popup_01").show();
    }

    if(getCookie("showCookies02") != "B") {
        $("#popup_02").show();
    }

    if(getCookie("showCookies03") != "C") {
        $("#popup_03").show();
    }

    if(getCookie("showCookies04") != "D") {
        $("#popup_04").show();
    }

    if(getCookie("showCookies05") != "E") {
        $("#popup_05").show();
    }

    if(getCookie("showCookies06") != "F") {
        $("#popup_06").show();
    }

    if(getCookie("showCookies07") != "G") {
        $("#popup_07").show();
    }

    if(getCookie("showCookies08") != "H") {
        $("#popup_08").show();
    }

    if(getCookie("showCookies09") != "I") {
        $("#popup_09").show();
    }

    if(getCookie("showCookies10") != "J") {
        $("#popup_10").show();
    }

    if(getCookie("showCookies11") != "K") {
        $("#popup_11").show();
    }

    if(getCookie("showCookies12") != "L") {
        $("#popup_12").show();
    }

    if(getCookie("showCookies13") != "M") {
        $("#popup_13").show();
    }

    function setCookie(cname, cvalue, exdays) {
        var cookie_date = new Date();
        cookie_date.setTime(cookie_date.getTime() + (exdays * 60 * 60 * 24 * 365 * 100 * 1000));
        var expires = "expires=" + cookie_date.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + '; Path=/;';
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
});