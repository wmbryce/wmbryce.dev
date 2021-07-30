import {useState} from 'react';
import styles from '../styles/circleAndSquares.module.css';
import styled from '@emotion/styled';
import {useSpring, animated} from 'react-spring';

export default function CirclesAndSquares(props) {
  const {hideBlackCircle, column} = props;
  const [accend, setAccend] = useState(true);
  const [translation, setTranslation] = useState(76);
  const [circleSize, setCircleSize] = useState(150);
  const [squareSize, setSquareSize] = useState(175);
  const [spacerSize, setSpacerSize] = useState(248);
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
    height: ${circleSize}px;
    width: ${circleSize}px;
    border-radius: 150px;
    background-color: #ee281b;
    transform: translateX(${translation}px) translateY(${translation}px);
    mix-blend-mode: darken;
  `;

  const BlackCircle = styled(animated.div)`
    position: absolute;
    height: ${circleSize}px;
    width: ${circleSize}px;
    border-radius: 150px;
    background-color: #d0d2d4;
    transform: translateX(-${translation}px) translateY(-${translation}px);
    mix-blend-mode: difference;
  `;
  const GreyCircle = styled.div`
    position: absolute;
    height: ${circleSize}px;
    width: ${circleSize}px;
    border-radius: 150px;
    zindex: 1;
    background-color: #d0d2d4;
  `;

  const BlueSquare = styled.div`
    position: absolute;
    height: ${squareSize}px;
    width: ${squareSize}px;
    transform: rotate(45deg);
    background-color: #02adde;
    display: flex;
    align-items: center;
    justify-content: center;
    zindex: 1;
    margin: 0px 36px;
  `;
  const GreySquare = styled.div`
    height: ${spacerSize}px;
    width: ${spacerSize}px;
    background-color: #d0d2d4;
    display: flex;
    align-items: center;
    justify-content: center;
    zindex: 1;
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
