//carSpeed - function that detects speed of a car
// speed ;the car speed in kn/hr
//outputs; returns points depending on the speed exceeded

function carSpeed (speed){
    if (speed< 70){
        return 'OK'
    }
    else if (speed > 70 &&(speed-70)% 5==0 && (speed-70)/5 <=12){
        let points =(speed-70/5)
        return `points: `+ points
    }
    else if ( (speed-70)/5> 12){
        return `licence suspend`
    }
}