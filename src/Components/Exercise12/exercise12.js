const moment = require('moment');

// 1. ¿Cuántos días tuvo el mes de febrero del año 1998?
const firstQuestion = () => moment('02-1998', 'MM-YYYY').daysInMonth();

console.log(firstQuestion());

// 2. ¿Cuántos días tuvo el mes de febrero del año 1998?
const secondQuestion = () => moment('2018-01-13', 'YYYY-MM-DD').format('dddd');

console.log(secondQuestion());

// 3. En base a la siguiente lista, regresa una lista de fechas que correspondan al día actual.
// a.	2020-08-14
// b.	2019-08-11
// c.	2020-08-11
// d.	2020-06-19
// e.	2018-10-08
// f.	2020-05-11
// g.	2020-08-11
// h.	2020-08-12

const datesArray = [
    "2020-08-14",
    "2019-08-11",
    "2020-08-11",
    "2020-06-19",
    "2018-10-08",
    "2020-05-11",
    "2020-08-11",
    "2020-08-12"
];

const thirdQuestion = dates => {
    return dates.filter(date => moment('2020-08-11', "YYYY-MM-DD").isSame(date, "YYYY-MM-DD"));    
    // return dates.map(date => moment(date, "YYYY-MM-DD")).filter(date => moment('2020-08-11', "YYYY-MM-DD").isSame(date, "YYYY-MM-DD"));
};

console.log(thirdQuestion(datesArray));

// 4. De la siguiente lista de fechas, regresa aquellas que sean menores a la fecha de hoy

const forthQuestion = dates => {
    return dates.filter(date => moment(date, "YYYY-MM-DD").isBefore('2020-08-11', 'YYYY-MM-DD'));
}

console.log(forthQuestion(datesArray));

// 5. De la siguiente lista de fechas, regresa aquellas que sean mayores a la fecha de hoy

const fifthQuestion = dates => {
    return dates.filter(date => moment(date, "YYYY-MM-DD").isAfter('2020-08-11', 'YYYY-MM-DD'));
}

console.log(fifthQuestion(datesArray));

// 6. De la siguiente lista de fechas, regresa aquellas en las que su año sea bisiesto
// a.	2020-11-14
// b.	2018-10-20
// c.	2020-09-11
// d.	2017-08-19
// e.	2020-04-15
// f.	2015-08-11
// g.	1999-05-17
// h.	1998-02-23

const otherDatesArray = [
    "2020-11-14",
    "2018-10-20",
    "2020-09-11",
    "2017-08-19",
    "2020-04-15",
    "2015-08-11",
    "1999-05-17",
    "1998-02-23"
];

const sixthQuestion = dates => dates.filter(date => moment(date).isLeapYear());

console.log(sixthQuestion(otherDatesArray));

// Reto: De la siguiente lista de fechas, regresa aquellas que correspondan a la siguiente semana. 
// i.	2020-08-14
// j.	2020-08-20
// k.	2020-08-11
// l.	2020-08-19
// m.	2020-08-15
// n.	2020-08-11
// o.	2020-08-17
// p.	2020-08-23

const challengeArray = [
    "2020-08-14",
    "2020-08-20",
    "2020-08-11",
    "2020-08-19",
    "2020-08-15",
    "2020-08-11",
    "2020-08-17",
    "2020-08-23"
];

const challenge = (dates, day) => {
    const nextWeek = moment(day, 'YYYY-MM-DD').add(7, 'days');
    return dates.filter(date => moment(date).isBetween(
        moment(nextWeek).startOf('week'),
        moment(nextWeek).endOf('week')
    ))
};

console.log(challenge(challengeArray, '2020-08-11'));