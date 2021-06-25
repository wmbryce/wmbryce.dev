import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/circleAndSquares.module.css'
import styled from '@emotion/styled';

export default function CirclesAndSquares(props) {
  const {hideBlackCircle} = props;

  let translationAmount = 90

  const RedCircle = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 150px;
    background-color: #EE281B;
    transform: translateX(${translationAmount}px) translateY(${translationAmount}px);
    mix-blend-mode: darken;
  `

  const BlackCircle = styled.div`
    position: absolute;
    height: 150px;
    width: 150px;
    border-radius: 150px;
    background-color: #D0D2D4;
    transform: translateX(-${translationAmount}px) translateY(-${translationAmount}px);
    mix-blend-mode: difference;
  `


  return (
        <div className={styles.row}>
          <div className={styles.greySquare}>
            <div className={styles.blueSquare}/>
            <div className={styles.greyCircle}/>
            <RedCircle/>
            {!hideBlackCircle && (<BlackCircle/>)}
          </div>
          <div className={styles.greySquare}>
            <div className={styles.blueSquare}/>
            <div className={styles.greyCircle}/>
            <RedCircle/>
            {!hideBlackCircle && (<BlackCircle/>)}
          </div>
          <div className={styles.greySquare}>
            <div className={styles.blueSquare}/>
            <div className={styles.greyCircle}/>
            <RedCircle/>
            {!hideBlackCircle && (<BlackCircle/>)}
          </div>
          <div className={styles.greySquare}>
            <div className={styles.blueSquare}/>
            <div className={styles.greyCircle}/>
            <RedCircle/>
            {!hideBlackCircle && (<BlackCircle/>)}
          </div>
          <div className={styles.greySquare}>
            <div className={styles.blueSquare}/>
            <div className={styles.greyCircle}/>
            <RedCircle/>
            {!hideBlackCircle && (<BlackCircle/>)}
          </div>
          <div className={styles.greySquare}>
            <div className={styles.blueSquare}/>
            <div className={styles.greyCircle}/>
            <RedCircle/>
            {!hideBlackCircle && (<BlackCircle/>)}
          </div>
          <div className={styles.greySquare}>
            <div className={styles.blueSquare}/>
            <div className={styles.greyCircle}/>
            <RedCircle/>
            {!hideBlackCircle && (<BlackCircle/>)}
          </div>
        </div>
  )
}
