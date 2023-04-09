const {readFile,writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const path = './content/first.txt'
const path2 = './content/second.txt'


const start = async()=>{
    try {
        const first = await readFilePromise(path,'utf8');
        const second = await readFilePromise(path2,'utf8');
        await writeFilePromise(
            './content/result-mind-grenade.txt',
            `This is cool: ${first} + ${second}`
        )
        console.log(first,second);
    } catch (error) {
        console.log(error);
        return;
    }
}

start()
// const getText = (x)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(x,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }