//Global. variables don't have to equal anything, at least beside the origin. Later equlaed to something in the function.
   var ap;

//1. creating a function to hold variable data for military clock and year data
function  militaryclock() {

//2.timestamp has to be in the local function because when the function is called in the set interval
//the function has to know the current time each rep
    var timestamp = new Date();
//3. 2 functions, pulling in a variable and then a object. getting hours from the time stamp, adding a zero when its less than 12 and changing to when above 12.
//also added a global variable so that it equals AM or PM when called in each if or else.
    var h = addZero(standardTime(timestamp.getHours()));
    var m = addZero(timestamp.getMinutes());
    var s = addZero(timestamp.getSeconds());
    var tz = (timestamp.getTimezoneOffset());

//4. had to move the month array over 1 because it begins at 0. Sept equaled Aug without it.
    var month = addZero(timestamp.getMonth()+1);
    var d = addZero(timestamp.getDate());
    var y = addZero(timestamp.getFullYear());

    



    document.getElementById("demo").innerHTML = h + ":" + m + ":" + s + " " + ap + " EST";

//5. added this so these variables would be moved to a different location in the HTML
    document.getElementById("extra").innerHTML = month + "/" + d + "/" + y;
}



function addZero(n){
    if (n < 10) {
        n = "0" + n;
    }
    return n;
}

function standardTime(h){
    if (h > 0 && h <= 12){
        ap  = "AM"
        return h;
    }
    else if (h > 12){
        ap = "PM"
        return h - 12;
    }

}



 




//setting the interval I want my function for standard clock to run at, every second. (This is seen by javascript before it runs the function)
var  countDownInterval = setInterval(militaryclock, 1000);





