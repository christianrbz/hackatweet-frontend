import styles from '../styles/Home.module.css';


function Home() {
    return (
        <div className={styles.home}>

            <div className={styles.leftSide}>
                <img src="/bird_returned.png" alt="bird" />
                <div>
                    <img src="" alt="" />
                    <h2>John</h2>
                    <h3>@JohnCena</h3>
                    <button>Logout</button>
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