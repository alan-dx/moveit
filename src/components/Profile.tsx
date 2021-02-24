import styles from '../styles/components/Profile.module.css'

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/alan-dx.png" alt="Alan Almeida" />
            <div>
                <strong>Alan Almeida</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}