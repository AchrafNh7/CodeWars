// This time no story, no theory. The examples below show you how to write 
// function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"



//solution


const accum = s => s.split('')
                    .map((str,n) => str.toUpperCase() + str.repeat(n).toLowerCase())
                    .join('-')
    