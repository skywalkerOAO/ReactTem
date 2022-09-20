import { useState, useEffect } from 'react'
import Layout from '../../Layout'
import styles from './style/index.module.scss'

const Home = () => {
    useEffect(() => { 
    }, [])
    return(
        <>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.Content_Container}>
                            <div className={styles.center_Container_Wrapper}></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    ) 
}
export default Home
