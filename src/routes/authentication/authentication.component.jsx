import { Routes, Route } from "react-router-dom";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
    return (
        <Routes>
            <Route path="signin" element={<SignInForm />} />
            <Route path="signup" element={<SignUpForm />} />
        </Routes>
    );
};

export default Authentication;
