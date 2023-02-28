import React from 'react'
import styles from '@/styles/Home.module.css'

const Footer = () =>
{
    return (

        <footer className={styles.footer}>
            <p>@ {year} Some Dumbass Project</p>
        </footer>
    )
}

export default Footer