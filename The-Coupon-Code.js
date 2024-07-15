// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is 
// valid and not expired.
// A coupon is no more valid on the day AFTER the expiration date. All dates 
// will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


//solution

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let date1 = new Date(currentDate)
    let date2 = new Date(expirationDate)
    console.log(enteredCode,correctCode,currentDate,expirationDate)
    return enteredCode === correctCode && date1.getTime() <= date2.getTime()
}