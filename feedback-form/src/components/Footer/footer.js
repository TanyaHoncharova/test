import { Component } from 'react';
import {device} from '../helpers/device';
import In from '../../image/in.svg';
import twitter from '../../image/twitter.svg';
import fb from '../../image/fb.svg';
import pinterest from '../../image/pinterest.svg';
import red from '../../image/red.png'
import green from '../../image/green_cartoon.png';
import yellow from '../../image/yellow.png'
import styled from 'styled-components';
import colors from '../helpers/var';


const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    max-width: 1440px;;
    height: 200px;
    background-color: ${colors.bgc_footer};
    border: 1px solid #D8D8D8;
`;

const StyledRed = styled.div`
display:none;
@media ${device.tablet}{
    display: block;
    width: 200px;
    height:200px;
    margin-right: 74px;
    margin-left: 59px;
    object-fit: fill;
}

`;
const Img = styled.img`
display:none;
@media ${device.tablet}{
display:block;
height:110%;
overflow: hidden ;
margin-left: -4%;
}
`;

const SlyledSocial = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 127px;
    margin:auto;
@media ${device.laptopL} {

    margin-top: 79px;
    margin-right: 764px;
}
   
`;
const StyledSvg = styled.img`
display:flex;
width:100%;
margin-right:${(props) => (props.last ? '0' : '30px')};`

const StyledCartoon = styled.div`
display:none;
@media ${device.tablet}{
    display:block;
    width: 205px;
    height: 200px;
    background-image: url(${green}),url(${yellow});
    transform: rotateY(180deg) 0;
    background-repeat: no-repeat;
    background-position:  left top, 150% 70% ;
}
`;

class Footer extends Component {
    render() {
        return(
        <StyledFooter >
            <StyledRed>
            <Img src={`${red}`} alt={'red'} />
            </StyledRed>
            <SlyledSocial>
                <StyledSvg src={In} alt='linkedin'/>
                <StyledSvg src={twitter} alt='twitter' />
                <StyledSvg src={fb} alt='facebook' />
                <StyledSvg last src={pinterest} alt='pinterest' /> 
            </SlyledSocial>
            <StyledCartoon />
        </StyledFooter >
)}
}

export default Footer;