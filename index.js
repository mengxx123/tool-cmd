// 图片批量下载工具
const https = require('https')
const superagent = require('superagent')
const fs = require('fs')
const request = require('request')
const path = require('path')

// 希望下载的图片地址
let urls = [
    'https://www.baidu.com/img/bd_logo1.png?where=super',
    'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png'
]

function getUrl() {
    return urls
}

function getFileName(url) {
    url = url.split('?')[0]
    let arr = url.split('/')
    return arr[arr.length - 1]
}

function getExt(fileName) {
    let arr = fileName.split('.')
    return arr[arr.length - 1]
}

function mkdirSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
    return false
}

async function download() {
    let urls = getUrl()
    for (let url of urls) {
        console.log('下载', url)
        let fileName = getFileName(url)
        request(url).pipe(fs.createWriteStream(`download/${fileName}`)) 
    }
    console.log('下载完成')
}

download()
