let companyName1 = "Testleaf@2025"
let compName = new String("Test Leaf")
let str1 = "Amazon big million Sales"
let str2 = "Amazon big million Sales"


console.log("No of Characters:  "+companyName1.length)
console.log("Character at 10th place: "+companyName1.charAt(10))
console.log("First occurance of char e: "+companyName1.indexOf("e"))
console.log("Next occurance of char e: "+companyName1.lastIndexOf("e"))

console.log(str1.split(" "))
let outputStr1=str2.split(" ")
for (let i=0;i<outputStr1.length;i++){
    console.log(outputStr1[i])
}

let inputStr="Chrome"
let outputStr=""
for (i=inputStr.length-1;i>=0;i--){
    outputStr=outputStr+inputStr.charAt(i)
}
console.log(outputStr)

let m="playwright"
let n=m.split("").reverse().join("")
console.log(n)

console.log('5'===5)
console.log('5'==5)