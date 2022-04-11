import styles from "./menu.module.css";
import Image from "next/image";
import profile from "../../public/images/profile.png";
import Link from "next/link";
import AppHome from "../icons/app-home";
import AppFlyReg from "../icons/app-flyReg";
import AppFlyRec from "../icons/app-flyRec";
import AppProfile from "../icons/app-profile";
import Send from "../icons/send";
import { Fragment } from "react";

const Menu = () => {
    return (
        <Fragment>
            <div className={`col-2 ${styles['desktop-nav']}`}>
                <nav className={`${styles.wrapper}`}>
                    <div className={`${styles['wrapper__nav']}`}>
                        <div className={`${styles.profile}`}>
                            <div className={`${styles['img-wrapper']}`}>
                                <Image src={profile} alt="profile image" layout={"fill"} />
                            </div>
                            <div className={`${styles.info}`}>
                                <p>
                                    محمود شیرازی نیا
                                </p>
                                <p className={`${styles.level}`}>
                                    مقطع گواهی نامه:
                                </p>
                                <p className={`${styles.level}`}>
                                    پیشرفته
                                </p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/app">
                                        <a>
                                            <span>
                                                <AppHome />
                                            </span>
                                            خانه
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/sabtparvaz">
                                        <a>
                                            <span>
                                                <AppFlyReg />
                                            </span>
                                            ثبت پرواز
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/savabegh_parvaz_new">
                                        <a>
                                            <span>
                                                <AppFlyRec />
                                            </span>
                                            سوابق پروازی
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/profile">
                                        <a>
                                            <span>
                                                <AppProfile />
                                            </span>
                                            پروفایل
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/sabtball">
                                        <a>
                                            <span>
                                                <Send />
                                            </span>
                                            ثبت بال
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </nav>
            </div>
            <div className={`col-2 ${styles['mobile-nav']}`}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    <span>
                                        <AppHome />
                                    </span>
                                    خانه
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app">
                                <a>
                                    <span>
                                        <AppFlyReg />
                                    </span>
                                    ثبت پرواز
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <span>
                                        <AppFlyRec />
                                    </span>
                                    سوابق پروازی
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a>
                                    <span>
                                        <AppProfile />
                                    </span>
                                    پروفایل
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/sabtball">
                                <a>
                                    <span>
                                        <Send />
                                    </span>
                                    ثبت بال
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default Menu;