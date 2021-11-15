import House1 from "../../assets/images/house1.jpg";
import House2 from "../../assets/images/house2.jpg";
import House3 from "../../assets/images/house3.jpg";
import House4 from "../../assets/images/house4.jpg";

import styles from "../styles/components/Projects.module.scss";
import HR from "./HR";
import ProjectItem from "./ProjectItem";
import Title from "./Title";

function Projects() {
    return (
        <div className={styles.container} id="projects">
            <Title>Projects</Title>
            <HR />
            <div>
                <ProjectItem
                    name="Summer House"
                    imgURL={House1}
                    imgAlt=""
                />
                <ProjectItem
                    name="Brick House"
                    imgURL={House2}
                    imgAlt=""
                />
                <ProjectItem
                    name="Renovated"
                    imgURL={House3}
                    imgAlt=""
                />
                <ProjectItem
                    name="Barn House"
                    imgURL={House4}
                    imgAlt=""
                />
                <ProjectItem
                    name="Summer House"
                    imgURL={House2}
                    imgAlt=""
                />
                <ProjectItem
                    name="Brick House"
                    imgURL={House1}
                    imgAlt=""
                />
                <ProjectItem
                    name="Renovated"
                    imgURL={House4}
                    imgAlt=""
                />
                <ProjectItem
                    name="Barn House"
                    imgURL={House3}
                    imgAlt=""
                />
            </div>
        </div>
    );
}

export default Projects;
