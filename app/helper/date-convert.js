function correctDate(params){
    var date = ""
    params < 10? date  = "0" + params : date = params
    return date
}

function timeStampToRealDate(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
    var day = weekDays[a.getDay()] 
    var year = a.getFullYear();
    var month = months[a.getMonth()];

    var date = correctDate(a.getDate());
    var hour = correctDate(a.getHours());
    var min = correctDate(a.getMinutes());
    var sec = correctDate(a.getSeconds());

    var ENTimeFormat = `${day}, ${date} ${month} ${year} ${hour}:${min}:${sec}`
    return ENTimeFormat;
}


const expiredBooking = (jam) => {
    const date = new Date()
    const timeStamp = date.getTime()

    const timestampExpDate = timeStamp + (1000 * 60 * 60 * jam)        // (1000 * detik * menit *)
    const realExpDate = timeStampToRealDate(timestampExpDate)

    return realExpDate
}

module.exports = {
    expiredBooking
}