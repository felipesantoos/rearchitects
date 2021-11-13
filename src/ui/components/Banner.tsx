import Building from "../../assets/images/building.jpg";

import styles from "../styles/components/Banner.module.scss";

function Banner() {
    return (
        <div className={styles.container}>
            <img src={Building} alt="" />
            <p><span>BR</span> Architects</p>
        </div>
    );
}

export default Banner;
