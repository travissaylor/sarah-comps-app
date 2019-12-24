import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'
import ButtonAppBar from '../components/buttonAppBar'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ButtonAppBar title='Home'/>
        <div className="hero">
          <h1 className="title">Sarah's Surviving Comps Special Place</h1>
          <p className="description">
            When life throws you lemons, I will emotionally support you while you make lemonade 
          </p>
  
          <div className="row">
            <Link href="/notes">
              <a className="card">
                <h3>Special Notes &rarr;</h3>
                <p>Read a note that was written with lots of love and your situation in mind!</p>
              </a>
            </Link>
            <Link href="/recharge">
              <a className="card">
                <h3>Recharge Yourself &rarr;</h3>
                <p>Feeling overwhelmed? Take a second to cheer yourself up!</p>
              </a>
            </Link>
            <a
              href="https://github.com/zeit/next.js/tree/master/examples"
              className="card"
            >
              <h3>Examples &rarr;</h3>
              <p>Find other example boilerplates on the Next.js GitHub.</p>
            </a>
          </div>
        </div>
        <Nav />
  
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
            border: 1px solid #9b9b9b;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    )
  }
}

export default Home
