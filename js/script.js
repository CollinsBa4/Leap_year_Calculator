let LEAP = () => {
    let year = parseInt(document.getElementById('year').value)

    //check if year is in range
    if (year < 1 && year > 9999) {
        document.getElementById('output').value = `Year out of range`
    }
    //year divisble by 4  or 100 or 400
    else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        document.getElementById('output').value = ` ${year} is a leap year`
    } else {
        document.getElementById('output').value = `Your BMI is ${year}, so you are extremely obese.`
    }

}
let CLR = () => {
    document.getElementById('year').value = ``
    document.getElementById('output').value = ``
}