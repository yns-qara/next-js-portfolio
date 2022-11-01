import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Home = () => {
  return (
    <div className={styles.contaier}>
        <div className={styles.left}>
          <h1>Hello, my name is <span>Younes Qara</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae sunt dolorem, incidunt ullam quibusdam perspiciatis illum totam modi natus dolorum rem! Quo doloribus, at eius, qui deserunt unde, porro voluptatum quae quas laborum aspernatur dolorem labore reiciendis perferendis nihil? Atque quis labore fuga laboriosam. Pariatur.</p>
          <Link href="#">more about me</Link>
        </div>
        <div className={styles.right}>
          <div>
            <Image src="/yns.png" width="300" height="397" />
          </div>
        </div>
    </div>
  )
}

export default Home