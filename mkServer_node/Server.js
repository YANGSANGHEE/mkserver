import http from 'http'; //package.json에 모듈설정 꼭 해줄것 
import fs from 'fs';
//root directory에 DI 셋팅, Command : npm init 진행후 생성된 Package.json에
// "type" : "module" 이라는 내용을 기입하면 module.js방식 즉 mjs 방식을 사용할 수 있다.

http.createServer(function (request, response) {
  // http 객체에 어떤 키와 메서드가 있는지 확인
  const data = fs.readFileSync('./index.html');
  // 접미사로 Sync가 작성되었다면 '동기적(synchronously)'으로 처리하는 메서드가 된다.
  // fs객체에 어떤키와 메서드가 있는지 확인
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  //writeHead 메서드는 '일련의 통신 규약'과 같은 약속으로 ★200이면 정상적으로 작동할 때를 이야기함
  //404에러 같은 것이 대표적인 에러형 비정상 응답 내용중 하나
  response.write(data);
  // 읽어낸 파일을 data로 'write(작성)'gka
  response.end();
  // 작성이 완료되면 종료(end)
}).listen(1857, function () { // "어디서 문서를 읍답할 것인지 포트(입구번호)를 설정" 포트번호 겹치면 안됨★
  console.log('서버가 작동하고 있습니다.')
})
//요청이 없으므로 기본페이지만 바로 보여줌