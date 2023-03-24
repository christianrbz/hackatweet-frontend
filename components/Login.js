import styles from '../styles/Login.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { showModal} from '../reducers/modal';





function Login() {

    const [isModalSignUpVisible, setIsModalSignUpVisible] = useState(false);
    const [isModalSignInVisible, setIsModalSignInVisible] = useState(false);

	const dispatch = useDispatch();

	const modal = useSelector((state) => state.modal.value);


	// SignUp
	const showModalSignUp = () => {
		console.log("button")
		setIsModalSignUpVisible(!isModalSignUpVisible);
		dispatch(showModal(true));
	};


	// SignIn
    const showModalSignIn = () => {
		setIsModalSignInVisible(!isModalSignInVisible);
		
	};

	let modalSignInContent;
	if (isModalSignInVisible) {

		modalSignInContent = (

				<div>
					< SignIn />
				</div>
		);
	}

   
    
    let modalSignUpContent;
    if (isModalSignUpVisible){

        modalSignUpContent = (
			<div className={styles.registerContainer}>
                <SignUp/>
			</div>
		);
    }

	return (
        <div className={styles.login}>
            <div className={styles.leftSide}>
            </div>

            <div className={styles.rightSide}>
                
                 <div className = {styles.birdLogo}>
                    <img  src="/bird_returned.png"  alt="bird" width={70} height={50}/>
                </div>
                <p className={styles.title}>See what's </p>
                <p className={styles.title}>Happening</p>
                <p className={styles.subtitle}>Join Hackatweet today.</p>
                <button className ={styles.btnSignUp}onClick={() => showModalSignUp()}>Sign up</button>
                <a className={styles.question}>Already have an account ? </a>
                <button className ={styles.btnSignIn} onClick={() => showModalSignIn()}>Sign In</button>

            </div>


            {modal && <div id="react-modals">
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