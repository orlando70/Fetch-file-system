const fetch = require('node-fetch')
const http = require('http')
const fs = require('fs')


const url = 'https://jsonplaceholder.typicode.com/posts'

let fetchJson = async(urlPath) => {
    //fetch data from the source URL
    let response = await fetch(urlPath);
    let data = await response.json();
    return data;
};

fetchJson(url).then(data => {
    let stringedData = JSON.stringify(data, null, 2);
    return stringedData;
}).then(data => {
    fs.writeFile('result/post.json', data, (err) => {
        if (err) throw err;
    })
})
    
