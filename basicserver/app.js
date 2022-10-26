const http = require('http');
const path = require('path'); // path (파일 경로)
const fs = require('fs'); // file sys

const server = http.createServer((req, res) => {

  //경로 설정 함수
  const SetPath = (path) => {
    if (typeof path === 'string') {
      let Pathset = fs.readFileSync(path, (err) => {
        if (err) throw err;
      });
      return Pathset;
    }
  }
  //Write 함수
  const SetWrite = (res, ConType, File) => {
    if (typeof ConType === 'string' && typeof File === 'object') {
      res.writeHead(200, { 'Content-Type': ConType });
      res.write(File);
      res.end()
    }
  }

  if (req.method === "GET") { // GET 요청 : 쿼리스트링이 달림 
    if (req.url === "/") {
      SetWrite(res, 'text/html', SetPath('./index.html'));
    } else if (req.url === '/style.css') {
      SetWrite(res, 'text/css', SetPath('./style.css'));
    } else if (req.url === '/test.js') {
      SetWrite(res, 'text/javascirpt', SetPath('./test.js'));
    }
  }
});

server.listen(1361, (err) => {
  if (err) throw err
  console.log('sever 1361');
});

//URL이라는 주소 한줄로 페이지 구성을 동적으로 처리가 가능하다.
//ex) //URL = name&mypage&1(쿼리스트링 개념) cf) './style.css'(문자열)
//**request url 은 쿼리스트링이랑 관련이 높다(웹사이트는 스트링만 받아올 수 있으면 요구사항을 처리할 수 있다.) */
//요청에 따른 반응을 하는 것 = 애플리케이션
// */String 일 때 무엇을 처리해준다.

//요청 => request : method,url -> 원하는데로 파일을 처리해 줄수 있다. 사람이 아닌 기계가 처리해주기 때문에 server라고 불림.

//get,post 규칙 , url : 규칙 (개발자가 담당하는것은 : "STRING" => 개발자는 문자열에 맞추어서 동작시키게만 하면 된다.)

//인풋과 아웃풋 => 문자열/ 처리는 문자열이 아님

//폴더를 리딩하면 됨 => 메뉴도 동적으로 만들 수 있음.