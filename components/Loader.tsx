import React from 'react'
import styles from '../styles/Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.circle}></div>
    <div className={styles.circle}></div>
    <div className={styles.circle}></div>
    <div className={styles.shadow}></div>
    <div className={styles.shadow}></div>
    <div className={styles.shadow}></div>
</div>
  )
}

export default Loader