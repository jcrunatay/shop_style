import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { ReactComponent as GoogleIcon } from "./../../assets/google-color-svgrepo-com.svg";
import { ReactComponent as FacebookIcon } from "./../../assets/facebook-svgrepo-com.svg";

import FormInput from "../form-input/form-input.component";

import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithFacebookPopup,
    signInAuthUserWithEmailAndPassword,
    auth,
    getRedirectResult,
} from "../../utils/firebase/firebase";

import "./sign-in-form.styles.scss";

const SignInForm = () => {
    const [signInErrorMessage, setSignInErrorMessage] = useState("");

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    /* const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }; */

    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();
        } catch (error) {
            if (error.code === "auth/cancelled-popup-request") {
                console.log("Sign-in was cancelled by the user.");
            } else {
                console.error("Error during Google sign-in:", error);
            }
        }
    };

    useEffect(() => {
        const getTheResultOfRedirect = async () => {
            const response = await getRedirectResult(auth);
        };

        getTheResultOfRedirect();
    }, []);

    const signInWithFacebook = async () => {
        try {
            const { user } = await signInWithFacebookPopup();

            //if the no user associated the email then add the user to the firestore database
            await createUserDocumentFromAuth(user);
        } catch (error) {
            if (error.code === "auth/account-exists-with-different-credential") {
                console.error("The email was already used in another sign in method");
            } else {
                console.error("Error signing in with Facebook: ", error);
            }
        }
    };

    const onSubmit = async (data) => {
        try {
            const response = await signInAuthUserWithEmailAndPassword(data.email, data.password);
            reset();
        } catch (error) {
            console.log("user sign in failed", error);
            setSignInErrorMessage("The email or password you have entered is incorrect");
        }
    };

    return (
        <div className="sign-in-form-container">
            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                <h4>Sign in to ShopStyle</h4>
                <FormInput
                    label="Email"
                    type="email"
                    autoComplete="off"
                    name="email"
                    register={register}
                    purpose="signin"
                />
                {errors.email && <p className="signin-err-message">{errors.email.message}</p>}

                <FormInput
                    label="Password"
                    type="password"
                    autoComplete="off"
                    name="password"
                    register={register}
                    purpose="signin"
                />

                {errors.password && <p className="signin-err-message">{errors.password.message}</p>}

                {signInErrorMessage && <p className="signin-err-message">{signInErrorMessage}</p>}
                <button type="submit" className="sign-in-form-btn">
                    Sign In
                </button>
                <span className="or-text">OR</span>
                <div className="auth-btn-container">
                    <button
                        type="button"
                        className="sign-in-with-google-btn"
                        onClick={signInWithGoogle}
                    >
                        <GoogleIcon />
                        Sign in with Google
                        <span></span>
                    </button>
                    <button
                        type="button"
                        className="sign-in-with-facebook-btn"
                        onClick={signInWithFacebook}
                    >
                        <FacebookIcon /> Sign in with Facebook
                        <span></span>
                    </button>
                </div>
                <hr className="line-break" />
                <div className="redirect-user-to-sign-up-container">
                    <span>Don't have an account?</span>
                    <Link to="/auth/signup" className="sign-up-btn-link">
                        Sign up
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
