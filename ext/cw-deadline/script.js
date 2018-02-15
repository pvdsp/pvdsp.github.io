/*
* Author: Thibault Hendrieckx
* Date:   February 15, 2018
* Github: https://github.com/ThibaultHendrieckx
 */

// Loading and compiling the template
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

// The countdown update callback
function postData(deadline) {
    if (new Date() < deadline.date) {
        document.getElementById(safeId(deadline.title)).innerHTML = countdown(null, deadline.date);
    } else {
        document.getElementById(safeId(deadline.title)).innerHTML = "Deadline passed"
    }
}

// Initialising the page
function init() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < deadlines.length; i++) {
        var deadline = deadlines[i];
        var date = deadline.date;
        document.getElementById("deadlines").innerHTML += template({
            title: deadline.title,
            date: monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
        });
    }
    setInterval(function () {
        deadlines.forEach(function (deadline) {
            postData(deadline)
        })
    }, 1000)
}

init();