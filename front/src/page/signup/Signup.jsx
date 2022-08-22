import { Link } from "react-router-dom";
import {Home} from "@mui/icons-material";
import style from "./signup.module.css";

function Signup() {
    return (
        <div className={style.login}>
            <div className={style.loginWrapper}>
                <div className={style.loginLeft}>
                    <h3 className={style.loginLogo}>GGeabuSocial</h3>
                    <span className={style.loginDesc}>
                        Connect with friends and the world around you GGeabuSocial.
                    </span>
                </div>
                <div className={style.loginRight}>
                    <div className={style.loginBox}>
                        <input placeholder="아이디" className={style.logoinInput} />
                        <input placeholder="이메일" className={style.logoinInput} />
                        <input placeholder="비밀번호" className={style.logoinInput} />
                        <input placeholder="비밀번호 확인" className={style.logoinInput} />
                        <button className={style.loginButton}>Sign Up</button>
                        <Link to="/login" className={style.loginRegisterButton}>
                            Log into Account
                        </Link>
                    </div>
                </div>

                <Link to="/" className={style.homeIconWrapper}>
                    <Home className={style.homeIcon} />
                </Link>
            </div>
        </div>
    );
}

export default Signup;