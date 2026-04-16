
const gradeCardCalculator = require('./validator');

const calculateaverage = (marks) => {
    const average = totalmarks / 5 ;

    if (average > 90 && avg< 100) 
        console.log(" GradeA");
    if(average >80 && avg< 89) 
        console.log("Grade B");
    if (average>70 && avg<79)
        console.log("Grade C");
    if(average>60 && avg<69)
        console.log("Grade D");
    if(average<=0 && avg<59)
        console.log("Grade F");
};
const score=document.getElementById(score);
console.log(score);
const getTrend= (trend) =>{
    const mid = Math.floor(score.length/2);
    const firsthalf=score.slice(0,mid);
    const secondhalf=score.slice(mid);
    if(average(secondhalf)>average(firsthalf))
        return trend = 'improving';
    else if(average(secondhalf)< average(firsthalf))
        return trend ='declining';
    else
        return trend ='Stable';
};
module.exports = calculateGrade ;
module.exports = getTrend;