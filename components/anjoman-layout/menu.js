import { Fragment } from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import profile from "../../public/images/profile.png";
import Link from "next/link";
import AppFlyReg from "../icons/app-flyReg";
import AppFlyRec from "../icons/app-flyRec";
import AppProfile from "../icons/app-profile";
import Hat2 from "../icons/hat2";
import Users from "../icons/users";
import Dashboard from "../icons/dashboard";
import { FaUserAlt } from 'react-icons/fa';

const AnjomanMenu = () => {

    return (
        <Fragment>
            <div className={`col-2 ${styles['desktop-nav']}`}>
                <nav className={`${styles.wrapper}`}>
                    <div className={`${styles['wrapper__nav']}`}>
                        <div className={`${styles.profile}`}>
                            <div className={`${styles['img-wrapper']}`}>
                                {/* <Image src={profile} alt="profile image" layout={"fill"} /> */}
                                <span className={styles.span_image}>
                                    <FaUserAlt className={styles.image_signup} />
                                </span>
                            </div>
                            <div className={`${styles.info}`}>
                                <p>
                                    انجمن
                                </p>
                                <p className={`${styles.level}`}>
                                    خروج از حساب کاربری
                                </p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/app/anjoman">
                                        <a>
                                            <span>
                                                <Dashboard />
                                            </span>
                                            داشبورد
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/anjoman/morabi">
                                        <a>
                                            <span className={styles.iconhat}>
                                                <Hat2 />
                                            </span>
                                            مربی
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/app/anjoman/khalabanha">
                                        <a>
                                            <span>
                                                <Users />
                                            </span>
                                            خلبان ها
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
                            <Link href="/app/anjoman">
                                <a>
                                    <span>
                                        <Dashboard />
                                    </span>
                                    داشبورد
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/anjoman/morabi">
                                <a>
                                    <span className={styles.iconhat}>
                                        <Hat2 />
                                    </span>
                                    مربی
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/app/anjoman/khalabanha">
                                <a>
                                    <span>
                                        <Users />
                                    </span>
                                    خلبان ها
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default AnjomanMenu;