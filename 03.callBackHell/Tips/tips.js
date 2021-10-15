let sumTips1; //Sum of the first round of tips
let sumTips2; //Sum of the second round of tips

undefined
let entryTime;//time of entry(HH:MM format)
undefined
let exitTime;//time of exit(HH:MM format)
undefined

//Converts hours in (HH:MM format) to sum of minutes
function hourToMinutes(time){
    time = time.split(":");
    let hours = parseInt(time[0]) * 60;
    let minutes = parseInt(time[1]);
    return(hours+minutes);
  };

//subtrucion of minutes from entry time and exit time (HH:MM format) 
function shiftMinutes(entryTime, exitTime){
    let shiftInMinutes = hourToMinutes(exitTime) - hourToMinutes(entryTime);
    return(shiftInMinutes);
};

//
