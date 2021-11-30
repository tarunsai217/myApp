// styles
import styles from './Home.module.css'

// components
import ActivityForm from './ActivityForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        transaction list
      </div>
      <div className={styles.sidebar}>
        <ActivityForm />
      </div>
    </div>
  )
}
