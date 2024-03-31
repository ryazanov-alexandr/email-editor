import { EmailEditor } from '../../components/email-editor/EmailEditor'
import { EmailList } from '../../components/email-list/EmailList'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles.home}>
        <h1>Email Editor</h1>
        <EmailEditor/>
        <EmailList/> 
    </div>
  )
}
