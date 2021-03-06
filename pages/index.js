import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';

export default function Home() {

  const nameArray = [
    'Yanick der Beste',
    'Gian der flinke',
    'Peer der grosse',
    'Pablo du stinksch'
  ]

  let firstName = 'Yanick'
  let secondName = 'Pablo' 
  let tempName = ''
  const [activeName, setActiveName] = useState(firstName);
  const [activeIndex, setActiveIndex] = useState(0);


  function switchTitle() {
    if(activeIndex < nameArray.length - 1){
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Learn Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title" onClick={switchTitle}>
          {nameArray[activeIndex]}
        </h1>
      </main>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
