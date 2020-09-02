import React, {useState} from 'react';
// import './sign-in.styles.scss';
import { SignInContainer, TitleContainer , ButtonsContainer } from './sign-in.styles';
import InputForm from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';

// import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


const SignIn =( {emailSignInStart, googleSignInStart}) => {
const [ userCredentials, setCredentials ] = useState({ email:'', password:'' })
const{ email, password } = userCredentials;
   const  handleSubmit = async  event =>{
        event.preventDefault();
        emailSignInStart(email, password);
    };

   const  handleChange = event=>{
        const{ value,name } =event.target;
        setCredentials({ ...userCredentials, [name]: value})
    }

        return(
                <SignInContainer>
                    <TitleContainer>Have an account</TitleContainer>
                    <span>Sign in with your email and password</span>
                    <form onSubmit={handleSubmit}>
                        <InputForm name="email" type="email"  value={email} handleChange= {handleChange} required  label="Email"/>
                        <InputForm name="password" type="password" value={password}  handleChange= {handleChange}  required  label="Password" />
                        <ButtonsContainer>
                        <CustomButton type="submit" > Sign in</CustomButton> 
                        <CustomButton type='button' onClick = {googleSignInStart} isGoogleSignIn> Sign in with Google</CustomButton> 
                        </ButtonsContainer>
                    </form>
                </SignInContainer>    
                )
            }


const mapDispatchToProps =  dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);