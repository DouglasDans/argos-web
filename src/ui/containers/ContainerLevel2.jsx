import React, {Fragment} from 'react'
import styles from "@/ui/containers/ContainerLevel2.module.css";

export function ContainerLevel2({children, className = ""} ) {
   return (
      <div className={styles.container + " " + className}>
         {children}
      </div>
   )
}