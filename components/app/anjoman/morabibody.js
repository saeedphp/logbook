import styles from './morabibody.module.css';
import Button from "../../ui/button";
import { getAllStudents } from '../../../data/students';
import Gem from '../../icons/gem';
import Arrow from '../../icons/arrow';
import BodyRecords from '../flight_records/bodyrecords';
import { useState } from 'react';
import Hat2 from '../../icons/hat2';
import Medal from '../../icons/medal';
import Calendar from '../../icons/calendar';
import AnjomanMorabiSavabegh from './anjoman_morabi_savabegh';


const MorabiBody = () => {

    const Allstudents = getAllStudents();

    const [showData, setShowData] = useState(null);
    const ToggleShowData = (id) => {
        if (showData === id) {
            return setShowData(null);
        }
        setShowData(id);
    };

    return (
        <>
            <section className={styles.morabi}>
                <div className={styles.tab}>
                    {Allstudents.map((khalaban) => (
                        <div className={styles.box_students} key={khalaban.id} id={khalaban.id}>

                            {!showData ?
                                <div className={styles.title}>
                                    <h4>
                                        <Medal /> {khalaban.title}
                                    </h4>
                                </div>
                                :
                                ''
                            }

                            {khalaban.members.map((list) => (
                                <>
                                    {showData == list.id ?

                                        <div className={styles.member_data} key={list.id} id={list.id}>
                                            <div className={styles.header_data}>
                                                <h5><Hat2 />سوابق پروازی {list.name}</h5>
                                                <a onClick={() => ToggleShowData(list.id)}>
                                                    <Arrow />
                                                </a>
                                            </div>

                                            <AnjomanMorabiSavabegh />
                                        </div>

                                        :
                                        <>
                                            {!showData ?
                                                <div className={styles.item_level} key={list.id} id={list.id}>
                                                    <div className={styles.item}>
                                                        <span className={styles.number}>
                                                            {list.index}
                                                        </span>
                                                        <div className={styles.before_box}>
                                                            <div className={styles.box_data}>
                                                                <div className={styles.data}>
                                                                    <Hat2 />
                                                                    <h3>
                                                                        {list.name}
                                                                    </h3>
                                                                </div>
                                                                <Button className={styles.button} onClick={() => ToggleShowData(list.id)}>
                                                                    مشاهده جزئیات لاگ
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                ''
                                            }
                                        </>

                                    }
                                </>
                            ))
                            }
                        </div>
                    ))
                    }
                </div>
            </section>
        </>
    );
}

export default MorabiBody;