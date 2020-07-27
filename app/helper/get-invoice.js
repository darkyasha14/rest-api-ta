const correctDate = (params) => {
    var date = ""
    params < 10? date = "0" + params : date = params
    return date
}

const correctMili = (mili) => {
    if (mili < 10) return "0" + mili
    else if ( mili < 100) return mili
    else return mili.toString().substring(mili.toString().length - 2, mili.toString().length)
}

const getInvoice = () => {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var milisecond = date.getMilliseconds()

    year = year.toString()
    month = correctDate(month)
    day = correctDate(day)
    milisecond = correctMili(milisecond)

    var invoiceNum = month + day + milisecond
    return invoiceNum
}

module.exports = {getInvoice}