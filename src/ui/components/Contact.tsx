import styles from "../styles/components/Contact.module.scss";
import HR from "./HR";
import Title from "./Title";

function Contact() {
    return (
        <div className={styles.container} id="contact">
            <form>
                <Title>Contact</Title>
                <HR />
                <p>Lets get in touch and talk about your next project.</p>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Comment" />
                <button>SEND MESSAGE</button>
            </form>
        </div>
    );
}

export default Contact;
