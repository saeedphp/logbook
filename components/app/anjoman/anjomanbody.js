import { useState } from "react";
import Image from "next/image";
import styles from './anjomanbody.module.css';
import IranMap from '../../../public/images/iran_map.png';
import Gem from "../../icons/gem";
import Hat2 from "../../icons/hat2";
import Calendar from "../../icons/calendar";


const AnjomanBody = () => {

    const [showData, setShowData] = useState(true);
    const ShowAll = () => setShowData(true)
    const ShowFun = () => setShowData(false)
    console.log(showData)

    return (
        <>
            <section className={styles.anjoman}>
                <div className={styles.tab}>
                    <div className={styles.box}>
                        <div className={styles.controllers}>
                            <div className={styles.box_select}>
                                <select
                                    id="location_Certificate"
                                    name="location_Certificate"
                                >
                                    <option value="" selected>تهران(تهران)</option>
                                    <option className={styles.options} >خراسان رضوی(مشهد)</option>
                                    <option className={styles.options} >قم(قم)</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.boxalldata}>
                            <div className={styles.boxdata}>
                                <table id="customers">
                                    <tr>
                                        <th>تعداد روزانه پرواز</th>
                                        <th>آدرس سایت</th>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>Vardavrd ( 812 M )</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>Shahran ( peak ) ( 755 M )</td>
                                    </tr>
                                    <tr>
                                        <td>70</td>
                                        <td>Emamzadeh Hashem ( Damavand ) ( 442 M )</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>Vardavrd ( 812 M )</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>Shahran ( peak ) ( 755 M )</td>
                                    </tr>
                                    <tr>
                                        <td>70</td>
                                        <td>Emamzadeh Hashem ( Damavand ) ( 442 M )</td>
                                    </tr>
                                    <tr>
                                        <td>70</td>
                                        <td>Emamzadeh Hashem ( Damavand ) ( 442 M )</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={styles.boxmap}>
                                <Image src={IranMap} alt="iran-map" />
                            </div>
                        </div>
                    </div>


                    <div className={styles.box}>
                        <div className={styles.header_box}>
                            <div className={styles.title}>
                                <Gem />
                                <h5>تعداد پروازهای انجام شده</h5>
                            </div>
                            <div className={styles.buttons}>
                                <button style={{ background: showData ? '#80ff00' : '' }} onClick={ShowAll}>
                                    همه
                                </button>
                                <button style={{ background: !showData ? '#80ff00' : '' }} onClick={ShowFun}>
                                    تفریحی
                                </button>
                            </div>

                            <div className={styles.buttonss}>
                                <select
                                    id="flys"
                                    name="flys"
                                >
                                    <option value="all" selected>همه</option>
                                    <option value="fun" className={styles.options} >تفریحی</option>
                                </select>
                            </div>
                        </div>


                        <div className={styles.listdata}>
                            <div className={styles.data}>
                                <div className={styles.time}>
                                    <span>روزانه</span>
                                    <div><Calendar /> <span>15 آذر 1400</span></div>
                                </div>
                                <span className={styles.qty}>50</span>
                            </div>

                            <div className={styles.data}>
                                <div className={styles.time}>
                                    <span>هفتگی</span>
                                    <div><Calendar /> <span>8 آذر 1400 تا 15 آذر 1400</span></div>
                                </div>
                                <span className={styles.qty}>350</span>
                            </div>

                            <div className={styles.data}>
                                <div className={styles.time}>
                                    <span>ماهانه</span>
                                    <div><Calendar /> <span>آذر 1400</span></div>
                                </div>
                                <span className={styles.qty}>16800</span>
                            </div>

                            <div className={styles.data}>
                                <div className={styles.time}>
                                    <span>سالانه</span>
                                    <div><Calendar /> <span>1400 - 1401</span></div>
                                </div>
                                <span className={styles.qty}>16800</span>
                            </div>

                        </div>

                    </div>


                    <div className={styles.box}>
                        <div className={styles.header_box}>
                            <div className={styles.title}>
                                <Hat2 />
                                <h5>تعداد خلبان ها</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AnjomanBody;