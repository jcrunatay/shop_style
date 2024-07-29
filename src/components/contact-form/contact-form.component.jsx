import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

import { ContactFormValidation } from "../../utils/validation/contact-form-validation";

import "./contact-form.styles.scss";

const ContactForm = () => {
    const [isMessageSent, setIsMessageSent] = useState(false);

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setIsMessageSent(true);
        reset();
    };

    return (
        <Fragment>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputs-container">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        {...register("name", ContactFormValidation.name)}
                    />
                    {errors.name && (
                        <p className="contact-form-input-err-msg">{errors.name.message}</p>
                    )}

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        autoComplete="off"
                        {...register("email", ContactFormValidation.email)}
                    />
                    {errors.email && (
                        <p className="contact-form-input-err-msg">{errors.email.message}</p>
                    )}

                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        autoComplete="off"
                        {...register("subject", ContactFormValidation.subject)}
                    />
                    {errors.subject && (
                        <p className="contact-form-input-err-msg">{errors.subject.message}</p>
                    )}
                </div>
                <div className="inputs-container">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message" /* onChange={handleChange} value={message} */
                        {...register("message", ContactFormValidation.message)}
                    ></textarea>
                    {errors.message && (
                        <p className="contact-form-input-err-msg">{errors.message.message}</p>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
            {isMessageSent && (
                <p className="succesful-message-text">✔ Your message has been successfully sent</p>
            )}
        </Fragment>
    );
};

export default ContactForm;
