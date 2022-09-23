import http from 'http'; //package.json에 모듈설정 꼭 해줄것 
import fs from 'fs';

http.createServer(function (request, response) {
  const data = fs.readFileSync('./index.html');
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.write(data);
  response.end();
}).listen(1857, function () { // "어디서 문서를 읍답할 것인지 포트(입구번호)를 설정" 포트번호 겹치면 안됨★
  console.log('서버가 작동하고 있습니다.')
})