var originUrl = '/api/books';
//目标服务器接受 /book.json

function replace(src) {
    return src.replace(/\/api\/(.*)/, '/\$1\.json')
}

console.log(replace(originUrl))