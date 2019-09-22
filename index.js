const express = require('express');
const app = express();
const requestPromise =  require('request-promise');
const request = require('request')

const apiKey = '2d77b5f0-0191-4412-aa48-5aeb10680010';
const joobleAPiUrl = `http://pl.jooble.org/api/${apiKey}`;

var params = "{ keywords: 'it', location: 'Warszawa'}"

console.log(joobleAPiUrl)

var options ={
    method: "POST",
    uri: joobleAPiUrl,
    body: params
}

requestPromise(options)
    .then(response => {
        console.log(response)
    })
    .catch(error=> {
        //eval(require('locus'))
        console.log(`######Error occured#######`)
        console.log(Object.keys(error))
        console.log(error.statusCode)
        console.log(error)
    })

