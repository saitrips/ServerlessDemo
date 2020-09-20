'use strict'

module.exports.helloTest = async (event, context) => {
    let body = {};
    if (event.body) {
        body = JSON.parse(event.body)
    }

    const name = body.name || 'world'

    return {
        statusCode: 200,
        body: `Hello, ${name}`,
    };
};