import { Component } from 'react';
import styles from './footer.module.css';
import In from '../../image/in.svg';
import twitter from '../../image/twitter.svg';
import fb from '../../image/fb.svg';
import pinterest from '../../image/pinterest.svg';
import red from '../../image/red.png'
import green from  '../../image/green_cartoon.png'
import styled from 'styled-components';
import colors from '../helpers/var';


const StyledFooter = styled.div`
    display: flex;
    width: 100%;
    height: 210px;
    align-items: baseline;
    justify-content: space-between;
    background-color: ${colors.bgc_footer};
    border: 1px solid #D8D8D8;
`;

const StyledRed = styled.div`
overflow: hidden;
width: 211px;
margin-left: 4%;
`;
const Img = styled.img`


`;

const SlyledSocial = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 127px;
  margin-top: 79px;
  margin-left: 74px;
`;
const StyledGreen = styled.div`
    width: 100%;
    background-image: url(${green});
    transform: rotateY(180deg);
    background-repeat: no-repeat;
    margin-left:53%;
`;
class Footer extends Component {
    render() {
        return(
        <StyledFooter >
            <StyledRed>
            <Img src={`${red}`} alt={'red'} />
            </StyledRed>
            <SlyledSocial>
                <img src={In} alt='linkedin'/>
                <img src={twitter} alt='twitter' />
                <img src={fb} alt='facebook' />
                <img src={pinterest} alt='pinterest' />                
            </SlyledSocial>
            <StyledGreen/>
            <div className={styles.yellowCartoon} />
            </StyledFooter >
)}
}

export default Footer;