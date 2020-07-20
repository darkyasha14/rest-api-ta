require('dotenv').config()

const getDomainName = async (req) => {
    var result = ""

    if(req.headers["x-forwarded-host"]){                                                                                                        // server
        result = await req.headers['x-forwarded-proto'] + '://' + req.headers["x-forwarded-host"].split(',')[0]
    }else{                                                                                                                                      // local
        result = await req.protocol + '://' + req.headers.host
    }

    return result
}

const getFullDomainURL = async (req) => {
    var result = ""

    if(req.headers["x-forwarded-host"]){                                                                                                        // server
        result = await req.headers['x-forwarded-proto'] + '://' + req.headers["x-forwarded-host"].split(',')[0] + process.env.PROJECT_PATH
    }else{                                                                                                                                      // local
        result = await req.protocol + '://' + req.headers.host + process.env.PROJECT_PATH
    }

    return result
}

module.exports = {
    getDomainName,
    getFullDomainURL
}