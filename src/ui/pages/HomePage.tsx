import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Location from "../components/Location";
import Projects from "../components/Projects";
import styles from "../styles/pages/HomePage.module.scss";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <Projects />
            <About />
            <Contact />
            <Location />
            <Footer />
        </div>
    );
}

export default HomePage;
