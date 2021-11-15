import LocationAbove from "../../assets/images/location-above.jpg";

import styles from "../styles/components/Location.module.scss";

function Location() {
    return (
        <div className={styles.container}>
            <img src={LocationAbove} alt="" />
        </div>
    );
}

export default Location;
