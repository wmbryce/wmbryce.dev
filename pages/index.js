import {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CirclesAndSquares from '../components/circlesAndSquares'
import Menu from '../components/menu';

export default function Home() {

  useEffect(()=> {
    console.log('Hello');
  },[])

  return (
    <div className={styles.container}>
      <Menu/>
      <div className={styles.main}>
        <CirclesAndSquares hideBlackCircle={true}/>
        <CirclesAndSquares/>
        <CirclesAndSquares/>
      </div>
    </div>
  )
}
