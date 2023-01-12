import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Improve Your Grades</title>
        <meta name="description" content="Using our tracking software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div>
        <Header style={{ backgroundColor: '#eee', padding: '1em' }}>
        </Header>
        </div>
        
        <div style={{padding: '2em', paddingBottom: '4em' }}>
          <div classname={styles.img} style={{ marginLeft: '-5em', marginTop: '-.5em' }}>
          <Image
          src="/Graph Website no background copy.png"
          alt="13"
          width={900}
          height={500}
          priority>
          </Image>
          </div>
        </div>
        

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{padding: '0.5em' }}>
            <Image
              src="/graph temp.png"
              alt="13"
              width={200}
              height={140}
              priority>
            </Image>
          </div>
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
            <div style={{padding: '0.5em' }}>
            <Image
              src="/Screenshot 2023-01-11 at 00.58.53.png"
              alt="13"
              width={200}
              height={140}
              priority>
            </Image>
          </div>
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
              src="/graph temp2.png"
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
            <div style={{padding: '0.5em' }}>
            <Image
              src="/mini graph 3.png"
              alt="13"
              width={200}
              height={140}
              priority>
            </Image>
          </div>
            <h2 className={inter.className}>
              Acccelerate Progress <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        <div style={{width: 'var(--max-width)', maxWidth: '100%', marginTop:'3em'}}>
          <div style={{borderStyle: 'solid', borderWidth: 'thin', padding : '1em'}} >
              <p className={inter.className} style={{ marginBottom: '1em', color: 'rgba(255,255,255,0.8)'}}>
              Introducing Progress Track, the ultimate progress tracking website for students. This innovative platform allows students to stay on top of their studies by providing an easy way to track their progress and set goals.
              </p>
              <p className={inter.className} style={{ marginBottom: '1em', color: 'rgba(255,255,255,0.8)'}}>
              Our website offers a variety of features to help students stay organized and motivated. The calendar feature allows students to schedule assignments and exams, set reminders and deadlines and even track their progress by day. Additionally, our to-do list feature enables students to set daily, weekly and long-term goals and mark them off as they are achieved.
              </p>
              <p className={inter.className} style={{ marginBottom: '1em', color: 'rgba(255,255,255,0.8)'}}>
              We also provide a grade tracker feature that allows students to input their grades from all their classes in one convenient location. The grade tracker then calculates a student's overall GPA, so they can track their progress throughout the semester and school year.
              </p>
              <p className={inter.className} style={{ marginBottom: '1em', color: 'rgba(255,255,255,0.8)'}}>
              Our website also offers a feature for creating flashcards, this is especially helpful for students who are preparing for a test or exam, as it allows them to organize and study their notes more efficiently.
              We understand that students may need help staying motivated throughout their studies, so we also provide a rewards system that students can earn points and badges as they complete tasks and achieve goals.
              With Progress Track, students have access to all of the tools they need to stay organized, set goals, and track their progress. Our website is designed to help students achieve their full potential by providing them with the tools they need to succeed.
              In conclusion, Progress Track is the ultimate progress tracking website for students. With its easy to use interface, students can easily stay on top of their studies and feel more organized and motivated. The platform offers a variety of features such as calendar, grade tracker, flashcards, goal setting, rewards and more to help students succeed and reach their full potential. Sign up now and take control of your studies.
              </p>
          </div>
        </div>
      </main>
    </>
  )
}
