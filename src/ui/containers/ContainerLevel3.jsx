import React, {Fragment} from 'react'
import styles from "@/ui/containers/ContainerLevel3.module.css";

export function ContainerLevel3({children, className = ""} ) {
   return (
      <div className={styles.container + " " + className}>
         {children}
      </div>
   )
}