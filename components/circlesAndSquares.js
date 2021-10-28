import {useState} from 'react';
import styles from '../styles/circleAndSquares.module.css';
import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring';

export default function CirclesAndSquares(props) {
  const {hideBlackCircle, column} = props;
  const [accend, setAccend] = useState(true);
  const [translation, setTranslation] = useState(40);
  const [circleSize, setCircleSize] = useState(8); //150);
  const [squareSize, setSquareSize] = useState(10);
  const [spacerSize, setSpacerSize] = useState(14);
  const [offset, setOffset] = useState(16);

  const styles1 = useSpring({
    loop: {reverse: true},
    config: {
      duration: 105000,
    },
    from: {x: translation, y: translation},
    to: {x: -translation, y: -translation},
  });

  const styles2 = useSpring({
    loop: {reverse: true},
    config: {
      duration: 110000,
    },

    from: {x: -translation + offset, y: -translation + offset},
    to: {x: translation + offset, y: translation + offset},
  });

  const RedCircle = styled(animated.div)`
    position: absolute;
    height: ${circleSize}vw;
    width: ${circleSize}vw;
    border-radius: 150px;
    background-color: #ee281b;
    transform: translateX(${translation}vw) translateY(${translation}vw);
    mix-blend-mode: darken;
    z-index: 5;
  `;

  const BlackCircle = styled(animated.div)`
    position: absolute;
    height: ${circleSize}vw;
    width: ${circleSize}vw;
    border-radius: 150px;
    background-color: #d0d2d4;
    transform: translateX(-${translation}vw) translateY(-${translation}vw);
    mix-blend-mode: difference;
    z-index: 5;
  `;
  const GreyCircle = styled.div`
    position: absolute;
    height: ${circleSize}vw;
    width: ${circleSize}vw;
    border-radius: 150px;
    z-index: 1;
    background-color: #d0d2d4;
  `;

  const BlueSquare = styled.div`
    position: absolute;
    height: ${squareSize}vw;
    width: ${squareSize}vw;
    transform: rotate(45deg);
    background-color: #02adde;
    z-index: 1;
  `;
  const GreySquare = styled.div`
    height: ${spacerSize}vw;
    width: ${spacerSize}vw;
    background-color: #d0d2d4;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div className={column ? styles.column : styles.row}>
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>{' '}
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>{' '}
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>{' '}
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>
      <GreySquare>
        <BlueSquare />
        <GreyCircle />
        <RedCircle style={{...styles1}} />
        {!hideBlackCircle && <BlackCircle style={{...styles2}} />}
      </GreySquare>
    </div>
  );
}
