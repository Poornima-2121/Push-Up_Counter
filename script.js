let countEle = document.getElementById("count-show");
let prevCountEle = document.getElementById("prev-cnt")
let count=0

function increment(){
    count+=1
    countEle.textContent=count
}
function reset(){
    let prevCnt = count+" - "
    prevCountEle.textContent+=prevCnt
    count=0
    countEle.textContent=count
}
