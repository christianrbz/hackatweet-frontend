import styles from '../styles/TweetsHashtag.module.css';
import { useEffect, useState } from 'react';


function TweetsHashtag() {
    const [hashtag, setHashtag] = useState('');
    const [resultsH, setResultsH] = useState([]);


    const handleClick = (hashtag) => {
        fetch(`https://hackatweet-backend-sigma.vercel.app/tweets/${hashtag}`)
        .then(response => response.json())
            .then(data => {
                if (data.result) {
                    console.log(data);
                    setResultsH(data)




            
                }
                else {
                    console.log("pas marché")
                }
            });
    };



	
    return (
        
           <div className={styles.middleSide}>

                <div className={styles.tweet}>
                    <h2>Hashtags</h2>
                    <textarea name="tweet" id="tweet" placeholder="What's up ?" onChange={(e) => setHashtag(e.target.value)} value={hashtag}></textarea>
                    <button onClick={() => handleClick(hashtag)}>Lancer recherche</button>
                </div>

                <div className={styles.lastTweets}>

                    {resultsH.map((tweet, index) => (
                        <div key={index}>
                            <div>
                                <img src="" alt="" />
                                <p>{users.firstname} - @{users.username} - 5 hours</p>
                            </div>
                            <p>{tweet.text} {tweet.hashtag}</p>
                        </div>
                    ))}
                   
                    

                    <p>Afficher ici les last tweets</p>
                </div>
            </div>
       

        );
    }
    
    export default TweetsHashtag;



