const http = require('http')
const server = http.createServer((req, res) => {
console.log("revolkatest")
res.end("Hello Revolka")

})
const PORT = process.env.PORT || 8080
server.listen(PORT, () =>  console.log('Listening'))

// node server.js 
//接続テストはcloud sheelでプレビューを押してください

// docker build --network=host -t cicdtest .
// docker run -it -p 8080:8080 cicdtest
