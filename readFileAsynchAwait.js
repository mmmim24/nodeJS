const {readFile} = require('fs');
const { result } = require('lodash');
const path = './content/first.txt'

const getText = (x)=>{
    return new Promise((resolve,reject)=>{
        readFile(x,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

const start = async()=>{
    try {
        const first = await getText(path);
        console.log(first);
    } catch (error) {
        console.log(error);
        return;
    }
}

start()