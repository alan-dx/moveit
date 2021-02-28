import { useContext, useEffect, useState } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'


export default function Countdown() {

    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    const [progress, setProgress] = useState(minutes/25) 

    useEffect(() => {
        setProgress(1 - (minutes / 25))
    }, [seconds])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {
                        isActive ? (
                            <button 
                                type="button" 
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}
                            >
                                Abandonar ciclo
                                <div 
                                    style={{width: `${progress * 100}%`}} 
                                    className={`${styles.progressBar}`} 
                                />
                            </button>
                        ) : (
                            <button 
                                type="button" 
                                className={styles.countdownButton}
                                onClick={startCountdown}
                            >
                                Inciar um ciclo
                            </button>
                        )
                    }
                </>
            )}



        </div>
    )
}