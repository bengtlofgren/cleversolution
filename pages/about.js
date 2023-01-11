import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header.js';
import ExampleComponent from "react-rounded-image";
import MyPhoto from '../public/Graph Website.png'

const inter = Inter({ subsets: ['latin'] })

export default function about() {
    return (
      <>
        <main className={styles.main}>
        <div>
          <Header style={{ backgroundColor: '#eee', padding: '1em' }}>
          </Header>
          </div>
          
        <div className={styles.grid2}>
            <div className={styles.center}>
                <div className={styles.centerCircle} style={{overflow: 'hidden', }}>
                <Image
                    src="/bengt_picture_2_cropped.jpg"
                    layout="fill" 
                    alt="13"
                    priority
                    objectFit='cover'>
                    </Image>
                </div>
            </div>
            <div className={styles.center}>
                <div className={styles.centerCircle} style={{overflow: 'hidden', }}>

                <Image
                    src="/Graph Website.png"
                    alt="14"
                    layout="fill" 
                    priority
                >
                    </Image>

                </div>
            </div>
        </div>
          
  
          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Data Insights <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Find in-depth information about Next.js features and&nbsp;API.
              </p>
            </a>
  
            <a
              href="https://youtube.com/"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                8 Metrics <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Learn about Next.js in an interactive course with&nbsp;quizzes!
              </p>
            </a>
  
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{padding: '0.5em' }}>
              <Image
              src="/3d-Pie-Chart1.webp"
              alt="13"
              width={200}
              height={140}
              priority>
            </Image>
          </div>
              <h2 className={inter.className}>
                Personalised Feedback <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Discover and deploy boilerplate example Next.js&nbsp;projects.
              </p>
            </a>
  
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Acccelerate Progress <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Instantly deploy your Next.js site to a shareable URL
                with&nbsp;Vercel.
              </p>
            </a>
          </div>
        </main>
      </>
    )
  }