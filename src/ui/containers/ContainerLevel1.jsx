import React from 'react'
import styles from './ContainerWrapper.module.css'

export default function ContainerLevel1({children, className = ""} ) {

  return (
    <div className={styles.container + " " + className}>
      {children}
    </div>
  )
}
