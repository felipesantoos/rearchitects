import styles from "../styles/components/ProjectItem.module.scss";

interface ProjectItemProps {
    name: string;
    imgURL: string;
    imgAlt: string;
}

function ProjectItem({ name, imgURL, imgAlt }: ProjectItemProps) {
    return (
        <div className={styles.container}>
            <div>
                <span>{name}</span>
                <img src={imgURL} alt={imgAlt} />
            </div>
        </div>
    );
}

export default ProjectItem;
