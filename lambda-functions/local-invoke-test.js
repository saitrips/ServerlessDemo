'use strict'

module.exports.localtest = async (event, context) => {
    print('start')
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Success!'
        })
    }
}
