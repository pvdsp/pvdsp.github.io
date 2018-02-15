var now = new Date();
var dl_OO = new Date("November 28, 2016 00:00:00");
var dl_Cs = new Date("January 9, 2017 00:00:00");
var dl_Algo2_1 = new Date("February 12, 2017 08:00:00");
var dl_Scp2_2 = new Date("December 16, 2016 16:00:00");
var dl_pp_d1 = new Date("January 17, 2017 00:00:00");
var dl_pp_d2 = new Date("May 30, 2017 00:00:00");
var dl_pp_tv = new Date("March 28, 2017 00:00:00");
var dl_OO_scala = new Date("January 10, 2017 00:00:00");
var dl_Scp2_snake = new Date("January 16, 2017 16:00:00");
var dl_Algo2_2 = new Date("June 9, 2017 23:59:00");

function postData(deadline, id) {
    if (now < deadline) {
        document.getElementById(id).innerHTML = countdown(null, deadline);
    } else {
        document.getElementById(id).innerHTML = "Deadline passed"
    }
};

setInterval(function() {
    postData(dl_Cs, "deadline-cs");
    postData(dl_Algo2_1, "deadline-algo-taak1");
    postData(dl_Scp2_2, "deadline-scp2-t2");
    postData(dl_pp_d1, "deadline-pp-d1");
    postData(dl_pp_d2, "deadline-pp-d2");
    postData(dl_pp_tv, "deadline-pp-tv");
    postData(dl_OO_scala, "deadline-OO-scala");
    postData(dl_Scp2_snake, "deadline-scp2-snake");
    postData(dl_Algo2_2, "deadline-algo-taak2");
}, 1000);