import React from 'react'

//Styles
import styles from "./Header.module.css"


const Header = () => {
  return (
    <header className={styles.header}>
        <h1>React + TS ToDo</h1>
    </header>
  )
}

export default Header