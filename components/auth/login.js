import { Fragment, useState, useEffect, useRef } from "react";
import styles from './login.module.css';
import UserInput from "../icons/user-input";
import Eye from "../icons/eye";
import Lock from "../icons/lock";
import Mail from "../icons/mail";
import Button from "../ui/button";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [forget, setForget] = useState(false);

    const showForget = () => setForget(true);

    useEffect(() => {
        const storedUserLoggedInInfoStorage = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInfoStorage === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const togglePassVisibility = () => {
        setShowPassword(showPassword ? false : true);
    };

    const formSubmitHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return (
        <Fragment>

            <div className={styles.controllers}>
                <UserInput />
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="نام کاربری"
                />
            </div>

            <div className={styles.controllers}>
                <Lock />
                <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="رمز عبور"
                />
                <span>
                    <Eye onClick={togglePassVisibility} />
                </span>
            </div>

            <a className={styles.forget} onClick={showForget}>رمز عبور خود را فراموش کرده اید؟</a>

            <Button className={styles['login-btn']} onClick={formSubmitHandler}>
                ورود
            </Button>

            <div className={styles.box_remember}>
                <input type="checkbox" />
                <span className={styles.remember_me}>مرا بخاطر بسپار</span>
            </div>

            {forget ?
                <div>
                    <p className={styles.remember}>در صورت فراموشی رمز عبور با وارد کردن ایمیلی که در زمان ثبت نام وارد کردید رمزتان را باریابی کنید</p>
                    <div className={styles.controllers}>
                        <Mail />
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="ایمیل"
                        />
                    </div>
                    <Button className={styles['login-btn']}>
                        ارسال
                    </Button>
                </div>
                : ''
            }

        </Fragment>
    );
};

export default Login;