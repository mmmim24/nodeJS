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

getText(path)
    .then(result=>console.log(result))
    .catch((err)=>console.log(err))