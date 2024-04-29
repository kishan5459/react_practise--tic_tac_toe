import React from 'react'
import styles from './Modal.module.css'
import { useEffect } from 'react'

export const Modal = ({ setOpenModal }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);
  return (
    // for closing modal by clicking outside of modal
    <div className={styles.modalBackground} onClick={() => setOpenModal(false)}>
        <div className={styles.modalContainer}>
            <div className={styles.titleCloseBtn}>
                <button onClick={() => setOpenModal(false)}> X </button>
            </div>
            <div className={styles.title}>
                <h1>Are You Sure you Want to Continue ?</h1>
            </div>
            <div className={styles.body}>
                <p>
                    The next page is awesome! You should move forward you will enjoy it
                </p>
            </div>
            <div className={styles.footer}>
                <button id="cancelBtn" onClick={() => setOpenModal(false)}>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}
