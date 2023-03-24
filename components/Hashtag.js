import styles from '../styles/Home.module.css';
import Link from 'next/link';
import TweetsHashtag from '../components/TweetsHashtag';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/users';



function Hashtag() {
   
    const users = useSelector((state) => state.users.value);
    return (
        <div className={styles.home}>

            <div className={styles.leftSide}>
                <img src="/bird_returned.png" alt="bird" />
                <div>
                    <img src="" alt="" />
                    <h2>{users.firstname} </h2>
                    <h3>@{users.username} </h3>
                    {/* <button onClick={() => handleLogout()}><Link href={home} className={styles.linkButton}>Logout</Link></button> */}
                </div>
            </div>

           <TweetsHashtag/>


            <div className={styles.rightSide}>
                <h2>Trends</h2>
                <p>hashtag</p>

            </div>




        </div>
    );


}

export default Hashtag;