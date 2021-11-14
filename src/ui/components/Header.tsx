import { createRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "../styles/components/Header.module.scss";

function Header() {
    const [isMenuShowed, setIsMenuShowed] = useState(false);
    const menuRef = createRef<HTMLDivElement>();
    const headerRef = createRef<HTMLElement>();

    function toggleMenu() {
        if (menuRef.current) {
            if (isMenuShowed) {
                menuRef.current.style.display = "none";
                setIsMenuShowed(false);
            } else {
                menuRef.current.style.display = "flex";
                setIsMenuShowed(true);
            }
        }
    }

    const mql = window.matchMedia("(max-width: 670px)");

    function setHeader(event: any) {
        if (event.matches) {
            if (headerRef.current && menuRef.current) {
                headerRef.current.style.flexDirection = "column";
                menuRef.current.style.display = "none";
                setIsMenuShowed(false);
            }
        } else {
            if (headerRef.current && menuRef.current) {
                headerRef.current.style.flexDirection = "row";
                menuRef.current.style.display = "flex";
                setIsMenuShowed(true);
            }
        }
    }

    mql.addEventListener("change", setHeader);

    return (
        <header ref={headerRef} className={styles.container}>
            <div className={styles.top}>
                <h4><a href="#banner"><span>BR</span> Architects</a></h4>
                <GiHamburgerMenu onClick={toggleMenu} />
            </div>
            <div ref={menuRef} className={styles.bottom}>
                <a href="#projects">Projects</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
    );
}

export default Header;
