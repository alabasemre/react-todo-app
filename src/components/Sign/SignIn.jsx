import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Sign.module.css";

const SignIn = () => {
    const [userName, setUserName] = useState("");
    const [userNameInvalid, setUserNameInvalid] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = () => {
        setPasswordInvalid(false);
        setUserNameInvalid(false);

        if (userName.length === 0) {
            setUserNameInvalid(true);
            return;
        }

        if (password.length === 0) {
            setPasswordInvalid(true);
            return;
        }

        dispatch(login({ userName }));
        navigate("/");
    };

    return (
        <div className={styles["sign-form"]}>
            <h1 className={styles.title}>Giriş Yap</h1>
            <div className={styles["input-group"]}>
                <label htmlFor="txtUserName">Kullanıcı Adı</label>
                <input
                    type="text"
                    name="txtUserName"
                    id="txtUserName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                {userNameInvalid ? (
                    <p style={{ color: "red", marginTop: 15 }}>
                        Kullanıcı Adınızı Girmediniz
                    </p>
                ) : null}
            </div>
            <div className={styles["input-group"]}>
                <label htmlFor="txtPassword">Şifre</label>
                <input
                    type="password"
                    name="txtPassword"
                    id="txtPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {passwordInvalid ? (
                    <p style={{ color: "red", marginTop: 15 }}>
                        Şifrenizi Girmediniz
                    </p>
                ) : null}
            </div>
            <button className={styles["btn-signin"]} onClick={loginHandler}>
                Giriş Yap
            </button>
            <p className={styles["p-signup"]}>
                Hesabınız yok mu?
                <br />
                Hemen{" "}
                <span>
                    <Link to="/signup">Kayıt </Link>
                </span>
                olun.
            </p>
        </div>
    );
};

export default SignIn;
