#!/usr/bin/env node
 
// var express = require('express');
var path = process.cwd();
var program = require('commander');
 
// program
//     .version('0.1.0')
//     .option('-p, --peppers', 'Add peppers')
//     .option('-P, --pineapple', 'Add pineapple')
//     .option('-b, --bbq-sauce', 'Add bbq sauce')
//     .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//     .parse(process.argv)

// console.log(process.argv)

// function run(argv) {
//     console.log(argv)
//     if (argv[0] === '-v' || argv[0] === '--version') {
//         console.log('version is 1.0.0');
//     }
//     else if (argv[0] === '-h' || argv[0] === '--help') {
//         console.log('usage:\n');
//         console.log('-v --version [show version]')
//     }
//     else if (argv[0] === '-s' || argv[0] === '--start') {
//         console.log('express')
//         // var app = new express();
//         // app.use('/static', express.static(path));
//         // app.listen(8085, function () {
//         //     console.log('server start at port 8085');
//         // });
//     }
// }
// program.on('--help', function(){
//     console.log('')
//     console.log('Examples:');
//     console.log('  $ custom-help --help');
//     console.log('  $ custom-help -h');
//   }); 
// // run(process.argv.slice(2));

// program.parse(process.argv);

const fs = require('fs');

function readSyncByfs(tips) {
    let response;

    tips = tips || '> ';
    process.stdout.write(tips);
    process.stdin.pause();
    response = fs.readSync(process.stdin.fd, 1000, 0, 'utf8');
    process.stdin.end();
    return response[0].trim();
}

console.log(readSyncByfs('请输入任意字符：'));
console.log('stuff');

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese)