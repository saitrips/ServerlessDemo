'use strict'

module.exports.localtest = async (event, context) => {
   
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'this is invoked locally!'
        })
    }
}
