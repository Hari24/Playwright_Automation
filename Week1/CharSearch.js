let inputStr="Canada"
let srchChar = "a"
let count=0
for (let i=0;i<=inputStr.length;i++){
    if (inputStr[i]==srchChar) {
        count++
        
    }
    
}
console.log("Character "+srchChar+" occured "+count+" times in the string "+inputStr)
