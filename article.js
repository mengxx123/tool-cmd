// https://www.jianshu.com/p/081ff613ccb2

const superagent = require('superagent')
const cheerio = require('cheerio')
import requestProxy from 'superagent-proxy'
import userAgents from './util/userAgent'

requestProxy(superagent)

async function download() {
    let url = 'https://www.jianshu.com/p/081ff613ccb2'
    let userAgent = userAgents[parseInt(Math.random() * userAgents.length)]

    try {
        superagent.get(url)
        .set({
            'User-Agent': userAgent,
            'Referer': 'https://www.jianshu.com/',
            'Host': 'www.jianshu.com'
        })
        .end(function (err, sres) {
            if (err) {
                console.log(err)
                return
            }
            var $ = cheerio.load(sres.text)
            let $article = $('.post .article')
            let html = $article.html()
            console.log($article.html())
        })
    } catch (e) {
        console.log(e)
    }
}

// async function download() {
//     let url = 'https://mp.weixin.qq.com/s/LLbClJ62fbP57Rf5WDJptg'
//     try {
//         superagent.get(url)
//         .set({
//             'Accept-Encoding': 'br'
//             // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36',
//             // 'Referer': 'https://www.jianshu.com/',
//             // 'Host': 'www.jianshu.com'
//         })
//         .end(function (err, sres) {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             // console.log(sres.text)
//             var $ = cheerio.load(sres.text)
//             let $article = $('.rich_media_content')
//             console.log($article.html())
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }

download()
