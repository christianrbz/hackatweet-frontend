import styles from '../styles/SignIn.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons';


function SignIn(props) {
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [home, setHome] = useState('/');
    
    const dispatch = useDispatch();

    const showModalSignIn = () => {
		console.log("Hello button hide modal")
		dispatch(showModal(false))
	};

    let userSection;
	
    userSection =
        <div className={styles.Xmark}>
            
            {<FontAwesomeIcon onClick={()=>(showModalSignIn())} className={styles.userSection} icon={faXmark} /> }
        </div>

    const handleConnection = () => {
        fetch('https://hackatweet-backend-sigma.vercel.app/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    console.log("connecté!");
                    setHome("/home");
                    
                    
                }
                else {
                    console.log("pas connecté")
                }
            });
    };

    return (
        <div className={styles.signInContent}>
            <div className={styles.Xmark}>
				{userSection}
			</div>
            <div className={styles.signIn}>
                <img src="/bird_returned.png" alt="logo" />
                <h3>Connect to Hackatweet</h3>
                <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                <button id="connection" onClick={() => handleConnection()}>            
                    <Link href={home}>Sign in</Link>                
                </button>
            </div>
        </div>
    );
}

export default SignIn;