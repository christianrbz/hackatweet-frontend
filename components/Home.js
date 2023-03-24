import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import Login from './Login';
import Link from 'next/link';


function Home() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [home, setLoginPage] = useState('/');

    const handleLogout = () => {
		dispatch(logout());
        setLoginPage("/");
	};



    return (
        <div className={styles.home}>

            <div className={styles.leftSide}>
                <img src="/bird_returned.png" alt="bird" />
                <div>
                    <img src="" alt="" />
                    <h2>{user.firstname} </h2>
                    <h3>@{user.username} </h3>
                    <button onClick={() => handleLogout()}><Link href={home} className={styles.linkButton}>Logout</Link></button>
                </div>
            </div>

            <div className={styles.middleSide}>

                <div className={styles.tweet}>
                    <h2>Home</h2>
                    <textarea name="tweet" id="tweet" placeholder="What's up ?"></textarea>
                </div>

                <div className={styles.lastTweets}>
                    <div>
                        <img src="" alt="" />
                        <p>Christian - @christianR - 5 hours</p>
                    </div>
                    <p>TWEET 1</p>
                    <p>LIKE</p>
                </div>


            </div>


            <div className={styles.rightSide}>
                <h2>Trends</h2>
                <p>hashtag</p>

            </div>




        </div>
    );


}

export default Home;
