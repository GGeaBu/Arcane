import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
import mainRouter from "./router/main.js";
import championRouter from "./router/champion.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

// ===========================라우터 등록================================
app.post("/", (req, res, next) => {
    // ***** 클라이언트에서 post요청했으니까 여기서도 post로 수신
    console.log(`클라이언트에서 보낸 데이터 : ${req.body.name}`);
    console.log("서버 응답 성공");
    const text = req.body.name;
    res.send(text);
});
app.use("/", (req, res, next) => {
    // const text = req.body.searchValue;
    // res.send(text);
    res.send({ hi: "hello i'm search" });
});
app.use("/champion", championRouter);

// 위의 라우터 모두 충족하지 않을경우
app.use((req, res, next) => {
    res.sendStatus(404);
});

// 에러 발생시
app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(5000, () => {
    console.log("Listening on port:5000...");
});