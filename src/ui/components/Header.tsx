import styles from "../styles/components/Header.module.scss";

function Header() {
    return (
        <div className={styles.container}>
            <h4><a href="#banner"><span>BR</span> Architects</a></h4>
            <div>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Header;
