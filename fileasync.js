const {readFile,writeFile, write} = require('fs')

readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log('error\n',err)
    }
    else{
        const f = result
        writeFile('./content/result-async.txt',`result is ${f}`,(e,res)=>{
                if(e){
                    console.log(e);
                    return;
                }
                else {
                    console.log(res);
                }
            }
        )
    }
})
console.log('write done')

