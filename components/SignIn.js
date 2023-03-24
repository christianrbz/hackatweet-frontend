import styles from '../styles/SignIn.module.css';
import { useEffect, useState } from 'react';


function SignIn(props) {

    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    const handleConnection = () => {

		fetch('https://hackatweet-backend-sigma.vercel.app/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					console.log("connecté!")
				}
				else {
					console.log("pas connecté")
				}
			});
	};

    return (
        <div className={styles.signin}>
            <img src="/bird_returned.png" alt="logo" />
            <h3>Connect to Hackatweet</h3>
            <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
            <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
            <button id="connection" onClick={() => handleConnection()}>Sign in</button>
        </div>
    );
}

export default SignIn;
