import styles from "../styles/components/MemberCard.module.scss";

interface MemberCardProps {
    imgURL: string;
    imgAlt: string;
    name: string;
    profession: string;
    describe: string;
}

function MemberCard({ imgURL, imgAlt, name, profession, describe }: MemberCardProps) {
    return (
        <div className={styles.container}>
            <img src={imgURL} alt={imgAlt} />
            <h2>{name}</h2>
            <span>{profession}</span>
            <p>{describe}</p>
            <button>Contact</button>
        </div>
    );
}

export default MemberCard;
