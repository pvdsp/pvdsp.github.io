/*
* Author: Thibault Hendrieckx
* Date:   February 15, 2018
* Github: https://github.com/ThibaultHendrieckx
*
* A list containing all the deadlines to be displayed
* You can add or remove elements from the list << var deadlines >>
* Every element is this list should be a `Deadline`-object.
*
* Example: var deadlines = [new Deadline("Foobar", "January 15, 2018 10:30:00")]
* This displays a single deadline "foobar" on the 15th of january at half past 10
 */

// A basic deadline object
function Deadline(title, date) {
    this.title = title;
    this.date = new Date(date);
}

// The data
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