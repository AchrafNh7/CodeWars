// Clock shows h hours, m minutes and s seconds after midnight.Your task is to 
// write a function which returns the time since midnight in milliseconds.


//My solution


function past(h, m, s){
    let hour = h * 3600000
    let min = m * 60000
    let sec = s * 1000
    return hour + min + sec
}