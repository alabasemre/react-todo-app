import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sign.module.css";
const SignUp = () => {
    return (
        <div className={styles["sign-form"]}>
            <h1 className={styles.title}>Kayıt Ol</h1>
            <div className={styles["input-group"]}>
                <label htmlFor="txtUserName">Kullanıcı Adı</label>
                <input type="text" name="txtUserName" id="txtUserName" />
            </div>
            <div className={styles["input-group"]}>
                <label htmlFor="txtEmail">E-Posta Adresi</label>
                <input type="email" name="txtEmail" id="txtEmail" />
            </div>
            <div className={styles["input-group"]}>
                <label htmlFor="txtPassword">Şifre</label>
                <input type="password" name="txtPassword" id="txtPassword" />
            </div>
            <button className={styles["btn-signin"]}>Kayıt Ol</button>
            <p className={styles["p-signup"]}>
                Zaten bir hesabınız var mı?
                <br />
                Hemen{" "}
                <span>
                    <Link to="/signin">Giriş </Link>
                </span>
                yapın.
            </p>
        </div>
    );
};

export default SignUp;
