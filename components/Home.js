import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/users';
import Login from './Login';
import Link from 'next/link';



function Home() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.value);
    const [home, setLoginPage] = useState('/');
    const [tweetsData, setTweetsData] = useState([]);

    const handleLogout = () => {
        dispatch(logout());
        setLoginPage("/");
    };

    useEffect(() => {
        fetch('https://hackatweet-backend-sigma.vercel.app/tweets')
            .then(response => response.json())
            .then(data => {
                setTweetsData(data.tweets);
            });
    }, []);

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

                    {tweetsData.map((tweet, index) => (
                        <div key={index}>
                            <div>
                                <img src="" alt="" />
                                <p>{user.firstname} - @{user.username} - 5 hours</p>
                            </div>
                            <p>{tweet.text} {tweet.hashtag}</p>
                        </div>
                    ))}

                </div>


            </div>


            <div className={styles.rightSide}>
                <h2>Trends</h2>
                <p>hashtag</p>
                <button>
                    <Link href="/hashtag">Access to Hashtags page</Link>   
                </button>

            </div>




        </div>
    );


}

export default Home;