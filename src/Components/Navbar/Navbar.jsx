import React,{useContext} from 'react'
import styles from './Navbar.module.css'
import { Toggle } from './Toggle/Toggle'
import { ThemeContext } from '../../App'
import '../../../index.css'

export const Navbar = () => {

  const {isDark,setIsDark} = useContext(ThemeContext)
    
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
            Navbar
        </div>
        <Toggle
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
        />
    </div>
  )
}
