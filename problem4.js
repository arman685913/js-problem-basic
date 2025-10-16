
/*function signature/sample */

function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || Array.isArray(obj)) {
        return  "Invalid Input";
    } else {
        if(obj.testScore <= 50 && obj.schoolGrade <= 30) {
        let total = obj.testScore + obj.schoolGrade;
        if(obj.isFFamily === true)
        {
            total = total + 20;
        }
    //-----------------//
        if(total >= 80){
            return true;
        } else {
            return false;
        };
        } else {
            return false;
        }
    }
}


const info = { name: "Rajib", testScore: 750,  schoolGrade: 25, isFFamily : true }
const admission = calculateFinalScore(info);
console.log(admission);