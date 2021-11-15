import { ReactNode } from "react";
import styles from "../styles/components/Title.module.scss";

interface TitleProps {
    children: ReactNode;
}

function Title({ children }: TitleProps) {
    return (
        <h2 className={styles.container}>{children}</h2>
    );
}

export default Title;
