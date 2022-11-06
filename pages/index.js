import Sidebar from "../components/Sidebar"
import styles from '../styles/index.module.css'
import Home from "../components/Home"
import About from "../components/About"
import { useState } from "react"
export default function Index() {
  const [about, setAbout] = useState(false);
  const [home, setHome] = useState(true)
  return (
    <>
      <div className={styles.container}>

        <Sidebar
          about={about}
          setAbout={setAbout}
          home = {home}
          setHome = {setHome}
        />
        {
          about ? <Home /> : <About />
        }

      </div>
    </>
  )
}
