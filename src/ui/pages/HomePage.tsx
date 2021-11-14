import About from "../components/About";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Projects from "../components/Projects";
import styles from "../styles/pages/HomePage.module.scss";

function HomePage() {
    return (
        <div className={styles.container}>
            <Header />
            <Banner />
            <Projects />
            <About />
        </div>
    );
}

export default HomePage;
