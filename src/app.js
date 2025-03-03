// env 파일을 위한 모듈 불러오기 
require('dotenv').config();

const express = require('express');
const app = express();


// .env에서 포트 가져오기 
const PORT = process.env.PORT;

// JSON 요청을 처리할 수 있도록 설정
app.use(express.json());

// 기본 라우트 (서버가 실행 중인지 확인)
app.get('/', (req, res) => {
    res.send('서버가 정상적으로 실행 중입니다!');
});

// API 예제: GET 요청
app.get('/api/nails/search', (req, res) => {
    res.json({
        message: '네일 검색 API 응답입니다.',
        query: req.query,  // Postman에서 보낸 Query Params 확인
    });
});



// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});