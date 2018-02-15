// Loading and compiling the template
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);

// A basic deadline object
function Deadline(title, date) {
    this.title = title;
    this.date = new Date(date);
}

// A list containing all the deadlines, add deadlines here
var deadlines = [
    new Deadline("Computersystemen: Project", "January 9, 2017 00:00:00"),
    new Deadline("Algoritmen & Datastructuren II: Taak 1\t", "February 12, 2017 08:00:00"),
    new Deadline("SCP2: Taak 2", "December 16, 2016 16:00:00"),
    new Deadline("Programmeerproject: Deel 1", "January 17, 2017 00:00:00"),
    new Deadline("Programmeerproject: Deel 2\t", "May 30, 2017 00:00:00"),
    new Deadline("Programmeerproject: Verslag", "March 28, 2017 00:00:00"),
    new Deadline("Object Oriented: Project Scala", "January 10, 2017 00:00:00"),
    new Deadline("SCP2: Snake", "January 16, 2017 16:00:00"),
    new Deadline("Algoritmen & Datastructuren II: Taak 2", "June 9, 2017 23:59:00")
];

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