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
    const [textTweet, setTextTweet] = useState("");

    const handleTweet = () => {
        const words = textTweet.split(' ');
        const hashtags = [];
        let textHashtag = '';

        for (let i = 0; i < words.length; i++) {
            if (words[i].startsWith('#')) {
                hashtags.push(words[i]);
            } else {
                textHashtag += words[i] + ' ';
            }
        }
        fetch('https://hackatweet-backend-sigma.vercel.app/tweets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: textHashtag.trim(), hashtag: hashtags.join(' '), user: user.id }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    console.log("envoyé!");
                    // Ajouter le nouvel objet tweet à la fin du tableau existant
                    setTweetsData(prevTweets => prevTweets.concat(data.tweet));
                    setTextTweet("");
                }
            });
    };


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
                    <div className={styles.profil}>

                        <img src="/user.png" alt="" />
                        <div className={styles.profilText}>
                            <span className={styles.profilFirstname}>{user.firstname} </span>
                            <span className={styles.profilUsername}>@{user.username}</span>
                        </div>
                    </div>
                    <button><Link href={home} className={styles.linkButton} onClick={() => handleLogout()}>Logout</Link></button>

                </div>
            </div>

            <div className={styles.middleSide}>

                <div className={styles.tweet}>
                    <h2>Home</h2>
                    <textarea name="tweet" id="tweet" placeholder="What's up ?" onChange={(e) => setTextTweet(e.target.value)} value={textTweet}></textarea>
                    <button onClick={() => handleTweet()} >Tweet</button>
                </div>

                <div className={styles.lastTweets}>

                    {tweetsData.map((tweet, index) => (
                        <div key={index}>
                            <div>
                                <div className={styles.imageTweet}>
                                <img src="/user.png" alt="" />
                                <p>{user.firstname} - @{user.username} - 5 hours</p>
                                </div>
                            </div>
                            <p>{tweet.text} -{tweet.hashtag} </p>
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
                {tweetsData.map((tweet, index) => (
                    <div key={index}>
                        <p> {tweet.hashtag}</p>
                    </div>
                ))}

            </div>




        </div>
    );


}

export default Home;