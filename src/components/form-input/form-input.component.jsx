import { Fragment } from "react";
import "./form-input.styles.scss";

const FormInput = ({ register, validation, label, purpose, ...otherprops }) => {
    const { name } = { ...otherprops };
    return purpose === "signup" ? (
        <Fragment>
            <label>{label}</label>
            <input {...otherprops} {...register(name, validation)} />
        </Fragment>
    ) : purpose === "signin" ? (
        <Fragment>
            <label>{label}</label>
            <input {...otherprops} {...register(name, { required: `${label} cannot be empty` })} />
        </Fragment>
    ) : (
        <Fragment>
            <label>{label}</label>
            <input {...otherprops} />
        </Fragment>
    );
};

export default FormInput;
