import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [mouseHover, setMouseHover] = React.useState(false);

  const buttonStyle = React.useMemo(() => ({
    style: 'none',
    height: '45px',
    width: '85px',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '7px',
    color: 'white',
    backgroundColor: mouseHover ? '#d9c47e' : '#c29911',
    transition: '0.5s',
    cursor: 'pointer'
  }))

  return (
    <div className={styles.container}>
      <Head>
        <title>coe</title>
      </Head>
      <h1>PROJETO COM NEXT LPE</h1>
      <h2>{process.env.NEXT_PUBLIC_API_URL}</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <Link href="CSR">
          <button 
            style={buttonStyle} 
            onMouseEnter={() => setMouseHover(true)}
            onMouseOut={() => setMouseHover(false)}
          >
            CSR
          </button>
        </Link>
        <Link href="SSG">
          <button 
            style={buttonStyle} 
            onMouseEnter={() => setMouseHover(true)}
            onMouseOut={() => setMouseHover(false)}
          >
            SSG
          </button>
        </Link>
        <Link href="SSR">
          <button 
            style={buttonStyle} 
            onMouseEnter={() => setMouseHover(true)}
            onMouseOut={() => setMouseHover(false)}
          >
            SSR
          </button>
        </Link>
        <Link href="ISR">
          <button 
            style={buttonStyle} 
            onMouseEnter={() => setMouseHover(true)}
            onMouseOut={() => setMouseHover(false)}
          >
            ISR
          </button>
        </Link>
      </div>
      {mouseHover && (
        <div style={{ position: 'fixed', right: 0, bottom: 0, fontSize: '12px' }}>
          sim todos botao ficam com hover perdao 
        </div>
      )}
    </div>
  )
}
