import styles from '../styles/SignIn.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import { showModal} from '../reducers/modal';
import {login} from '../reducers/users';


function SignIn() {
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [home, setHome] = useState('/');
    
    
    const dispatch = useDispatch();

    const showModalSignIn = () => {
		console.log("Hello button hide modal IN")
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
                    dispatch(login({ firstname: data.data.firstname, username: signInUsername, id: data.data._id }));
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
                <button id="connection" >            
                    <Link href={home} onClick={() => handleConnection()}>Sign in</Link>                
                </button>
            </div>
        </div>
    );
}

export default SignIn;