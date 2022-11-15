// a horizontal roadmap with my achievements and remarcable stops. currently it will include where did I go to school , where did I learn programming , where did I get my first clients , where did I learn new technologies, where did I finish a project...

import Progress from "./Progress"
import styles from '../styles/about.module.css'

/*
 
<> I finished the project of  ...
.
.
.
.
<> I went to school ...

 */



const About = () => {
  return (
    // <div className={styles.container}>
    //   <div>
    //     <Progress />
    //   </div>
    //   <div>
    //     <Progress />
    //   </div>
    //   <div>
    //     <Progress />
    //   </div>
    // </div>
    <div className={styles.container}>
        <div className={styles.text}>
          <Progress />
        </div>
        <div className={styles.records}>
          records
        </div>
    </div>
  )
}

export default About