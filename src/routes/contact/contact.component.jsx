import "./contact.styles.scss";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-content-container">
                <div className="about-contact-context">
                    <h2 className="page-title">CONTACT</h2>
                    <p className="about-contact-text">
                        At ShopStyle, we believe in providing not just products, but experiences
                        that enhance your lifestyle. Dive into our exclusive collection where every
                        item tells a story of quality and style. Whether you're in search of the
                        latest in tech innovations or the trendiest additions to your wardrobe, our
                        curated selections are designed to cater to every taste and need.
                    </p>
                    <p className="contact-infos">
                        <span>Email: shopstyle@123.ca</span>
                        <span>Phone: 123-456-7890</span>
                        <span> Address: 123 Main Street, Random City, Canada</span>
                        <span>Operating Hours: Mon-Fri, 9am-5pm</span>
                    </p>
                </div>
                <iframe
                    title="ShopStype Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179013.0796612294!2d-73.66107245239793!3d45.488346431138254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1715789828132!5m2!1sen!2sca"
                    frameborder="0"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="map"
                ></iframe>
                <form action="">
                    <div className="inputs-container">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" autocomplete="off" />
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" autocomplete="off" />
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" autocomplete="off" />
                    </div>
                    <div className="inputs-container">
                        <label htmlFor="message">Message</label>
                        <textarea name="message"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
