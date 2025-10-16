function waitingTime(waitingTimes  , serialNumber){
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    } else {
        let sum = 0;
        for(const leavesTime of waitingTimes){
            sum = sum + leavesTime;
        }
        let avg = sum / waitingTimes.length;
        let average = Math.round(avg);
        //-----------------------------//

        let yetToViva = (serialNumber-1) - waitingTimes.length;
        let needingTime = yetToViva * average;
        return needingTime;
    }
}
const Time = waitingTime([ 3, 5, 7, 11, 6 ], 10);
console.log(Time);