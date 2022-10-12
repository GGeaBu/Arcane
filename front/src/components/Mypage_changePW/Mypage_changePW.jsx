import style from "./mypage_changePW.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";

function ChangePassword() {
    const username = useLocation().state; //navigate의 option값으로 받아온 유저 id를 담은 객체
    const navigate = useNavigate();

    const currentPWInput = useRef(null);
    const newPWInput = useRef(null);
    const newPWInputConfirm = useRef(null);

    const [input_currentPW, setCurrentPW] = useState("");
    const [input_newPW, setNewPW] = useState("");
    const [input_newPWComfirm, setNewPWComfirm] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        let isValid;

        await axios
            .get("/api/mypage/auth", {
                headers: { username: username, pw: input_currentPW },
            })
            .then(async (res) => {
                isValid = res.data;
            })
            .catch((e) => {
                console.error(e);
            });

        if (isValid) {
            await axios
                .post("/api/mypage/change", {
                    username: username,
                    pw: input_newPW,
                    new_pw: input_newPWComfirm,
                })
                .then((res) => {})
                .catch((e) => {
                    console.error(e);
                });
        } else {
            window.alert("비밀번호 틀림");
        }
    };

    const changeCurrentPW = () => {
        setCurrentPW(currentPWInput.current.value);
    };
    const changeNewPW = () => {
        setNewPW(newPWInput.current.value);
    };
    const changeNewPWConfirm = () => {
        setNewPWComfirm(newPWInputConfirm.current.value);
    };

    return (
        <>
            <div className={style.ChangePassword}>
                UserName is {username} and I'm password change div
            </div>
            <form className={style.pwBox} onSubmit={onSubmit}>
                <input
                    type="Password"
                    placeholder="현재 비밀번호"
                    className={style.changePWInput}
                    onChange={changeCurrentPW}
                    autoComplete="new-password"
                    ref={currentPWInput}
                />
                <input
                    placeholder="새 비밀번호"
                    type="text"
                    className={style.changePWInput}
                    onChange={changeNewPW}
                    autoComplete="new-password"
                    ref={newPWInput}
                />
                <input
                    placeholder="새 비밀번호 확인"
                    type="Password"
                    className={style.changePWInput}
                    onChange={changeNewPWConfirm}
                    autoComplete="new-password"
                    ref={newPWInputConfirm}
                />
                <button className={style.loginButton}>비밀번호 변경하기</button>
            </form>
        </>
    );
}

export default ChangePassword;
