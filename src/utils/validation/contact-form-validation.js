// validationSchema.js
export const ContactFormValidation = {
    name: {
        required: "Name is required",
        minLength: {
            value: 3,
            message: "Name must be at least 3 characters long",
        },
        maxLength: {
            value: 50,
            message: "Name must not be longer than 50 characters",
        },
        pattern: {
            value: /^[A-Za-z.-]*$/,
            message: "Name cannot have numbers or any other special characters",
        },
    },
    email: {
        required: "Email is required",
        pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
        },
    },
    subject: {
        required: "Subject is required",
        minLength: {
            value: 3,
            message: "Subject must be at least 3 characters long",
        },
        maxLength: {
            value: 50,
            message: "Subject must not be longer than 100 characters",
        },
    },
    message: {
        required: "Message is required",
        minLength: {
            value: 10,
            message: "Message must be at least 10 characters long",
        },
        maxLength: {
            value: 500,
            message: "Message must not be longer than 500 characters",
        },
    },
};
