let LEAP = () => {
    let year = parseInt(document.getElementById('year').value);
    // //year divisble by 4  or 100 or 400
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        document.getElementById('output').value = `${year}  is a leap year`;
    } else if ((year < 1) && (year > 9999)) {
        document.getElementById('output').value = ` ${year} not in range`;
    } else {
        document.getElementById('output').value = `${year} 
        is not a leap year`;
    }
}
let CLR = () => {
    document.getElementById('year').value = ``
    document.getElementById('output').value = ``
}