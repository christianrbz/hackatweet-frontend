import styles from '../styles/Login.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';


function Login() {

    const [isModalSignUpVisible, setIsModalSignUpVisible] = useState(false);
    const [isModalSignInVisible, setIsModalSignInVisible] = useState(false);
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

	const showModalSignUp = () => {
		setIsModalSignUpVisible(!isModalSignUpVisible);
	};

    const showModalSignIn = () => {
		setIsModalSignInVisible(!isModalSignInVisible);
	};

    const handleRegister = () => {

        console.log(signUpUsername)
        console.log(signUpPassword)
		fetch('https://vercel.com/christianrbz/hackatweet-backend/users/signup', {
			method: 'POST',
            mode: 'no-cors',
			headers: { 'Content-Type': 'app/json' },
			body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
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

    const handleConnection = () => {

		fetch('https://vercel.com/christianrbz/hackatweet-backend/users/signin', {
			method: 'POST',
            mode: 'no-cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signInUsername, password: signInPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername('');
					setSignInPassword('');
					setIsModalVisible(false)
				}
			});
	};

    
    let modalSignUpContent;
    if (isModalSignUpVisible){

        modalSignUpContent = (
			<div className={styles.registerContainer}>
				<div className={styles.registerSection}>
					<p>Sign-up</p>
					<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
					<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
					<button id="register" onClick={() => handleRegister()}>Register</button>
				</div>
				
			</div>
		);
    }

    let modalSignInContent;
    if (isModalSignInVisible){

        modalSignInContent = (
			<div className={styles.registerContainer}>
				
				<div className={styles.registerSection}>
					<p>Sign-in</p>
					<input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
					<input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
					<button id="connection" onClick={() => handleConnection()}>Connect</button>
				</div>
			</div>
		);
    }

	return (
        <div className={styles.login}>
            <div className={styles.leftSide}>
              

            </div>

            <div className={styles.rightSide}>
                
                 <div classname = {styles.birdLogo}>
                    <img  src="/bird_returned.png"  alt="bird" width={70} height={50}/>
                </div>

                <div className={styles.sign}>

                    <p className={styles.title}>See what's </p>
                    <p className={styles.title}>Happening</p>
                    <p className={styles.subtitle}>Join Hackatweet today</p>
                    <button onClick={() => showModalSignUp()}>Sign up</button>
                    <a className={styles.subtitle}>Already have an account ? </a>
                    <button onClick={() => showModalSignIn()}>Sign In</button>

                </div>
                

            </div>


            {isModalSignUpVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} open={isModalSignUpVisible} closable={false} footer={null}>
					{modalSignUpContent}
				</Modal>
			</div>}

            {isModalSignInVisible && <div id="react-modals">
				<Modal getContainer="#react-modals" className={styles.modal} open={isModalSignInVisible} closable={false} footer={null}>
					{modalSignInContent}
				</Modal>
			</div>}

            
           
            

        </div>

		
	);
}

export default Login;