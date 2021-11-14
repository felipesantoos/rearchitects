import HR from "./HR";
import MemberCard from "./MemberCard";
import Person1 from "../../assets/images/person1.jpg";
import Person2 from "../../assets/images/person2.jpg";
import Person3 from "../../assets/images/person3.jpg";
import Person4 from "../../assets/images/person4.jpg";

import styles from "../styles/components/About.module.scss";

function About() {
    return (
        <div className={styles.container} id="about">
            <h2>About</h2>
            <HR />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </p>
            <div>
                <MemberCard
                    imgURL={Person1}
                    imgAlt=""
                    name="John Doe"
                    profession="CEO & Founder"
                    describe="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.                    "
                />
                <MemberCard
                    imgURL={Person2}
                    imgAlt=""
                    name="Jane Doe"
                    profession="Architect"
                    describe="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.                    "
                />
                <MemberCard
                    imgURL={Person3}
                    imgAlt=""
                    name="Mike Ross"
                    profession="Architect"
                    describe="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.                    "
                />
                <MemberCard
                    imgURL={Person4}
                    imgAlt=""
                    name="Dan Star"
                    profession="Architect"
                    describe="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.                    "
                />
            </div>
        </div>
    );
}

export default About;
