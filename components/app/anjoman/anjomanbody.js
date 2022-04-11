import { useState } from "react";
import Image from "next/image";
import styles from './anjomanbody.module.css';
// import IranMap from '../../../public/images/iran_map.png';
import Gem from "../../icons/gem";
import Hat2 from "../../icons/hat2";
import Calendar from "../../icons/calendar";
import Recharts from "../../chart/chart";
import Chart2 from "../../chart/chart2";
import IranMap from "../iranmap/IranMap";
import { getAllCitys } from "../../../data/citys";
import { getAllSites } from "../../../data/sites";


const AnjomanBody = (props) => {

    const [showData, setShowData] = useState(true);
    const ShowAll = () => setShowData(true)
    const ShowFun = () => setShowData(false)


    const AllCitys = getAllCitys();
    const AllSites = getAllSites();
    const [citys] = useState([AllSites]);

    const Sitecity = (e) => {
        setCurrentCity(e.target.value);
        const filteredSite = citys.filter((item) => item !== currentCity);
        console.log(filteredSite)
    }

    const [currentCity, setCurrentCity] = useState('تهران (تهران)');
    const [currentSite, setCurrentSite] = useState([
        {
            name: 'Vardavrd ( 812 M )',
            flys: 40,
        },
        {
            name: 'Shahran ( peak ) ( 755 M )',
            flys: 50,
        },
        {
            name: 'Emamzadeh Hashem ( Damavand ) ( 442 M )',
            flys: 70,
        },
        {
            name: 'Shirvan ( 812 M )',
            flys: 35,
        },
    ]);


    // console.log(currentCity)

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
                                    defaultValue={currentCity}
                                    onChange={Sitecity}
                                >
                                    {AllCitys.map((item) => (
                                        <option
                                            key={item.id}
                                            id={item.id}
                                            value={item.city}
                                            className={styles.options}
                                            selected>

                                            {item.city}

                                        </option>
                                    ))}
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
                                    {currentSite.map((site) => {
                                        // <>
                                        //     {site.sites.map((data) => {
                                        return <tr key={site.name}>
                                            <td>{site.flys}</td>
                                            <td>{site.name}</td>
                                        </tr>

                                        //     })}
                                        // </>
                                    })}
                                </table>
                            </div>

                            <div className={styles.boxmap}>
                                {/* <Image src={IranMap} alt="iran-map" /> */}
                                <IranMap />
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
                        <div className={styles.header_chart}>
                            <div className={styles.title}>
                                <Hat2 />
                                <h5>تعداد خلبان ها</h5>
                            </div>
                        </div>

                        <div className={styles.boxchart}>
                            {/* <Recharts /> */}
                            <Chart2 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AnjomanBody;