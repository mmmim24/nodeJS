const {readFile,writeFile} = require('fs').promises;
const path = './content/first.txt'
const path2 = './content/second.txt'


const start = async()=>{
    try {
        const first = await readFile(path,'utf8');
        const second = await readFile(path2,'utf8');
        await writeFile(
            './content/result-mind-grenade.txt',
            `This is cool: ${first} + ${second}`
            //{flag:'a'}
        )
        console.log(first,second);
    } catch (error) {
        console.log(error);
        return;
    }
}

start()