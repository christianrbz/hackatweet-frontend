import styles from '../styles/SignUp.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import { showModal} from '../reducers/modal';
import {login} from '../reducers/users';
import Link from 'next/link';

function SignUp() {
	

	const [signUpFirstname, setSignUpFirstname] = useState('');
	const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');

	const dispatch = useDispatch();

	const [home, setHome] = useState('/');
	const showModalSignUp = () => {
		console.log("Hello button hide modal Up")
		dispatch(showModal(false))
	};



	let userSection;
	
			userSection =
				<div className={styles.Xmark}>
					
					{<FontAwesomeIcon onClick={()=>(showModalSignUp())} className={styles.userSection} icon={faXmark} /> }
				</div>

    const handleRegister = () => {

        console.log(signUpUsername)
        console.log(signUpPassword)
		fetch('https://hackatweet-backend-sigma.vercel.app/users/signup', {
			method: 'POST',
            
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername,  password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					// dispatch(login({ username: signUpUsername, token: data.token }));
					// setSignUpUsername('');
					// setSignUpPassword('');
					// setIsModalVisible(false)
					dispatch(login({ firstname: signUpFirstname, username: signUpUsername, id: data.data.id }));
                    console.log("ça marche")
					setHome("/home");
				}
			});
	};



                return (
                    <div className={styles.signUpSection}>
						<div className={styles.Xmark}>
							{userSection}
						</div>
                         <div className={styles.signUp}>
							<img  src="/bird_returned.png"  alt="bird" width={70} height={50}/>
							<p className={styles.txt}>Create your Hackatweet account</p>

							<input type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />

							<input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />

							<input type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />



							<button className={styles.btnSignUp} id="register" onClick={() => handleRegister()}>
							<Link href={home} onClick={() => handleRegister()}>Sign up</Link>              
							</button>
						</div>
				    </div>

                    );
                }
                
                export default SignUp;



