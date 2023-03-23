import styles from '../styles/SignUp.module.css';
import { useEffect, useState } from 'react';



function SignUp() {

   
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

    const handleRegister = () => {

        console.log(signUpUsername)
        console.log(signUpPassword)
		fetch('https://hackatweet-backend-sigma.vercel.app/users/signup', {
			method: 'POST',
            
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpUsername, username: signUpUsername,  password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					// dispatch(login({ username: signUpUsername, token: data.token }));
					// setSignUpUsername('');
					// setSignUpPassword('');
					// setIsModalVisible(false)
                    console.log("ça marche")
				}
			});
	};



                return (
                    <div className={styles.registerSection}>
					<p>Sign-up</p>
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button id="register" onClick={() => handleRegister()}>Register</button>
				    </div>

                    );
                }
                
                export default SignUp;



