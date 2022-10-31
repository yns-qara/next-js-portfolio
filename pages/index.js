import Sidebar from "../components/Sidebar"
import styles from '../styles/index.module.css'
import Home from "../components/Home"
export default function Index() {
  return (
    <>
      <div className={styles.container}>

        <Sidebar />
        <Home />
      </div>
    </>
  )
}
