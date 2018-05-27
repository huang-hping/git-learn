var spawn = require('child_process').spawn,
    free  = spawn('git', ['add','*']);
console.log(process.argv)


gitCommit().then(data=>{
    console.log( 'git add success:' , data.toString())
}).catch(error=>{
    console.log('git add error: ', error.toString())
})

function gitCommit(){
    return execGit(`commit -am ${process.argv[2]}`)
}

function gitStatus(){
    return execGit('status')
}

function gitAdd(path = '*'){
    return execGit([1,23])
}

function execGit(args){
    return new Promise((resolve, reject)=>{
        args = args || ''
        if(args.split){
            args = args.split(/\s+/)
        }
        if(Object.prototype.toString.call(args) !== '[object Array]'){
            reject('execGit args is not Array')
            return
        }

        let childProcess = spawn('git', args)

        childProcess.stdout.on('data', data => {
            console.log(data.toString())
        })
        childProcess.stderr.on('data', data => {
            // console.log('error: ',data)
            reject(data)
        })
        childProcess.on('exit', data => {
            // 命令执行结束
            resolve("success")
        })

    })
}
