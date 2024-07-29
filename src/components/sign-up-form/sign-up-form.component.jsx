import { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import { useForm } from "react-hook-form";
import { SignUpFormValidation } from "../../utils/validation/signup-form-validation";

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import "./sign-up-form.styles.scss";

/* const defaultFormFields = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
}; */

const SignUpForm = () => {
    /* const [formFields, setFormFields] = useState(defaultFormFields); */
    /* const { username, email, password, confirmPassword } = formFields; */
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    /* const resetForm = () => {
        setFormFields(defaultFormFields);
    }; */

    /* const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }; */

    const onSubmit = async (data) => {
        try {
            const { user } = await createAuthUserWithEmailAndPassword(data.email, data.password);

            try {
                await createUserDocumentFromAuth(user, { displayName: data.username });

                console.log("successfully added a user with email and password");

                reset();
            } catch (error) {
                console.error(error);
            }
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                console.error(error.message);
            }
        }
    };

    return (
        <div className="sign-up-form-container">
            <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                <h4>Sign up to ShopStyle</h4>
                <FormInput
                    label="Username"
                    type="text"
                    /* value={username} */
                    /* onChange={handleChange} */
                    name="username"
                    validation={SignUpFormValidation.username}
                    register={register}
                    purpose="signup"
                />

                {errors.username && (
                    <p className="signup-form-err-msg">{errors.username.message}</p>
                )}

                <FormInput
                    label="Email"
                    type="text"
                    /* value={email} */
                    /* onChange={handleChange} */
                    name="email"
                    register={register}
                    purpose="signup"
                />
                {errors.email && <p className="signup-form-err-msg">{errors.email.message}</p>}

                <FormInput
                    label="Password"
                    type="password"
                    /* value={password} */
                    /* onChange={handleChange} */
                    name="password"
                    register={register}
                    purpose="signup"
                />
                {errors.password && (
                    <p className="signup-form-err-msg">{errors.password.message}</p>
                )}

                <FormInput
                    label="Confirm Password"
                    type="password"
                    /* value={confirmPassword} */
                    /* onChange={handleChange} */
                    name="confirmPassword"
                    validation={SignUpFormValidation.confirmPassword}
                    register={register}
                    purpose="signup"
                />
                {errors.confirmPassword && (
                    <p className="signup-form-err-msg">{errors.confirmPassword.message}</p>
                )}

                <button type="submit" className="sign-up-form-btn">
                    Sign Up
                </button>
                <hr className="line-break" />
                <div className="redirect-user-to-sign-in-container">
                    <span>Already have an account?</span>
                    <Link to="/auth/signin" className="sign-in-btn-link">
                        Sign in
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
