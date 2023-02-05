let arr = [
    "Initialiing your account",
    "Connecting to bank...",
    "Connecting to account...",
    "Connection failed. Retrying...",
    "Connecting to account second time",
    "Connected Successfully...",
    "Username admin...",
    "Match found...",
    "Accessing Account...",
    "Account created Successful..."
]

const a = async (i,time) => {
setTimeout(()=>{
let text =document.getElementById("a")
let strs=`<h5> ${i} </h5>`
text.innerHTML = text.innerHTML + strs 
},time*3000)
}

const main1 = async ()=>{
for(i=0;i<arr.length;i++) {
await a(arr[i],i)
}
}

main1()
