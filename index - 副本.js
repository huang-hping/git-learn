var spawn = require('child_process').spawn,
    free  = spawn('git', ['add','*']);
console.log(process.argv)
// 捕获标准输出并将其打印到控制台
free.stdout.on('data', function (data) {
    console.log('标准输出：\n' + data);
});
dfsdfd
// 捕获标准错误输  dfssdf出并将其打印到控制台
free.stderr.on('data', function (data) {
    console.log('标准错误输出：\n' + data);
});

// 注册子进程关闭事件
free.on('exit', function (code, signal) {
    console.log('子进程已退出，代码：' + code);
});


let gitAdd = (path = '*') => {
    return new Promise((resolve, reject)=>{
        let process = spawn('git', ['add', path])
        process.stdout.on('data', data => {})
        process.stdout.on('data', data => {})
        process.stdout.on('data', data => {})
        process.stdout.on('data', data => {})

    })
}